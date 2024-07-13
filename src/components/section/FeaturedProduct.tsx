import { ChevronRight, Component, FileSearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api";
import { TProduct } from "../../type";
import ProductCard from "../card/ProductCard";
import Loading from "../Loading";
import Title from "../Title";
import { Button } from "../ui/button";

export default function FeaturedProduct() {
  const { data, isLoading } = useGetProductsQuery(null);

  return (
    <section>
      <Title className="mb-2">
        <Component /> Featured Keyboard
      </Title>
      <p>Check out our featured keyboard</p>

      <div className="my-10">
        {isLoading ? (
          <Loading />
        ) : data?.data?.length ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-5 my-10">
            {data?.data &&
              data?.data
                .slice(0, 6)
                .map((product: TProduct, index: number) => (
                  <ProductCard key={index} product={product} />
                ))}
          </div>
        ) : (
          <div className="space-y-3 flex flex-col items-center">
            <FileSearchIcon size={40} />
            <h4 className="text-3xl">Data not found</h4>
          </div>
        )}
      </div>
      {data?.data?.length ? (
        <Button className="mx-auto flex w-fit" asChild>
          <Link to="/products">
            See More Products <ChevronRight />
          </Link>
        </Button>
      ) : null}
    </section>
  );
}
