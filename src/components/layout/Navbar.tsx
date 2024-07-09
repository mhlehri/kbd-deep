import { Keyboard, Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import Container from "./container";
import { Button } from "../ui/button";

export function Logo() {
  return (
    <h1 className="text-xl font-semibold flex gap-2 items-center">
      <Keyboard /> KBD Deep
    </h1>
  );
}

export default function Navbar() {
  return (
    <div className="backdrop-blur-lg bg-emerald-50 text-emerald-600">
      <Container>
        <div className="flex justify-between py-5 items-center">
          <Link to="/">
            <Logo />
          </Link>
          <ul className="md:flex gap-3 hidden">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="bg-white text-emerald-600 p-2 rounded-lg">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader className="text-emerald-600">
                  <Logo />
                </SheetHeader>
                <ul className="flex gap-3 flex-col mt-4 text-emerald-600 hover:*:underline hover:*:tracking-wider *:duration-300">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products">Products</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about-us">About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact-us">Contact Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </div>
  );
}
