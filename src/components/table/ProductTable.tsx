import { Edit, Trash2 } from "lucide-react";
import { productData } from "../../dummy/products.dummy";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";

export default function ProductTable() {
  return (
    <div>
      <Table className="rounded-lg overflow-hidden bg-zinc-50">
        <TableCaption>
          A lists of all products available in the store
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">item</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Product Price</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productData.map((item, i) => (
            <TableRow key={item.title}>
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.brand}</TableCell>
              <TableCell className="flex gap-3 justify-end items-center">
                <Button variant="outline" className="text-blue-500">
                  <Edit />
                </Button>
                <Button variant="outline" className="text-red-500">
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
