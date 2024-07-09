import { NavLink } from "react-router-dom";
import Container from "../container";

export default function Navbar() {
  return (
    <nav className="backdrop-blur-lg bg-emerald-600 text-white">
      <Container>
        <div className="flex gap-10 py-5 items-center">
          <h1 className="text-xl font-semibold">KBD Deep</h1>
          <ul className="flex gap-3">
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
    </nav>
  );
}
