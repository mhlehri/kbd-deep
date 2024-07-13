import { Keyboard, Menu, ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import Container from "./container";
import { useAppSelector } from "../../redux/hook";

export function Logo() {
  return (
    <h1 className="text-xl text-black font-semibold flex gap-2 items-center">
      <Keyboard /> KBD DEEP
    </h1>
  );
}

const navLinks = [
  { title: "Home", to: "/" },
  { title: "Products", to: "/products" },
  { title: "About Us", to: "/about-us" },
  { title: "Contact Us", to: "/contact-us" },
  { title: "Dashboard", to: "/dashboard" },
];

const NavMenu = ({ className }: { className?: string }) => {
  return (
    <ul className={`${className} flex`}>
      {navLinks.map((link, index) => (
        <li key={index}>
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "text-zinc-600" + " hover:text-black hover:underline"
            }
          >
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default function Navbar() {
  const cart = useAppSelector((state) => state.cart.items);
  return (
    <nav className="backdrop-blur-lg text-zinc-600 sticky top-0 z-50 bg-white/70">
      <Container>
        <div className="flex justify-between py-5 items-center flex-row-reverse sm:flex-row">
          {/* responsive */}
          <div className="md:hidden text-zinc-600">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="p-2 rounded-lg">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <Logo />
                </SheetHeader>

                <NavMenu className="gap-3 flex-col mt-4" />

                <div className="flex gap-5 mt-4 sm:hidden">
                  <button className="relative">
                    <span className="absolute -right-1 -top-2 bg-zinc-100 rounded-full p-1 text-xs leading-none">
                      {cart.length}
                    </span>
                    <ShoppingCart />
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex gap-10 items-center">
            <Link to="/">
              <Logo />
            </Link>

            <NavMenu className="md:flex gap-5 hidden" />
          </div>
          <div className="sm:flex gap-5 hidden">
            <Link to="/cart" className="relative">
              <span className="absolute -right-1 -top-2 bg-sky-100 text-sky-600 rounded-full p-1 text-xs leading-none">
                {cart.length}
              </span>
              <ShoppingCart />
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}
