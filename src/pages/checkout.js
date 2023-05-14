import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/cartSlice";
import CheckoutProduct from "../components/CheckoutProduct";

function Checkout() {
  const items = useSelector(selectItems);

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
        <div>{items.length > 0}</div>
      </main>
    </div>
  );
}

export default Checkout;
