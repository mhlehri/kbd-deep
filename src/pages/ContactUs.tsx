import { Contact } from "lucide-react";
import ContactCard from "../components/card/ContactCard";
import ContactForm from "../components/form/ContactForm";
import Title from "../components/Title";
import { contactCards } from "../const/contactCards.const";
import { useEffect } from "react";

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="space-y-10 mt-10">
      <Title>
        <Contact /> Contact Us
      </Title>
      <ContactCards />
      <ContactForm />
    </div>
  );
}

const ContactCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {contactCards.map((card, index) => (
        <ContactCard key={index} {...card} />
      ))}
    </div>
  );
};
