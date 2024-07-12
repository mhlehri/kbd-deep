import { Edit, Trash2 } from "lucide-react";
import { useGetProductsQuery } from "../../redux/api";
import { TProduct } from "../../type";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function ProductTable() {
  const { data, isLoading } = useGetProductsQuery(null);
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
                  <Button variant="outline" className="text-blue-500">
                    <Edit />
                  </Button>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        onClick={() => {}}
                        variant="outline"
                        className="text-red-500"
                      >
                        <Trash2 />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently
                          delete this product and remove data from servers.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <DialogClose asChild>
                          <Button variant="destructive">Sure</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
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
