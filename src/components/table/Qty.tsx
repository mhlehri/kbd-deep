import { useState } from "react";
import { changeQty } from "../../redux/features/CartSlice";
import { useAppDispatch } from "../../redux/hook";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Qty({
  slug,
  quantity,
  stock,
}: {
  slug: string;
  quantity: number;
  stock: number;
}) {
  const [qty, setQty] = useState(quantity);
  const dispatch = useAppDispatch();
  return (
    <div className="flex">
      <Button
        onClick={() => {
          setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : prevQty));
          dispatch(changeQty({ slug, quantity: qty - 1 }));
        }}
        disabled={qty === 1 || qty > stock}
        variant="outline"
      >
        -
      </Button>
      <Input
        type="number"
        onChange={(e) => {
          const v =
            e.target.value == ""
              ? 0
              : parseInt(e.target.value) <= stock
              ? parseInt(e.target.value)
              : qty;
          setQty(v);
          dispatch(
            changeQty({
              slug,
              quantity: v,
            })
          );
        }}
        onBlur={() => setQty(qty ? qty : 1)}
        value={qty}
        min={1}
        max={stock}
        className="w-20 outline-none invalid:border-red-700 invalid:bg-red-100 focus-visible:ring-offset-0 focus-visible:ring-0 text-center"
      />
      <Button
        disabled={qty >= stock}
        onClick={() => {
          setQty((prevQty) => (prevQty < stock ? prevQty + 1 : prevQty));
          dispatch(changeQty({ slug, quantity: qty + 1 }));
        }}
        variant="outline"
      >
        +
      </Button>
    </div>
  );
}
