import { productData } from "../../dummy/products.dummy";
import ProductCard from "../ProductCard";
import { Button } from "../ui/button";

export default function FeaturedProduct() {
  return (
    <section>
      <h1 className="text-3xl font-medium mb-2 text-balance">
        Featured Keyboard
      </h1>
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
