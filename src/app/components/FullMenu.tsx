"use client";
import DesktopMenu from "./DesktopMenu";
import MobileMenuComponent from "./MobileMenu";

import { useMediaQuery } from "@uidotdev/usehooks";


const FullMenu = () => {
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");

  return (
    <>
      {isMobile ? <MobileMenuComponent /> : <DesktopMenu />}
    </>
  );
};

export default FullMenu;
