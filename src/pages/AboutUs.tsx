import {
  Atom,
  Facebook,
  FileQuestion,
  Github,
  Linkedin,
  Milestone,
  TimerReset,
  Twitch,
  Users2,
  X,
} from "lucide-react";
import Title from "../components/Title";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const AboutUs = () => (
  <div className="my-10">
    <div>
      <Title className="mb-4">
        <Atom /> About Us
      </Title>
      <p className="text-zinc-600 mb-6">
        At KBD DEEP, we are dedicated to elevating your typing experience with
        our expertly crafted mechanical keyboards. Since our inception in 2018,
        we have strived to merge cutting-edge technology with unmatched
        customization options, creating products that not only perform
        exceptionally but also reflect your personal style.
      </p>
      <p className="text-zinc-600">
        Our team of passionate professionals is committed to quality,
        innovation, and community. Join us on our mission to redefine what a
        keyboard can be.
      </p>
    </div>
    <OurStory />
    <div className="flex justify-between gap-10 *:w-full my-12 md:flex-row flex-col">
      <MileStones />
      <WhatWeDo />
    </div>
    <OurTeam />
  </div>
);

export default AboutUs;

const OurStory = () => {
  return (
    <section className="my-12">
      <Title className="mb-4">
        <TimerReset /> Our Story
      </Title>
      <p className="text-zinc-600 mb-4">
        Welcome to KBD DEEP, where passion for mechanical keyboards meets
        innovation. Founded in 2018, KBD DEEP started with a simple idea: to
        create high-quality, customizable mechanical keyboards that cater to
        enthusiasts and professionals alike.
      </p>
      <p className="text-zinc-600 mb-4">
        Our journey began in a small workshop, with a team of dedicated keyboard
        enthusiasts who shared a love for precise engineering and exceptional
        typing experiences. Over the years, we have grown into a renowned brand
        known for our commitment to quality, innovation, and community.
      </p>
      <p className="text-zinc-600 mb-4">
        At KBD DEEP, we believe that a keyboard is more than just a tool – it’s
        a personal statement. That's why we offer a wide range of customizable
        options, from keycap sets and switch types to backlighting and layouts.
        Our products are designed to enhance your typing experience, whether
        you&apos;re a gamer, programmer, writer, or just someone who values the
        feel of a well-made keyboard.
      </p>
      <p className="text-zinc-600">
        We are proud to be a part of the vibrant mechanical keyboard community
        and are committed to continuous innovation and improvement. Thank you
        for joining us on this journey, and we look forward to providing you
        with the best mechanical keyboards on the market.
      </p>
    </section>
  );
};

const MileStones = () => {
  return (
    <section>
      <Title className="mb-4">
        <Milestone /> Milestones
      </Title>
      <ul className="list-disc list-inside text-gray-600">
        <li>
          2018: KBD DEEP founded with a mission to revolutionize mechanical
          keyboards.
        </li>
        <li>
          2019: Launched our first customizable keyboard, receiving widespread
          acclaim.
        </li>
        <li>
          2020: Expanded our product line to include unique keycap sets and
          switch options.
        </li>
        <li>
          2021: Achieved a major milestone of selling over 50,000 keyboards
          worldwide.
        </li>
        <li>
          2022: Introduced the KBD DEEP Pro series, featuring advanced ergonomic
          designs.
        </li>
        <li>2023: Opened our first flagship store in Typing Town, USA.</li>
        <li>
          2024: Recognized as a leading brand in the mechanical keyboard
          community.
        </li>
      </ul>
    </section>
  );
};

const WhatWeDo = () => (
  <section>
    <Title className="mb-4">
      <FileQuestion /> What We Do
    </Title>
    <p className="text-gray-600 mb-4">
      At KBD DEEP, we specialize in creating high-quality, customizable
      mechanical keyboards that cater to a diverse range of users, from gamers
      to programmers to everyday typists. Our mission is to provide products
      that enhance the typing experience and bring joy to our customers.
    </p>
    <p className="text-gray-600 mb-4">Our offerings include:</p>
    <ul className="list-disc list-inside text-gray-600 mb-4">
      <li>
        Customizable mechanical keyboards with various layouts and switch
        options.
      </li>
      <li>Exclusive keycap sets designed for aesthetics and durability.</li>
      <li>
        High-performance switches tailored for different typing preferences.
      </li>
      <li>Keyboard accessories, including wrist rests, cables, and cases.</li>
    </ul>
    <p className="text-gray-600">
      We are committed to innovation and quality, ensuring that every product we
      release meets the highest standards. Our team continuously works on new
      designs and features to bring you the best in mechanical keyboards.
    </p>
  </section>
);

const OurTeam = () => (
  <section className="my-12">
    <Title className="mb-10">
      <Users2 /> Our Team
    </Title>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card className="team-member text-center">
        <CardHeader>
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format"
            alt="John Doe"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-xl font-medium">John Doe</CardTitle>
          <CardDescription className="text-gray-500">
            CEO & Founder
          </CardDescription>
        </CardContent>
        <CardFooter className="flex items-center justify-center gap-4">
          <Linkedin />
          <Github />
          <Facebook />
          <Twitch />
        </CardFooter>
      </Card>
      <Card className="team-member text-center">
        <CardHeader>
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format"
            alt="Jane Smith"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-xl font-medium">John Doe</CardTitle>
          <CardDescription className="text-gray-500">
            CEO & Founder
          </CardDescription>
        </CardContent>
        <CardFooter className="flex items-center justify-center gap-4">
          <Linkedin />
          <Github />
          <Facebook />
          <Twitch />
        </CardFooter>
      </Card>
      <Card className="team-member text-center">
        <CardHeader>
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format"
            alt="Michael Brown"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-xl font-medium">John Doe</CardTitle>
          <CardDescription className="text-gray-500">
            CEO & Founder
          </CardDescription>
        </CardContent>
        <CardFooter className="flex items-center justify-center gap-4">
          <Linkedin />
          <Github />
          <Facebook />
          <Twitch />
        </CardFooter>
      </Card>
    </div>
  </section>
);
