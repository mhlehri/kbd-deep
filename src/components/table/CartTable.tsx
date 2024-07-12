import { useAppSelector } from "../../redux/hook";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Qty from "./Qty";

export function CartTable() {
  const cart = useAppSelector((state) => state.cart.items);
  return (
    <Table className="rounded-lg overflow-hidden bg-zinc-50">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">item</TableHead>
          <TableHead>Product Name</TableHead>
          <TableHead>Product Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cart.length ? (
          cart.map((item, i) => (
            <TableRow key={item.slug}>
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
                <Qty quantity={1} />
              </TableCell>
              <TableCell className="text-right">{300}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell className="text-center" colSpan={5}>
              No Cart added Yet
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
