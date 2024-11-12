"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Toggle from "./Toggle";

const DesktopNavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            <li><Link className="hover-link" href="#ice-cream">Ice Cream</Link></li>
            <li><Link className="hover-link" href="#popsicles">Popsicles</Link></li>
            <li><Link className="hover-link" href="#snacks">Snacks</Link></li>
            <li><Link className="hover-link" href="#drinks">Drinks</Link></li>
            <li><Link className="hover-link" href="#hours-location">Hours & Location</Link></li>
          </ul>
        </div>
        <Toggle />
      </div>
    </nav>
  );
};

export default DesktopNavBar;
