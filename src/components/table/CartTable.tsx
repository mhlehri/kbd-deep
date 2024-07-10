import { productData } from "../../dummy/products.dummy";
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
        {productData.map((item, i) => (
          <TableRow key={item.title}>
            <TableCell className="font-medium">{i + 1}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>
              <Qty quantity={1} />
            </TableCell>
            <TableCell className="text-right">{300}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
