import { MessageSquareQuote } from "lucide-react";
import TestimonialCarousel from "../Carousel/TestimonialCarousel";
import Title from "../Title";

export default function Testimonial() {
  return (
    <div>
      <Title>
        <MessageSquareQuote /> Our Happy Customers
      </Title>
      <p className="mt-3 text-zinc-500">
        Check out what our customers say about our product and service
      </p>
      <TestimonialCarousel />
    </div>
  );
}
