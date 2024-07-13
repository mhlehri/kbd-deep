import { CheckCircle2, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Success() {
  return (
    <div className="h-[70vh] flex justify-center items-center">
      <div className="text-green-500 border p-5 text-center rounded-lg space-y-2">
        <CheckCircle2 className="mx-auto" />
        <h1 className="text-xl">Your Oder Successfully Placed!</h1>
        <p>please wait for 3 days</p>
        <Button asChild variant="outline" className="flex gap-2">
          <Link to="/products">
            <ShoppingCart /> Continue Shopping
          </Link>
        </Button>
      </div>
    </div>
  );
}
