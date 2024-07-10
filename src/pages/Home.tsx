import FeaturedBrand from "../components/section/FeaturedBrand";
import FeaturedProduct from "../components/section/FeaturedProduct";
import { Hero } from "../components/section/Hero";
import Service from "../components/section/Service";
import Testimonial from "../components/section/Testimonial";

export default function Home() {
  return (
    <div className="space-y-28 mb-20 overflow-hidden">
      <Hero />
      <Service />
      <FeaturedProduct />
      <FeaturedBrand />
      <Testimonial />
      <div>two extra section</div>
    </div>
  );
}
