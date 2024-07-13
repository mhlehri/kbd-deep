import { useState } from "react";
import { TProduct } from "../../type";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useUpdateProductMutation } from "../../redux/api";

export default function UpdateProductModal({ item }: { item: TProduct }) {
  const { _id, brand, description, image, name, price, quantity, rating } =
    item;
  const [open, setOpen] = useState(false);

  const [update, { isSuccess }] = useUpdateProductMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.target;
    const name = f.name.value;
    const price = f.price.value;
    const description = f.description.value;
    const rating = f.rating.value;
    const image = f.image.value;
    const quantity = f.quantity.value;
    const brand = f.brand.value;

    const formData = {
      _id,
      name,
      price,
      description,
      rating,
      image,
      quantity,
      brand,
    };
    update(formData);
    if (isSuccess) {
      setOpen(false);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-blue-600">
          Edit Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
          <DialogDescription>
            Make changes to your product here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              defaultValue={name}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="brand" className="text-right">
              Brand
            </Label>
            <Input
              id="brand"
              name="brand"
              defaultValue={brand}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input
              type="number"
              min={1}
              id="price"
              name="price"
              defaultValue={price}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity" className="text-right">
              Quantity
            </Label>
            <Input
              type="number"
              min={1}
              id="quantity"
              name="quantity"
              defaultValue={quantity}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              name="description"
              defaultValue={description}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="rating" className="text-right">
              Rating
            </Label>
            <Input
              type="number"
              min={1}
              max={5}
              id="rating"
              name="rating"
              defaultValue={rating}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image-url" className="text-right">
              Image
            </Label>
            <Input
              type="url"
              id="image-url"
              name="image"
              defaultValue={image}
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-blue-600">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
