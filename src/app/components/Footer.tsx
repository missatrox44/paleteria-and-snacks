import Image from "next/image";
import Link from "next/link";
const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className="wrapper flex flex-col items-center">
      <div className="flex gap-x-4 items-center">
        <Image src="/logo.png" alt="KD's Paleteria Logo" width={32} height={32} />
        <p className="font-acme">KD's Paleteria & Snacks</p>
      </div>
      <div>Icons</div>
      <div className="footer-credits"> © {currentYear} | KD's Paleteria & Snacks | <Link target="_blank" href="https://www.sarabaqla.dev/">S4R4</Link></div>
    </div>
  );
};

export default Footer;
