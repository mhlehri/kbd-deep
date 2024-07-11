import { useEffect } from "react";
import ProductCard from "../components/card/ProductCard";
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
import { useGetProductsQuery } from "../redux/api";
import { TProduct } from "../type";
import { ChevronRight, FileSearchIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import NotDataFound from "../components/NotDataFound";
import Loading from "../components/Loading";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data, isLoading } = useGetProductsQuery(null);
  console.log(data);

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

      {isLoading ? (
        <Loading />
      ) : data?.data?.length ? (
        <div className="grid grid-cols-4 gap-3 my-10">
          {data?.data &&
            data?.data.map((product: TProduct, index: number) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
      ) : (
        <NotDataFound />
      )}
    </div>
  );
}
