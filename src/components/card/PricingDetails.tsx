import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useAppSelector } from "../../redux/hook";

export default function PricingDetails() {
  const { pathname } = useLocation();
  const cart = useAppSelector((state) => state.cart.items);
  const subTotal = cart.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);
  const shippingCost = subTotal > 200 ? 0 : subTotal ? 40 : 0;
  const tax = subTotal ? 2 : 0;
  const total = subTotal + shippingCost + tax;
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between">
          <h1>Subtotal</h1>
          <p>${subTotal}</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping</p>
          <p>${shippingCost}</p>
        </div>
        <div className="flex justify-between">
          <p>Tax</p>
          <p>${tax}</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Total</p>
          <p>${total}</p>
        </div>
      </CardContent>
      {pathname.includes("cart") && cart.length < 0 && (
        <CardFooter>
          <Button
            className="w-full bg-zinc-500 text-white py-3 rounded-md"
            asChild
          >
            <Link to="/checkout">Proceed to Checkout</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
