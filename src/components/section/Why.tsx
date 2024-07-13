import Title from "../Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function Why() {
  return (
    <div>
      <Title className="text-3xl font-bold text-gray-800 mb-4">
        Why Choose Mechanical Keyboards?
      </Title>
      <p>Here are common FAQ.</p>
      <div className="mt-10 flex gap-10 justify-center items-center lg:justify-between flex-col lg:flex-row">
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-xl"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Superior Typing Experience</AccordionTrigger>
            <AccordionContent>
              Mechanical keyboards offer a superior typing experience compared
              to membrane keyboards. Each key has its own mechanical switch,
              providing tactile feedback and a satisfying click with every
              press. This feedback can help reduce typing errors and increase
              typing speed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Durability and Longevity</AccordionTrigger>
            <AccordionContent>
              Mechanical keyboards are built to last. The individual switches
              are rated for tens of millions of keystrokes, making them far more
              durable than their membrane counterparts. This durability ensures
              that your keyboard will remain in excellent working condition for
              years, even with heavy use.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Customization Options</AccordionTrigger>
            <AccordionContent>
              One of the biggest advantages of mechanical keyboards is the level
              of customization they offer. From different switch types (linear,
              tactile, clicky) to custom keycaps and backlighting, you can
              personalize your keyboard to fit your preferences and style. This
              customization can enhance both the functionality and aesthetic of
              your keyboard.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger> Improved Gaming Performance</AccordionTrigger>
            <AccordionContent>
              For gamers, mechanical keyboards provide several benefits. The
              faster response times and more accurate keystrokes can give you an
              edge in competitive gaming. Additionally, features like N-key
              rollover and anti-ghosting ensure that every keypress is
              registered, even when multiple keys are pressed simultaneously.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div>
          <img
            src="/images/hero/_.jpeg"
            alt=""
            className="max-w-sm rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
