import { useEffect } from "react";
import FeaturedBrand from "../components/section/FeaturedBrand";
import FeaturedProduct from "../components/section/FeaturedProduct";
import Hero from "../components/section/Hero";
import Service from "../components/section/Service";
import Testimonial from "../components/section/Testimonial";
import Why from "../components/section/Why";
import Customizable from "../components/section/Customizable";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="space-y-10 md:space-y-20 lg:space-y-28 mb-20">
      <Hero />
      <Service />
      <FeaturedProduct />
      <FeaturedBrand />
      <Testimonial />
      <Why />
      <Customizable />
    </div>
  );
}
