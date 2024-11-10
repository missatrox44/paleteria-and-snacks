import Image from "next/image";
import Link from "next/link";
import Toggle from "./Toggle";
const DesktopNavBar = () => {

  return (
    // TODO: make nav sticky and blurry with opacity bg
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="flex wrapper justify-between py-8 items-center">
        <div className="flex gap-x-6 items-center">
          <Image src="/logo.png" alt="KD&apos;s Paleteria Logo" width={48} height={48} />
          <ul className="flex gap-x-6">
            <li><Link href="#ice-cream">Ice Cream</Link></li>
            <li><Link href="#popsicles">Popsicles</Link></li>
            <li><Link href="#snacks">Snacks</Link></li>
            <li><Link href="#drinks">Drinks</Link></li>
          </ul>
        </div>
        <Toggle />
      </div>
     
    </nav>
  );
};

export default DesktopNavBar;



