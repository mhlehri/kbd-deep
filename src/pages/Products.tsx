import ProductCard from "../components/ProductCard";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { productData } from "../dummy/products.dummy";

export function SortBy() {
  return (
    <Select>
      <SelectTrigger className="max-w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Price sort</SelectLabel>
          <SelectItem value="low-to-high">Low to High</SelectItem>
          <SelectItem value="high-to-low">High to Low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default function Products() {
  return (
    <div>
      <div className="my-10 flex justify-between">
        <Input
          type="search"
          className="w-fit"
          placeholder="search by name or brand"
        />
        <SortBy />
      </div>

      <div className="grid grid-cols-4 gap-3 my-10">
        {productData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
