"use client";

import Image from "next/image";
import Link from "next/link";
import InstagramEmbed from "./InstagramEmbed";
import useStore from "../store";
import { socialText } from "../translations/social";

const FollowSocial = () => {
  const { language } = useStore() as { language: 'en' | 'es' };

  return (
    <section className="relative">
      <div className="absolute right-left top-0 z-[-1] opacity-40">
        <Image src="/bg-icons/cotton-candy.svg" alt="Cotton Candy icon" width={400} height={400} />
      </div>
      <div className="wrapper grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
        <h2 className="col-span-2 md:col-span-4 font-pacifico text-4xl md:text-6xl text-center">{socialText[language][0]}</h2>
        <div className="col-span-2">
          <p className="text-2xl">{socialText[language][1]}</p>
          <div className="flex gap-x-4 justify-around items-center pt-[25%] z-10">
              <div className="social-icon">
                <Link target="_blank" href="https://www.facebook.com/profile.php?id=61566820604254">
                  <Image src="/icons/facebook-gradient.svg" alt="Facebook icon" width={128} height={128} />
                </Link>
              </div>
              <div className="social-icon">
                <Link target="_blank" href="https://www.instagram.com/kdspaleteria/">
                  <Image src="/icons/instagram-gradient2.svg" alt="Instagram icon" width={128} height={128} />
                </Link>
              </div>
          </div>

        </div>
        <div className="col-span-2 flex items-center">
          {/* <Image src="/temp/collage.png" alt="Horizontal purple neon bar" width={500} height={500} /> */}
          <InstagramEmbed />
        </div>
      </div>
    </section>
  );
};

export default FollowSocial;
