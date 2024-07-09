import { Keyboard } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Container from "./container";

export default function Navbar() {
  return (
    <div className="backdrop-blur-lg bg-emerald-600 text-white">
      <Container>
        <div className="flex justify-between py-5 items-center">
          <Link to="/">
            <h1 className="text-xl font-semibold flex gap-2 items-center">
              <Keyboard className="size-7" /> KBD Deep
            </h1>
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
        </div>
      </Container>
    </div>
  );
}
