import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductSect from "../components/ProductSect";
import { getSession } from "next-auth/react";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Anthony's Online Store </title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* BANNER */}
        <Banner />
        {/* PRODUCT SECTION */}
        <ProductSect products={products} />
        {/* pass through products json for destructuring */}
      </main>
    </div>
  );
}

// FAKE STORE API to populate items being sold, using Next.js
//GET request to https://fakestoreapi.com/products
export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
      session,
    },
  };
}
