import ContactCard from "../components/card/ContactCard";
import Title from "../components/Title";
import { contactCards } from "../const/contactCards.const";

export default function ContactUs() {
  return (
    <div className="space-y-10 mt-10">
      <Title>Contact Us</Title>
      <ContactCards />
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
