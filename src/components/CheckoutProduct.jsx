import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";
import ReactCurrencyFormatter from "react-currency-formatter";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  rate,
  count,
  hasPrime,
}) {
  rating = [];
  for (let i = 0; i < rate; i++) {
    rating.push(<StarIcon className="text-yellow-500 h-5 mt-1" key={i} />);
  }
  return (
    <div className="grid grid-cols-5">
      {/* LEFT SINGLE COLUMN, IMAGES */}
      <Image src={image} height={200} width={200} objectFit="contain" />
      {/* MIDDLE 3 COLUMN, TITLE, PRICE, DESCRIPTION */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {rating}
          <p className="ml-4 text-sm leading-6 mt-1">{count} ratings</p>
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <ReactCurrencyFormatter quantity={price} currency="CAD" />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="images/prime_checkmark.png"
              alt="Amazon Prime Available logo for item"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      {/* RIGHT SINGLE COLUMN, BUTTONS */}
    </div>
  );
}

export default CheckoutProduct;
