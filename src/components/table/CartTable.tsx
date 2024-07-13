import { Trash2 } from "lucide-react";
import { removeItem } from "../../redux/features/CartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Qty from "./Qty";
import { toast } from "sonner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState } from "react";

export function CartTable() {
  const cart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  return (
    <Table className="rounded-lg overflow-hidden bg-zinc-50">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">item</TableHead>
          <TableHead>Product Name</TableHead>
          <TableHead>Product Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>

      {cart.length ? (
        <>
          <TableBody>
            {cart.map((item, i) => {
              return (
                <TableRow key={item.slug}>
                  <TableCell className="font-medium">{i + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>
                    <Qty
                      slug={item.slug!}
                      quantity={item.quantity}
                      stock={item.stock}
                    />
                  </TableCell>
                  <TableCell>{item.price * item.quantity}</TableCell>
                  <TableCell className="flex justify-end">
                    <Button
                      onClick={() => {
                        dispatch(removeItem(item.slug));
                        toast.success("Item Remove successfully!");
                      }}
                      variant="outline"
                      className="text-red-500"
                    >
                      <Trash2 />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell className="text-right" colSpan={6}>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button variant="destructive" className="">
                      Reset cart
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Are you sure to reset cart?</DialogTitle>
                    <DialogDescription>
                      you can't undone this after reset.
                    </DialogDescription>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button>Cancel</Button>
                      </DialogClose>
                      <Button variant="destructive" onClick={() => {}}>
                        Sure
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          </TableFooter>
        </>
      ) : (
        <TableBody>
          <TableRow>
            <TableCell className="text-center" colSpan={6}>
              No Cart added Yet
            </TableCell>
          </TableRow>
        </TableBody>
      )}
    </Table>
  );
}
