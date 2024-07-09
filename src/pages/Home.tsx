import FeaturedBrand from "../components/section/FeaturedBrand";
import FeaturedProduct from "../components/section/FeaturedProduct";
import { Hero } from "../components/section/Hero";
import Service from "../components/section/Service";

export default function Home() {
  return (
    <div className="space-y-24 mb-20">
      <Hero />
      <Service />
      <FeaturedProduct />
      <FeaturedBrand />
    </div>
  );
}
