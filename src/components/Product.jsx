import { React, useState } from "react";
import Image from "next/dist/client/image";
import { StarIcon } from "@heroicons/react/20/solid";
import ReactCurrencyFormatter from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

function Product({
  id,
  title,
  price,
  description,
  category,
  image,
  rate,
  count,
}) {
  // Throws actions in Redux
  const dispatch = useDispatch();

  /* Item Ratings */
  const rating = [];

  for (let i = 0; i < rate; i++) {
    rating.push(<StarIcon className="text-yellow-500 h-5" key={i} />);
  }

  /* Item Prime Availability */
  const [hasPrime] = "Yes";

  /* Adds Item to Store */
  const addItemToCart = () => {
    // Product added to the shopping cart that carries with it the properites that details the product
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rate,
      count,
      hasPrime,
    };
    // send product as action to Redux store (cartSlice)
    dispatch(addToCart(product));
  };

  return (
    <div className="relative flex flex-col m-8 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      {/* Next.js image tag */}
      <Image
        src={image}
        alt={`preview of ${title}`}
        height={200}
        width={200}
        objectFit="contain"
      />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {rating}
        <p className="ml-4 text-sm leading-6">{count} ratings</p>
      </div>

      <p className="text-xs mb-2 mt-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <ReactCurrencyFormatter quantity={price} currency="CAD" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            className="h-6"
            src="/images/prime_checkmark.png"
            alt="Amazon Prime Available logo for item"
          />
          <p className="text-xs text-gray-500">FREE Next Day Shipping</p>
        </div>
      )}

      <button onClick={addItemToCart} className="mt-auto button">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
