import { useEffect, useState } from "react";
import ProductCard from "../components/card/ProductCard";
import Loading from "../components/Loading";
import NotDataFound from "../components/NotDataFound";
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
  const [dataArr, setDataArr] = useState([]);
  const { data, isLoading, isSuccess } = useGetProductsQuery(null);
  useEffect(() => {
    if (isSuccess) {
      setDataArr(data?.data);
    }
  }, [isSuccess, data]);

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
      ) : isSuccess ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-5 my-10">
          {dataArr &&
            dataArr.map((product: TProduct, index: number) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
      ) : (
        <NotDataFound />
      )}
    </div>
  );
}
