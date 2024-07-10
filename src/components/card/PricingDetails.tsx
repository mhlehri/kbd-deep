import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { DollarSign, ShoppingCart } from "lucide-react";

export default function PricingDetails() {
  return (
    <div className="flex justify-between items-center">
      <div className="space-y-2">
        <h1 className="text-3xl flex items-center gap-2">
          <ShoppingCart /> Shop More
        </h1>
        <h1 className="text-3xl flex items-center gap-2">
          <DollarSign /> Save More{" "}
        </h1>
        <p className="text-zinc-600">
          Get free shipping on orders over $200.00
        </p>
        <Button>
          <a href="/products">Continue Shopping</a>
        </Button>
      </div>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Pricing Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <h1>Subtotal</h1>
            <p>$200</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>$20</p>
          </div>
          <div className="flex justify-between">
            <p>Tax</p>
            <p>$10</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Total</p>
            <p>$230</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-zinc-500 text-white py-3 rounded-md">
            Proceed to Checkout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
