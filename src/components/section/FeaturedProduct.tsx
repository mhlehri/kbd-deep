import ProductCard from "../ProductCard";
import { Button } from "../ui/button";

const productData = [
  {
    title: "K95 RGB Platinum",
    brand: "Corsair",
    stock: 20,
    price: 250,
    rating: 4,
    image:
      "/images/140 Keys Ink Lotus Blossom Keycaps Set, OEM Profile Japanese Ink Keycaps, Keycap for Mechanical Keyboard, Double Shot PBT Keycaps Set.jpeg",
  },
  {
    title: "K95 RGB Platinum",
    brand: "Corsair",
    stock: 20,
    price: 250,
    rating: 4,
    image: "/images/K95_RGB_Platinum.jpeg",
  },
  {
    title: "G Pro X",
    brand: "Logitech",
    stock: 15,
    price: 150,
    rating: 5,
    image: "/images/G_Pro_X.jpeg",
  },
  {
    title: "BlackWidow Elite",
    brand: "Razer",
    stock: 25,
    price: 170,
    rating: 4,
    image: "/images/BlackWidow_Elite.jpeg",
  },
  {
    title: "Apex Pro",
    brand: "SteelSeries",
    stock: 10,
    price: 200,
    rating: 5,
    image: "/images/Apex_Pro.jpeg",
  },
  {
    title: "One 2 Mini",
    brand: "Ducky",
    stock: 30,
    price: 100,
    rating: 4,
    image: "/images/One_2_Mini.jpeg",
  },
  {
    title: "CODE V3",
    brand: "Das Keyboard",
    stock: 12,
    price: 160,
    rating: 4,
    image: "/images/CODE_V3.jpeg",
  },
  {
    title: "Majestouch 2",
    brand: "Filco",
    stock: 18,
    price: 140,
    rating: 4,
    image: "/images/Majestouch_2.jpeg",
  },
  {
    title: "VA87M",
    brand: "Varmilo",
    stock: 22,
    price: 180,
    rating: 5,
    image: "/images/VA87M.jpeg",
  },
  {
    title: "FC750R",
    brand: "Leopold",
    stock: 35,
    price: 130,
    rating: 4,
    image: "/images/FC750R.jpeg",
  },
  {
    title: "K1",
    brand: "Keychron",
    stock: 40,
    price: 90,
    rating: 4,
    image: "/images/K1.jpeg",
  },
];

export default function FeaturedProduct() {
  return (
    <section>
      <h1 className="text-3xl font-medium mb-2">Featured Keyboard</h1>
      <p className="text-zinc-500">Check out our featured keyboard</p>
      <div className="flex gap-2 my-10">
        {productData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <Button>See More</Button>
    </section>
  );
}
