import Image from "next/image";

const Hero = () => {

  return (
    <div>
      <video width="1920" height="1080" autoPlay muted>
        <source src="/video/hero-placeholder.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;
