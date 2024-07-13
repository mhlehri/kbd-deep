import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
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
import { toast } from "../ui/use-toast";
import { useRemoveProductMutation } from "../../redux/api";

export default function DeleteProductModal({ id }: { id: string }) {
  const [removeProduct] = useRemoveProductMutation();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-red-500">
          <Trash2 />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete this
            product and remove data from servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              onClick={async () => {
                const res = await removeProduct(id);
                toast({
                  title: `${res.data.message}` || "something went wrong",
                  variant: `${res.data.success ? "success" : "destructive"}`,
                  duration: 1000,
                });
              }}
              variant="destructive"
            >
              Sure
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
