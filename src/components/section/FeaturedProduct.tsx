import { ChevronRight, Component } from "lucide-react";
import ProductCard from "../card/ProductCard";
import Title from "../Title";
import { useGetProductsQuery } from "../../redux/api";
import { TProduct } from "../../type";
import { Button } from "../ui/button";

export default function FeaturedProduct() {
  const { data, isLoading } = useGetProductsQuery();

  return (
    <section>
      <Title className="mb-2">
        <Component /> Featured Keyboard
      </Title>
      <p>Check out our featured keyboard</p>

      <div className="flex gap-3 my-10">
        {isLoading ? (
          "loading..."
        ) : (
          <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 my-10">
            {data.data &&
              data.data
                .slice(0, 6)
                .map((product: TProduct, index: number) => (
                  <ProductCard key={index} product={product} />
                ))}
          </div>
        )}
      </div>
      <Button className="mx-auto flex">
        See More Products <ChevronRight />
      </Button>
    </section>
  );
}
