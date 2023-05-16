import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/cartSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import ReactCurrencyFormatter from "react-currency-formatter";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  //Ensures login or logged out session is everywhere
  const { data: session } = useSession() ?? {}; //Ensure no TypeError so if not falsy null/undefined, return truthy useSession() as session. Otherwise, return empty object; either way, will have data property to avoid Type Error.
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  //Checkout via Stripe session
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    //Create checkout Stripe session via calling backend
  };

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* CHECKOUT LEFT SIDE */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="/images/prime-day-banner.webp"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Shopping Cart is Empty"
                : "Your Shopping Cart"}
            </h1>

            {items.map((item, i) => (
              //when mapping in React, include unique key (worst case use index)
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                description={item.description}
                category={item.category}
                image={item.image}
                rate={item.rate}
                count={item.count}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* CHECKOUT RIGHT SIDE, SUBTOTAL, TOTAL */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal (
                {items.length > 1
                  ? `${items.length} items`
                  : `${items.length} item`}
                ):{" "}
                <span className="font-bold">
                  <ReactCurrencyFormatter quantity={total} currency="CAD" />
                </span>
              </h2>

              <button
                role="link"
                onClick={createCheckoutSession}
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
