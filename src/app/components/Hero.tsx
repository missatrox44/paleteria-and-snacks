"use client";

import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";


const Hero = () => {
  const size = useWindowSize();

  let videoSrc = "/video/desktop-video.mp4";
  let logoSize = 250;

  if (size.width && size.width < 768) {
    videoSrc = "/video/mobile-video.mp4";
    logoSize = 125;
  } else if (size.width && size.width < 1024) {
    videoSrc = "/video/tablet-video.mp4";
    logoSize = 175;
  }

  return (
    <div className="relative flex justify-center">
      <video width="100%" height="auto" autoPlay muted playsInline loop>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2 flex justify-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={logoSize}
          height={logoSize}
          className=""
        />
      </div>
    </div>
  );
};

export default Hero;
