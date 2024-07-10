import { MessageSquareHeart, Sparkles, Trophy, Truck } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function Service() {
  return (
    <section className="flex gap-5 flex-wrap md:justify-normal justify-center">
      <Card>
        <CardHeader>
          <Truck />
          <CardTitle>Free Shipping</CardTitle>
          <CardDescription>On all orders over $200</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <Sparkles />
          <CardTitle>Top Quality</CardTitle>
          <CardDescription>Quality products</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <Trophy />
          <CardTitle>Top Brands</CardTitle>
          <CardDescription>Shop from top brands</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <MessageSquareHeart />
          <CardTitle>24/7 Support</CardTitle>
          <CardDescription>Ready for you</CardDescription>
        </CardHeader>
      </Card>
    </section>
  );
}
