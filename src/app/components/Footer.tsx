import Image from "next/image";
import Link from "next/link";
const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="wrapper flex flex-col items-center gap-y-3">
      <div className="flex gap-x-4 items-center pt-4 md:pt-8">
        <Image src="/logo.png" alt="KD&apos;s Paleteria Logo" width={32} height={32} />
        <p className="font-acme text-lg">KD&apos;s Paleteria & Snacks</p>
      </div>
      <div className="flex gap-x-4 items-center">
        <Link target="_blank" className="social-icon" href="https://www.facebook.com/profile.php?id=61566820604254">
          <Image src="/icons/facebook2.svg" alt="Facebook Icon" width={32} height={32} />
        </Link>
        <Link target="_blank" className="social-icon" href="https://www.instagram.com/kdspaleteria/">
          <Image src="/icons/instagram2.svg" alt="Instagram Icon" width={32} height={32} />
        </Link>
      </div>
      <div className="footer-credits pb-4 md:pb-8"> © {currentYear} | <Link target="_blank" href="/">KDsPaleteriaAndSnacks.com </Link>| Site by <Link target="_blank" href="https://www.sarabaqla.dev/">S4R4</Link></div>
    </footer>
  );
};

export default Footer;



