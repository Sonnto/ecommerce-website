import Header from "../components/Header";
import { useRouter } from "next/router";

function Orders() {
  const router = useRouter();
  return (
    <div>
      <Header />
      <main>
        <h1>Your Orders</h1>
      </main>
    </div>
  );
}

export default Orders;
