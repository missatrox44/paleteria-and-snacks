"use client";

import DesktopMenu from "./DesktopMenu";
import MobileMenuComponent from "./MobileMenu";
import { useWindowSize } from "@uidotdev/usehooks";

const FullMenu = () => {
  const size = useWindowSize();

  // Determine if the viewport is mobile-sized
  const isMobile = size.width && size.width < 768;

  return (
    <>
      {isMobile ? <MobileMenuComponent /> : <DesktopMenu />}
    </>
  );
};

export default FullMenu;
