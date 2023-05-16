const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;
  //destructure and pull out those values; same as `req.body.items` and `req.body.email`

  console.log(items);

  const transformedItems = items.map((item) => ({
    //implicit return
    price_data: {
      currency: "CAD",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        description: item.description,
        images: [item.image],
      },
    },
    quantity: 1,
  }));

  console.log(transformedItems);
  console.log(
    transformedItems.map((item) => item.price_data.product_data.images)
  );
  console.log(
    transformedItems.map((item) => item.price_data.product_data.metadata)
  );
  console.log("right before the session await begins");

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_options: [
      "shipping_rate"["shr_1N8DnGBgOzp49Zd0QNUP8GtK"],
      "shipping_rate"["shr_1N8DS0BgOzp49Zd0kzj6Qxyv"],
      "shipping_rate"["shr_1N8Dr8BgOzp49Zd0QFDfAkNG"],
    ],
    //from stripe's website dashboard for project ecommerce-website
    shipping_address_collection: {
      allowed_countries: ["CA", "US", "GB", "HK"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    }, //to push values/data back to Firebase afterwards
  });
  console.log("after session async function");
  console.log(transformedItems);
  res.status(200).json({ id: session.id });
};
