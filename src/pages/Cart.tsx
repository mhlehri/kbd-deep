import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { CartTable } from "../components/table/CartTable";

export default function Cart() {
  const cart = true;
  return (
    <div>
      {cart ? (
        <div className="space-y-5 mt-10">
          <h1 className="text-3xl flex items-center gap-3">
            <ShoppingBag /> Shopping Cart
          </h1>
          <CartTable />
        </div>
      ) : (
        <div className="text-center flex flex-col justify-center items-center h-[80vh]">
          <ShoppingBag className="size-10" />
          <h1 className="text-3xl">Shopping Cart</h1>
          <p className="text-zinc-600">Your cart is empty.</p>
          <Link to="/products" className="mt-4">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
