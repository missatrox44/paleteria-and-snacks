"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Toggle from "./Toggle";
import useScrolled from "../hooks/useScrolled";

const MobileNavBar = () => {
  const scrolled = useScrolled();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`sm:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/30 backdrop-blur-md" : ""
        }`}
    >
      <div className="flex justify-between p-3 items-center">
        <button
          className="p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {/* {isMenuOpen ? (
            <Image src="/icons/cross.svg" alt="Close Menu" width={24} height={24} />
          ) : ( */}
          <Image src="/icons/menu.svg" alt="Open Menu" width={24} height={24} />
          {/* )} */}
        </button>

        {/* Drawer Menu */}
        <div
          className={`fixed top-0 left-0 h-screen w-1/2 bg-gradient-to-t from-purple-500 to-orange-500 shadow-lg transform transition-transform duration-300 z-[999] ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full">
            {/* Header with Logo and Close Button */}
            <div className="flex justify-between pt-3 px-3 pb-6">
              <div>
                <Image src="/logo.png" alt="Logo" width={35} height={35} />
              </div>
              <button
                className="p-2 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <Image src="/icons/cross.svg" alt="Close Menu" width={20} height={20} />
              </button>
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col gap-y-4 text-lg font-medium pl-4">
              <li onClick={toggleMenu}>
                <Link href="#ice-cream">Ice Cream</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="#popsicles">Popsicles</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="#snacks">Snacks</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="#drinks">Drinks</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="#hours-location">Hours & Location</Link>
              </li>
            </ul>

            {/* Toggle Component */}
            <div className="mt-auto p-6">
              <Toggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavBar;
