import { Hero, MenuIcons,LocationHours, FollowSocial, FoodCategory } from "@/app/components";
import Image from "next/image";
export default function Home() {
  return (
   <div>
    <Hero />
    <MenuIcons />
    {/* IceCream */}
    <FoodCategory />
    {/* Pocpsicles */}
    {/* Snacks */}
    {/* Drinks */}  
    <div className="wrapper py-4 md:py-8">
      <Image src="/neon-bars/purple-neon-slim.svg" alt="Horizontal purple neon bar" width={1920} height={10} />
    </div>
    <FollowSocial />
    <div className="wrapper py-4 md:py-8">
      <Image src="/neon-bars/green-neon-slim.svg" alt="Horizontal green neon bar" width={1920} height={10} />
    </div>
    <LocationHours />
    
    {/* <h1 className="font-pacifico text-6xl">Pacifico</h1>
      <p className="font-acme text-2xl">Acme</p>
      <p className="font-afacad text-2xl">Afacad</p>
      <div className="wrapper">
        <p className="text-2xl">Hello, world!</p>
      </div> */}
    </div>
  );
}
