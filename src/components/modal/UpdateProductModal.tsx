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
import { toast } from "sonner";

export default function UpdateProductModal({ item }: { item: TProduct }) {
  const { _id, brand, description, image, name, price, quantity, rating } =
    item;
  const [open, setOpen] = useState(false);

  const [update] = useUpdateProductMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.target;
    const fName = f.name.value;
    const fPrice = f.price.value;
    const fDescription = f.description.value;
    const fRating = f.rating.value;
    const fImage = f.image.value;
    const fQuantity = f.quantity.value;
    const fBrand = f.brand.value;

    if (
      fName == name &&
      fPrice == price &&
      fDescription == description &&
      fRating == rating &&
      fImage == image &&
      fQuantity == quantity &&
      fBrand == brand
    ) {
      toast.error("You didn't change anything.");
    } else {
      const formData: Partial<TProduct> = {
        _id,
      };
      if (name != fName) formData.name = fName;
      if (name != fBrand) formData.brand = fBrand;
      if (name != fDescription) formData.description = fDescription;
      if (name != fPrice) formData.price = fPrice;
      if (name != fRating) formData.rating = fRating;
      if (name != fImage) formData.image = fImage;
      if (name != fQuantity) formData.quantity = fQuantity;

      const res = await update(formData);
      if (res.data.success) {
        setOpen(false);
        toast.success(`${res.data.message}`);
      } else {
        setOpen(false);
        toast.error(`${res.data.message}`);
      }
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
            <Label htmlFor="name" className="sm:text-right">
              Name
            </Label>
            <Input
              required
              id="name"
              name="name"
              defaultValue={name}
              className="col-span-4 sm:col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="brand" className="sm:text-right">
              Brand
            </Label>
            <Input
              required
              id="brand"
              name="brand"
              defaultValue={brand}
              className="col-span-4 sm:col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="sm:text-right">
              Price
            </Label>
            <Input
              required
              type="number"
              min={1}
              id="price"
              name="price"
              defaultValue={price}
              className="col-span-4 sm:col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity" className="sm:text-right">
              Quantity
            </Label>
            <Input
              required
              type="number"
              min={1}
              id="quantity"
              name="quantity"
              defaultValue={quantity}
              className="col-span-4 sm:col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="sm:text-right">
              Description
            </Label>
            <Textarea
              id="description"
              name="description"
              defaultValue={description}
              className="col-span-4 sm:col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="rating" className="sm:text-right">
              Rating
            </Label>
            <Input
              required
              type="number"
              min={1}
              max={5}
              id="rating"
              name="rating"
              defaultValue={rating}
              className="col-span-4 sm:col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image-url" className="sm:text-right">
              Image
            </Label>
            <Input
              required
              type="url"
              id="image-url"
              name="image"
              defaultValue={image}
              className="col-span-4 sm:col-span-3"
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
