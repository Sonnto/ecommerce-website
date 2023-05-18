import React from "react";
import Image from "next/image";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
//Route Pages
import { useRouter } from "next/router";
//Pulls shopping cart information from Global Store
import { useSelector } from "react-redux";
import { selectItems } from "../slices/cartSlice";

function Header() {
  //Ensures login or logged out session is everywhere
  const { data: session } = useSession() ?? {}; //Ensure no TypeError so if not falsy null/undefined, return truthy useSession() as session. Otherwise, return empty object; either way, will have data property to avoid Type Error.
  //Routes pages
  const router = useRouter();
  //Shopping Cart items
  const items = useSelector(selectItems);

  return (
    <header>
      {/* TOP NAV */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mx-6 mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="/images/amazon_logo.png"
            width={150}
            height={40}
            className="cursor-pointer" //tailwind here
            objectFit="contain" //keeps aspect ratio
          />
        </div>

        {/* SEARCH BAR */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>

        {/* ACCOUNTS, SHOPPING CART*/}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div
            onClick={!session ? () => signIn() : () => signOut()}
            className="cursor-pointer link"
          >
            <p className="hover:underline">
              {session ? `Hello, ${session.user.name}!` : `Sign in`}
            </p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div
            onClick={() => router.push("/orders")}
            className="cursor-pointer link"
          >
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => session && router.push("/checkout")}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>

            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Cart
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center font-extrabold md:text-sm">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Best Sellers</p>
        <p className="link">Deals Store</p>
        <p className="link">New Releases</p>
        <p className="link">Customer Service</p>
        <p className="link">Prime</p>
        <p className="link hidden lg:inline-flex">Sell</p>
        <p className="link hidden lg:inline-flex">Home</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Books</p>
        <p className="link hidden lg:inline-flex">Kindle Books</p>
        <p className="link hidden lg:inline-flex">Fashion</p>
        <p className="link hidden lg:inline-flex">Health</p>
        <p className="link hidden lg:inline-flex">Automotive</p>
      </div>
    </header>
  );
}

export default Header;
