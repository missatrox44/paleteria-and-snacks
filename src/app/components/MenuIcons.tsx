"use client";

import Image from "next/image";
import Link from "next/link";
import useStore from "../store";
import { menuText } from "../translations/navbar";

const MenuIcons = () => {
  const { language } = useStore() as { language: 'en' | 'es' };
 
  return (
    <section className="wrapper grid grid-cols-2 md:grid-cols-4 gap-y-14 md:gap-8 pt-[90px] md:pt-[150px] pb-[55px]">
      <Link href="#ice-cream" className="menu-icon ice-cream">
        <div className="flex flex-col items-center gap-y-6">
          <Image src="/icons/ice-cream.svg" alt="Ice Cream Icon" width={85} height={85} />
          <p className="font-acme text-xl md:text-2xl">{menuText[language][0]}</p>
        </div>
      </Link>
      <Link href="#popsicles" className="menu-icon popsicles">
        <div className="flex flex-col items-center gap-y-6">
          <Image src="/icons/popsicle.svg" alt="Popsicle Icon" width={85} height={85} />
          <p className="font-acme text-xl md:text-2xl">{menuText[language][1]}</p>
        </div>
      </Link>
      <Link href="#snacks" className="menu-icon snacks">
        <div className="flex flex-col items-center gap-y-6">
          <Image src="/icons/snack.svg" alt="Snack Icon" width={85} height={85} />
          <p className="font-acme text-xl md:text-2xl">{menuText[language][2]}</p>
        </div>
      </Link>
      <Link href="#drinks" className="menu-icon drinks">
        <div className="flex flex-col items-center gap-y-6">
          <Image src="/icons/drinks.svg" alt="Drinks Icon" width={85} height={85} />
          <p className="font-acme text-xl md:text-2xl">{menuText[language][3]}</p>
        </div>
      </Link>
    </section>
  );
};

export default MenuIcons;
