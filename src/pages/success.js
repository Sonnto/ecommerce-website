import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Header from "../components/Header";

function success() {
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">Your order has been confirmed!</h1>
          </div>
          <p>
            Thank you for shopping with us! We will send a confirmation once
            your order has been shipped.
          </p>
          <p>
            If you would like to check the status of your order(s), please click
            the link below.
          </p>
        </div>
      </main>
    </div>
  );
}

export default success;
