import { useGetProductsQuery } from "../../redux/api";
import { TProduct } from "../../type";
import DeleteProductModal from "../modal/DeleteProductModal";
import UpdateProductModal from "../modal/UpdateProductModal";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export default function ProductTable() {
  const { data, isLoading } = useGetProductsQuery(null);
  return (
    <div className="mb-10">
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
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                Loading...
              </TableCell>
            </TableRow>
          ) : data?.data.length ? (
            data?.data.map((item: TProduct, i: number) => (
              <TableRow key={item.name}>
                <TableCell className="font-medium">{i + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.brand}</TableCell>
                <TableCell className="flex gap-3 justify-end items-center">
                  <UpdateProductModal item={item} />
                  <DeleteProductModal id={item._id} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
