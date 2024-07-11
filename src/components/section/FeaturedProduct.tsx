import { Component } from "lucide-react";
import { productData } from "../../dummy/products.dummy";
import ProductCard from "../card/ProductCard";
import Title from "../Title";

import { Button } from "../ui/button";

export default function FeaturedProduct() {
  return (
    <section>
      <Title className="mb-2">
        <Component /> Featured Keyboard
      </Title>
      <p className="text-zinc-500 text-balance">
        Check out our featured keyboard
      </p>
      <div className="flex gap-3 my-10">
        {productData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <Button>See More</Button>
    </section>
  );
}
