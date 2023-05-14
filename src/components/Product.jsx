import Image from "next/dist/client/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import ReactCurrencyFormatter from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

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
  // Throws actions in Redux
  const dispatch = useDispatch();

  /* Item Ratings */
  const rating = [];

  for (let i = 0; i < rate; i++) {
    rating.push(<StarIcon className="text-yellow-500 h-5" key={i} />);
  }
  // const [randomRating] = useState(
  //   Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) +
  //     MIN_RATING /* ensure min value of range starts at min rating value */
  // ); /*Generates number of max range and min range of 5 & 1;*/

  /* Item Prime Availability */
  const [hasPrime] = "Yes";
  // const [hasPrime] = useState(Math.random() < 0.5);
  // Randomizing whether item has prime; if the number between 0-1 is less than 0.5, it has prime*/

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
      <Image src={image} height={200} width={200} objectFit="contain" />

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
            alt="Amazon Prime Available for item"
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button onClick={() => addItemToCart()} className="mt-auto button">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
