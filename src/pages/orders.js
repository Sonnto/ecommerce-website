import Header from "../components/Header";
import { useSession, getSession } from "next-auth/react";
import moment from "moment";
import db from "../../firebase";
import Order from "../components/Order";

function Orders({ orders }) {
  const { data: session } = useSession() ?? {}; //Ensure no TypeError so if not falsy null/undefined, return truthy useSession() as session. Otherwise, return empty object; either way, will have data property to avoid Type Error.
  console.log(orders);
  return (
    <div>
      <Header />
      <main className="max-w-sreen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-blue-400">
          Your Orders
        </h1>

        {session ? (
          <h2>{orders.length} Orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}

        <div className="mt-5 space-y-4">
          {orders?.map(
            ({ id, amount, amountShipping, items, timestamp, images }) => (
              <Order
                key={id}
                id={id}
                amount={amount}
                amountShipping={amountShipping}
                items={items}
                timestamp={timestamp}
                images={images}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
}

export default Orders;

//Node.js
export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  //Get customer/users' logged in credentials
  const session = await getSession(context);

  if (!session) {
    return {
      props: {}, // if server is empty, aka not signed in, return empty properties as we don't want to continue
    };
  }

  // draws from the Firebase DB and get what the user ordered in descending order
  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  // draws from Stripe orders
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(), //translate to unix to retain date formatting
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data, //gives items that came back that was ordered by customer/user through ID
    }))
  );

  return {
    props: {
      orders,
      session,
    },
  };
}
