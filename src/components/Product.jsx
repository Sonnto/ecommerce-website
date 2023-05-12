import Image from "next/dist/client/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import ReactCurrencyFormatter from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

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
  const [myStars] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) +
      MIN_RATING /* ensure min value of range starts at min rating value */
  ); /*Generates number of max range and min range of 5 & 1;*/

  const [hasPrime] = useState(Math.random() < 0.5);
  /* Randomizing whether item has prime; if the number between 0-1 is less than 0.5, it has prime*/

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      {/* Next.js image tag */}
      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4 className="my-3">{title}</h4>
      {/* <p>
        {rate} {count}
      </p> */}
      <div className="flex">
        {/* Array of [rating], filled with empty values, and map through those values; gives 2 values, second is index; amount of stars is decided by rating variable that is randomized*/}
        {/*  */}
        {Array(myStars)
          .fill()
          .map((_, i) => (
            <StarIcon className="text-yellow-500 h-5" />
          ))}
        <p className="ml-5 text-sm">{count} ratings</p>
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
            alt="Amazon Prime Available for item"
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add to Cart</button>
    </div>
  );
}

export default Product;
