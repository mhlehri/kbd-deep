import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { CartTable } from "../components/table/CartTable";
import PricingDetails from "../components/card/PricingDetails";

export default function Cart() {
  const cart = true;
  return (
    <div className="my-10">
      {cart ? (
        <div className="space-y-10">
          <h1 className="text-3xl flex items-center gap-3">
            <ShoppingBag /> Shopping Cart
          </h1>
          <CartTable />
          <PricingDetails />
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
