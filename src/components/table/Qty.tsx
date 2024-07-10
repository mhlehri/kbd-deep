import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Qty({ quantity }: { quantity: number }) {
  const [qty, setQty] = useState(quantity);
  return (
    <div className="flex">
      <Button
        onClick={() =>
          setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : prevQty))
        }
        disabled={qty === 1}
        variant="outline"
      >
        -
      </Button>
      <Input
        type="number"
        onChange={(e) => setQty(e.target.value ? parseInt(e.target.value) : 1)}
        defaultValue={qty}
        value={qty}
        max={10}
        className="w-20 outline-none invalid:border-red-700 invalid:bg-red-100 focus-visible:ring-offset-0 focus-visible:ring-0 text-center"
      />
      <Button
        disabled={qty === 10}
        onClick={() =>
          setQty((prevQty) => (prevQty < 10 ? prevQty + 1 : prevQty))
        }
        variant="outline"
      >
        +
      </Button>
    </div>
  );
}
