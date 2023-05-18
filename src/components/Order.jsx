import moment from "moment";
import ReactCurrencyFormatter from "react-currency-formatter";

function Order({ id, amount, amountShipping, items, timestamp, images }) {
  console.log(id);
  console.log(amount);
  console.log(amountShipping);
  console.log(items);
  console.log(timestamp);
  console.log(images);

  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACED ON</p>
          <p>{moment.unix(timestamp).format("MMM DD, YYYY")}</p>
        </div>
        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>
            <ReactCurrencyFormatter quantity={amount} currency="CAD" /> - Next
            Day Shipping{" "}
            <ReactCurrencyFormatter quantity={amountShipping} currency="CAD" />
          </p>
        </div>
        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {items.length} {items.length === 1 ? "item" : "items"}
        </p>
        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER # {id}
        </p>
      </div>
      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((image) => (
            <img
              src={image}
              alt="preview of item ordred"
              className="h-20 object-contain sm:h-32"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
