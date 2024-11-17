import Image from "next/image";
import Link from "next/link";
const MenuIcons = () => {
 
  return (
    <section className="wrapper grid grid-cols-2 md:grid-cols-4 gap-8 pt-[90px] md:pt-[150px] pb-[55px]">
      <Link href="#ice-cream" className="menu-icon">
        <div className="flex flex-col items-center gap-y-6">
          <Image src="/icons/ice-cream.svg" alt="Ice Cream Icon" width={64} height={64} />
          <p className="font-acme text-base md:text-2xl">Ice Cream</p>
        </div>
      </Link>
      <Link href="#popsicles" className="menu-icon">
        <div className="flex flex-col items-center gap-y-6">
          <Image src="/icons/popsicle.svg" alt="Popsicle Icon" width={64} height={64} />
          <p className="font-acme text-base md:text-2xl">Popsicles</p>
        </div>
      </Link>
      <Link href="#snacks" className="menu-icon">
        <div className="flex flex-col items-center gap-y-6">
          <Image src="/icons/snack.svg" alt="Snack Icon" width={64} height={64} />
          <p className="font-acme text-base md:text-2xl">Snacks</p>
        </div>
      </Link>
      <Link href="#drinks" className="menu-icon">
        <div className="flex flex-col items-center gap-y-6">
          <Image src="/icons/drinks.svg" alt="Drinks Icon" width={64} height={64} />
          <p className="font-acme text-base md:text-2xl">Drinks</p>
        </div>
      </Link>
    </section>
  );
};

export default MenuIcons;
