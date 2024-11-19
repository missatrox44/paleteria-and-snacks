"use client";

import Image from "next/image";
import Link from "next/link";
import Toggle from "./Toggle";
import useScrolled from "../hooks/useScrolled";
import useStore from "../store";

const DesktopNavBar = () => {
  const scrolled = useScrolled();
  const { language } = useStore() as { language: 'en' | 'es' };

  const menuText = {
    "en": [
      "Ice Cream",
      "Popsicles",
      "Snacks",
      "Drinks",
      "Hours & Location",
    ],
    "es": [
      "Helado",
      "Paletas",
      "Bocadillos",
      "Bebidas",
      "Horario y Ubicación",
    ],
  };

  return (
    <nav
      className={`hidden sm:block fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/30 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex wrapper justify-between py-7 items-center">
        <div className="flex gap-x-6 items-center">
          <Image src="/logo.png" alt="KD's Paleteria Logo" width={72} height={72} />
          <ul className="flex gap-x-6 text-xl">
            <li><Link className="hover-link" href="#ice-cream">{menuText[language][0]}</Link></li>
            <li><Link className="hover-link" href="#popsicles">{menuText[language][1]}</Link></li>
            <li><Link className="hover-link" href="#snacks">{menuText[language][2]}</Link></li>
            <li><Link className="hover-link" href="#drinks">{menuText[language][3]}</Link></li>
            <li><Link className="hover-link" href="#hours-location">{menuText[language][4]}</Link></li>
          </ul>
        </div>
        <Toggle />
      </div>
    </nav>
  );
};

export default DesktopNavBar;
