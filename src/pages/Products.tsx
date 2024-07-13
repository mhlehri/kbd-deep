import { Search } from "lucide-react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect, useState } from "react";
import ProductCard from "../components/card/ProductCard";
import Loading from "../components/Loading";
import NotDataFound from "../components/NotDataFound";
import Title from "../components/Title";
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
import useDebounce from "../hooks/useDebounce";
import { useGetProductsQuery } from "../redux/api";
import { TProduct } from "../type";
import { Button } from "../components/ui/button";
export function SortBy({
  sort,
  setSort,
}: {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Select
      value={sort}
      onValueChange={(value) => {
        setSort(value);
      }}
    >
      <SelectTrigger className="max-w-[180px] w-full">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Price sort</SelectLabel>
          <SelectItem value="asc">Low to High</SelectItem>
          <SelectItem value="desc">High to Low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default function Products() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [sliderValues, setSliderValues] = useState([1, 3000]);
  const debounceValue = useDebounce(search);
  const { data, isFetching, isLoading, isSuccess } = useGetProductsQuery({
    search: debounceValue,
    sort,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [debounceValue]);

  return (
    <div>
      <Title className="mt-10 hidden 2xl:block">All products</Title>
      <div className="flex flex-col 2xl:flex-row gap-10 my-10">
        <div className="h-fit flex gap-5 flex-col px-3 2xl:px-0 sm:flex-row 2xl:flex-col 2xl:sticky top-20 justify-between 2xl:justify-normal 2xl:max-w-xs">
          <div className="max-w-sm w-full space-y-5">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                value={search}
                type="search"
                className="pl-10"
                placeholder="search by name, brand"
              />
              <Search className="text-xs text-zinc-500 absolute" />
            </div>
            <div className="max-w-72">
              <h6 className="mb-2">Filter by price range</h6>
              <Slider
                range
                min={1}
                max={3000}
                defaultValue={sliderValues}
                onChange={(values) => {
                  setSliderValues(values as number[]);
                }}
              />
              <p className="text-sm">
                Selected range: {sliderValues[0]} to {sliderValues[1]}
              </p>
            </div>
          </div>
          <div className="flex w-full gap-5 2xl:flex-col justify-end">
            <SortBy sort={sort} setSort={setSort} />
            <Button
              onClick={() => {
                setSliderValues([1, 3000]);
                setSearch("");
                setSort("");
              }}
              className="w-fit"
              variant="destructive"
            >
              Reset Filter
            </Button>
          </div>
        </div>

        {isLoading ? (
          <Loading />
        ) : debounceValue && isFetching ? (
          <Loading />
        ) : isSuccess && data?.data.length ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 justify-center gap-5">
            {data?.data?.map((product: TProduct, index: number) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        ) : (
          <NotDataFound />
        )}
      </div>
    </div>
  );
}
