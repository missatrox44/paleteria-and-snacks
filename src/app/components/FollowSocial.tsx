"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import InstagramEmbed from "./InstagramEmbed";

const loadFacebookSDK = () => {
  if (document.getElementById("facebook-jssdk")) return;

  const script = document.createElement("script");
  script.id = "facebook-jssdk";
  script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0";
  document.body.appendChild(script);
};

const FollowSocial = () => {
  useEffect(() => {
    loadFacebookSDK();
  }, []);

  return (
    <section className="wrapper grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
      <div className="col-span-2">
        <h2 className="font-pacifico text-4xl md:text-6xl pb-5 text-center md:text-left">Follow <span className="md:hidden">the Flavor</span></h2>
        <h2 className="font-pacifico text-4xl md:text-6xl hidden md:block">the Flavor</h2>
        
        <p className="pt-8 kd-grey text-2xl pb-8">See what’s fresh at KD’s Paleteria & Snacks. From vibrant treats to special creations, our Facebook & Instagram feeds bring you all the latest delights!</p>

        <button className="bg-gradient-to-br from-custom-blue to-custom-purple  font-bold py-2 px-4 rounded-3xl opacity-80 hover:opacity-100 text-xl">
          Follow
        </button>

        <div className="social-icon">
          <Link target="_blank" href="https://www.facebook.com/profile.php?id=61566820604254">
            <Image src="/icons/facebook-gradient.svg" alt="Facebook icon" width={64} height={64} />
          </Link>
        </div>
        <div className="social-icon">
          <Link target="_blank" href="https://www.instagram.com/kdspaleteria/">
            <Image src="/icons/instagram-gradient2.svg" alt="Instagram icon" width={64} height={64} />
          </Link>
        </div>


      </div>
      {/* <div className="col-span-2 order-1 md:order-2 flex items-center">
        <div
          className="fb-post"
          data-href="https://www.facebook.com/permalink.php?story_fbid=pfbid02bufbNaeAtbyJnNmhrrRXEXE3a2cHzo9ggZtt9vg5eMWBAXf2nTo3XUEQU77FVHmbl&id=61566820604254"
          data-width="500"
        ></div>
      </div> */}
      {/* <InstagramEmbed /> */}
    </section>
  );
};

export default FollowSocial;
