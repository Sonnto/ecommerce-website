import { buffer } from "micro";
import * as admin from "firebase-admin";
import rawBody from "raw-body";

//Secures connection to Firebase from backend (api folder)
const serviceAccount = require("../../../permissions.json");

//Initialize app if there is not one already initialized; otherwise, use the app that already has been initialized
const app = !admin.apps.length
  ? admin.initializeApp({ credential: admin.credential.cert(serviceAccount) })
  : admin.app();

//Establishes connection to Stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET; // - may require updating when in development mode as it may reset if the server is interrupted and restarts - keep an eye, if it doesn't match, type `stripe listen --forward-to localhost:3000/api/webhook` into terminal

const fulfilOrder = async (session) => {
  console.log("Fulfilling order...", session);
  console.log("Yo-hello! Here I am!");
  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(
        `SUCCESS: Order ${session.id} has been added to the Firestore database`
      );
    });
};

export default async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await rawBody(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let events;

    //Verify that the event posted came from Stripe
    try {
      events = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log("ERROR !!", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    //Handle the checkout.session.completed event from Stripe
    if (events.type === "checkout.session.completed") {
      const session = events.data.object;

      //Fulfil the order, stores information in our Firebase Database and passed to the /success page so those who fulfils the order can see what they're fulfilling.
      return fulfilOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send(`Webhook Error: ${err.message}`));
    }
  }
};

// modify if not handling endpoint the "Next.js way", change each endpoint with config file
export const config = {
  api: {
    bodyParser: false, //disable bodyParser, don't want because want request as a `stream`, not a parsed object
    externalResolver: true, //resolved (externally, not me) by Stripe
  },
};
