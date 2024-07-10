import { productData } from "../../dummy/products.dummy";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Qty from "./Qty";

const items = [
  {
    item: "INV001",
    title: "Paid",
    totalAmount: "$250.00",
    price: "$250.00",
    quantity: 2,
  },
  {
    item: "INV002",
    title: "Pending",
    totalAmount: "$150.00",
    price: "$150.00",
    quantity: 1,
  },
  {
    item: "INV003",
    title: "Unpaid",
    totalAmount: "$350.00",
    price: "$350.00",
    quantity: 1,
  },
];

export function CartTable() {
  return (
    <Table className="rounded-lg overflow-hidden bg-zinc-50">
      <TableCaption>A list of your recent items.</TableCaption>
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
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
