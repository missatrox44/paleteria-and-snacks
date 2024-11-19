"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Toggle from "./Toggle";
import useScrolled from "../hooks/useScrolled";
import useStore from "../store";
import { menuText } from "../translations/navbar";

const MobileNavBar = () => {
  const scrolled = useScrolled();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useStore() as { language: 'en' | 'es' };


  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`sm:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/30 backdrop-blur-md" : ""
        }`}
    >
      <div className="flex justify-between p-3 items-center">
        <div className="border-2 border-[#FF00F5] rounded-xl">
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
        </div>
        <Toggle/>
        {/* Drawer Menu */}
        <div
          className={`fixed top-0 left-0 h-screen w-full bg-black shadow-lg transform transition-transform duration-300 z-[999] ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full">
            {/* Header with Logo and Close Button */}
            <div className="flex justify-between pt-3 px-3 pb-6">
              <div>
                <Image src="/logo.png" alt="Logo" width={40} height={40} />
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
                <Link href="#ice-cream">{menuText[language][0]}</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="#popsicles">{menuText[language][1]}</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="#snacks">{menuText[language][2]}</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="#drinks">{menuText[language][3]}</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="#hours-location">{menuText[language][4]}</Link>
              </li>
            </ul>

            {/* Toggle Component */}
            {/* <div className="mt-[200px] p-6">
              <Toggle />
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavBar;
