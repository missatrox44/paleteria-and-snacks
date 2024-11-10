import Image from "next/image";
import Link from "next/link";

const FollowSocial = () => {

  return (
    <section className="wrapper grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
       <h2 className="col-span-2 md:col-span-4 font-pacifico text-4xl md:text-6xl text-center">Follow the Flavor</h2>
      <div className="col-span-2">
        <p className="kd-grey text-2xl">See what’s fresh at KD’s Paleteria & Snacks. From vibrant treats to special creations, our Facebook & Instagram feeds bring you all the latest delights!</p>
        <div className="flex gap-x-4 pt-6">
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
      </div>
      <div className="col-span-2 order-1 md:order-2 flex items-center">
        <Image src="/temp/collage.png" alt="Horizontal purple neon bar" width={500} height={500} />
      </div>
    </section>
  );
};

export default FollowSocial;
