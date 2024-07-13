import {
  ChevronRight,
  DollarSign,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";
import Loading from "../components/Loading";
import NotDataFound from "../components/NotDataFound";
import Rating from "../components/Rating";
import Qty from "../components/table/Qty";
import Title from "../components/Title";
import { Button } from "../components/ui/button";
import { useGetProductBySlugQuery } from "../redux/api";
import { addItem } from "../redux/features/CartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { TProduct } from "../type";

export default function ProductDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { productSlug } = useParams();

  const { data, isLoading, isSuccess } = useGetProductBySlugQuery(productSlug);

  const p = !isLoading && data?.success ? (data.data as TProduct) : null;
  const { slug, image, description, rating, brand, name, price, quantity } = p
    ? p
    : {
        slug: "N/A",
        image: "N/A",
        description: "N/A",
        rating: 0,
        brand: "N/A",
        name: "N/A",
        price: 0,
        quantity: 0,
      };

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.items);
  const AlreadyAdded = cart.find((i) => i.slug === slug);
  console.log(AlreadyAdded);

  const AddToCartHandler = () => {
    toast.success("successfully added to cart.");
    dispatch(
      addItem({
        name,
        slug,
        price,
        stock: quantity,
        quantity: 1,
      })
    );
  };

  return (
    <div>
      {!isLoading && isSuccess && data?.data ? (
        <div>
          <div className="flex mt-10 text-zinc-600">
            products <ChevronRight />{" "}
            <span className="text-zinc-950">{slug}</span>
          </div>
          <div className="flex mt-10 md:flex-row flex-col justify-center lg:p-5 lg:border border-b pb-4 lg:rounded-lg gap-10">
            <div className="w-full flex-1">
              <img
                src={image}
                alt={slug}
                className="rounded-lg max-w-md md:max-w-full w-full object-cover md:h-96 max-h-96"
              />
            </div>
            <div className="space-y-5 flex-1">
              <h1 className="text-3xl font-medium">{name}</h1>
              <h3 className="text-2xl font-medium">${price}</h3>
              <hr />
              <p>{description}</p>
              <Rating rating={rating} />
              <h6>Brand: {brand}</h6>
              <h6 className="bg-zinc-100 text-sm inline-block p-1 rounded-lg">
                Availablity: {quantity} in stock
              </h6>
              <Qty
                slug={slug}
                quantity={AlreadyAdded?.quantity || 1}
                stock={quantity}
              />
              <Button
                onClick={AddToCartHandler}
                disabled={
                  AlreadyAdded && AlreadyAdded?.quantity >= AlreadyAdded.stock
                }
                className="flex gap-2"
              >
                <ShoppingCart />{" "}
                {AlreadyAdded && AlreadyAdded?.quantity >= AlreadyAdded?.stock
                  ? "reached limit"
                  : AlreadyAdded
                  ? "Already Added"
                  : "Add to Cart"}
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
