import React from "react";
import { Logo } from "./Navbar";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-100 px-4 py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/">
              <Logo />
            </Link>
            <div>
              <h2 className="text-xl font-semibold">Company</h2>
              <ul className="mt-2 *:text-zinc-600 hover:*:underline *:cursor-pointer *:w-fit">
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>Our Services</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Support</h2>
              <ul className="mt-2 *:text-zinc-600 hover:*:underline *:cursor-pointer *:w-fit">
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li>FAQ</li>
                <li>Shipping</li>
                <li>Return</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Follow Us</h2>
              <ul className="mt-2 *:text-zinc-600 hover:*:underline *:cursor-pointer *:w-fit">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 p-4">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <p>&copy; 2024 KBD DEEP. All rights reserved.</p>
            <p>
              Designed by{" "}
              <a href="https://github.com/mhlehri" className="underline">
                @mhlehri
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
