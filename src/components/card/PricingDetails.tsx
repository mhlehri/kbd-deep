import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function PricingDetails() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between">
          <h1>Subtotal</h1>
          <p>$200</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping</p>
          <p>$0</p>
        </div>
        <div className="flex justify-between">
          <p>Tax</p>
          <p>$0</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Total</p>
          <p>$230</p>
        </div>
      </CardContent>
      {pathname.includes("cart") && (
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
