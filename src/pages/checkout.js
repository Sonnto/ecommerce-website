import Header from "../components/Header";
import Image from "next/image";

function Checkout() {
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* CHECKOUT LEFT SIDE */}
        <div>
          <Image
            src="/images/prime-day-banner.webp"
            width={1020}
            height={250}
            objectFit="contain"
          />
        </div>

        {/* CHECKOUT RIGHT SIDE */}
        <div></div>
      </main>
    </div>
  );
}

export default Checkout;
