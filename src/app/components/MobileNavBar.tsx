"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Toggle from "./Toggle";

const MobileNavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={` sm:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/30 backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <div className="flex  justify-between p-3 items-center">
        <button
          className="p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <Image src="/icons/cross.svg" alt="Close Menu" width={24} height={24} />
          ) : (
            <Image src="/icons/menu.svg" alt="Open Menu" width={24} height={24} />
          )}
        </button>

        {/* Drawer Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 bg-gradient-to-t from-purple-500 to-orange-500 shadow-lg transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-center py-6">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col items-center gap-y-4 text-lg font-medium">
              <li>
                <Link className="" href="#ice-cream">
                  Ice Cream
                </Link>
              </li>
              <li>
                <Link className="" href="#popsicles">
                  Popsicles
                </Link>
              </li>
              <li>
                <Link className="" href="#snacks">
                  Snacks
                </Link>
              </li>
              <li>
                <Link className="" href="#drinks">
                  Drinks
                </Link>
              </li>
              <li>
                <Link className="" href="#hours-location">
                  Hours & Location
                </Link>
              </li>
            </ul>

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
