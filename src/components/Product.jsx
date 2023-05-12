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
    <div>
      <p>{category}</p>
      {/* Next.js image tag */}
      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4>{title}</h4>
      {/* <p>
        {rate} {count}
      </p> */}
      <div className="flex">
        {/* Array of [rating], filled with empty values, and map through those values; gives 2 values, second is index; amount of stars is decided by rating variable that is randomized*/}
        {/*  */}
        {Array(myStars)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5" />
          ))}
      </div>

      <p>{description}</p>
      <div>
        <ReactCurrencyFormatter quantity={price} currency="CAD" />
      </div>

      {hasPrime && (
        <div>
          <img
            className="h-10"
            src="/images/prime_check.png"
            alt="Amazon Prime Available for item"
          />
          <p>FREE Next-day Delivery</p>
        </div>
      )}

      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
