import { MessageSquareQuote } from "lucide-react";
import TestimonialCarousel from "../Carousel/TestimonialCarousel";
import Title from "../Title";

export default function Testimonial() {
  return (
    <section>
      <Title>
        <MessageSquareQuote /> Our Happy Customers
      </Title>
      <p>Check out what our customers say about our product and service</p>
      <TestimonialCarousel />
    </section>
  );
}
