import Image from "next/image";

const Hero = () => {

  return (
    <div className="relative flex justify-center">
      <video width="1920" height="1080" autoPlay muted>
        <source src="/video/hero-placeholder.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2 flex justify-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={200}
          className=""
        />
      </div>
    </div>
  );
};

export default Hero;
