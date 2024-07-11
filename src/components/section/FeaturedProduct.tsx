import { Component } from "lucide-react";
import ProductCard from "../card/ProductCard";
import Title from "../Title";

import { TProduct } from "../../type";
import { Button } from "../ui/button";
import { useGetProductsQuery } from "../../redux/api";

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
          <div className="flex gap-3">
            {data.data &&
              data.data.map((product: TProduct, index: number) => (
                <ProductCard key={index} product={product} />
              ))}
          </div>
        )}
      </div>
      <Button>See More</Button>
    </section>
  );
}
