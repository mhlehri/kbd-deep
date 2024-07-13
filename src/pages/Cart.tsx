import { DollarSign, ShoppingBag, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { CartTable } from "../components/table/CartTable";
import PricingDetails from "../components/card/PricingDetails";
import Title from "../components/Title";
import { useEffect } from "react";

export default function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cart = true;
  return (
    <div className="my-10">
      {cart ? (
        <div className="space-y-10">
          <Title>
            <ShoppingCart /> Shopping Cart
          </Title>
          <CartTable />
          <div className="flex justify-between flex-col-reverse md:flex-row gap-10 items-center">
            <div className="space-y-2">
              <Title>
                <ShoppingBag /> Shop More
              </Title>
              <Title>
                <DollarSign /> Save More{" "}
              </Title>
              <p>Get free shipping on orders over $200.00</p>
              <Button asChild>
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </div>
            <PricingDetails />
          </div>
        </div>
      ) : (
        <div className="text-center flex flex-col justify-center items-center h-[80vh]">
          <ShoppingBag className="size-10" />
          <Title>Shopping Cart</Title>
          <p>Your cart is empty.</p>
          <Link to="/products" className="mt-4">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
