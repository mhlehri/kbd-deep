import {
  ChevronRight,
  DollarSign,
  FileSearchIcon,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import { Button } from "../components/ui/button";
import { useGetProductByIdQuery } from "../redux/api";
import { TProduct } from "../type";
import Title from "../components/Title";
import NotDataFound from "../components/NotDataFound";
import Loading from "../components/Loading";

export default function ProductDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { productId: productSlug } = useParams();

  const { data, isLoading, isSuccess } = useGetProductByIdQuery(productSlug);

  const p = !isLoading && data?.success ? (data.data as TProduct) : null;

  return (
    <div>
      {!isLoading && isSuccess && p ? (
        <div>
          <div className="flex mt-10 text-zinc-600">
            products <ChevronRight />{" "}
            <span className="text-zinc-950">{p.slug}</span>
          </div>
          <div className="flex mt-10 md:flex-row flex-col justify-center lg:p-5 lg:border border-b pb-4 lg:rounded-lg gap-10">
            <div className="w-full flex-1">
              <img
                src={p?.image}
                alt=""
                className="rounded-lg max-w-md md:max-w-full w-full object-cover md:h-96 max-h-96"
              />
            </div>
            <div className="space-y-5 flex-1">
              <h1 className="text-3xl font-medium">{p.name}</h1>
              <h3 className="text-2xl font-medium">${p.price}</h3>
              <hr />
              <p>{p.description}</p>
              <Rating rating={p.rating} />
              <h6>Brand: {p.brand}</h6>
              <h6 className="bg-zinc-100 text-sm inline-block p-1 rounded-lg">
                Availablity: {p.quantity} in stock
              </h6>
              <Button disabled={p.quantity <= 0} className="flex gap-2">
                <ShoppingCart /> Add to Cart
              </Button>
            </div>
          </div>
          <div className="space-y-2 mt-20 text-center">
            <Title className="justify-center">
              <ShoppingBag /> Shop More
              <DollarSign /> Save More{" "}
            </Title>
            <p>Get free shipping on orders over $200.00</p>
            <Button asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      ) : isLoading ? (
        <Loading />
      ) : (
        <NotDataFound />
      )}
    </div>
  );
}
