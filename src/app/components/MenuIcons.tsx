import Image from "next/image";
import Link from "next/link";
const MenuIcons = () => {
 
  return (
    <section className="wrapper grid grid-cols-2 md:grid-cols-4 gap-8 pt-[150px]">
    <div className="flex flex-col">
      {/* <Image src="/icons/ice-cream.svg" alt="Ice Cream Icon" width={64} height={64} /> */}
      <p className="font-acme text-2xl">Ice Cream</p>
    </div>
    <div className="flex flex-col">
      {/* <Image src="/icons/ice-cream.svg" alt="Ice Cream Icon" width={64} height={64} /> */}
      <p className="font-acme text-2xl">Popsicles</p>
    </div>
    <div className="flex flex-col">
      {/* <Image src="/icons/ice-cream.svg" alt="Ice Cream Icon" width={64} height={64} /> */}
      <p className="font-acme text-2xl">Snacks</p>
    </div>
    <div className="flex flex-col">
      {/* <Image src="/icons/ice-cream.svg" alt="Ice Cream Icon" width={64} height={64} /> */}
      <p className="font-acme text-2xl">Drinks</p>
    </div>
    </section>
  );
};

export default MenuIcons;
