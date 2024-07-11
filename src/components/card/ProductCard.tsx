import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { TProduct } from "../../type";
import Rating from "../Rating";

export default function ProductCard({ product }: { product: TProduct }) {
  const { slug, name, brand, quantity, price, rating, image } = product;
  return (
    <Card className="min-w-fit">
      <CardHeader>
        <img
          src={image}
          alt={name}
          className="object-cover w-72 h-52 rounded-lg"
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{brand}</CardDescription>
        <div className="flex justify-between items-center">
          <CardDescription>Stock: {quantity}</CardDescription>
          <p>${price}</p>
        </div>
        <Rating rating={rating} />
      </CardContent>
      <CardFooter>
        <Link to={`/products/${slug}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
