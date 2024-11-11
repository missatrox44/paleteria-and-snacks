import { Hero, MenuIcons, LocationHours, FollowSocial, FoodCategory } from "@/app/components";
import Image from "next/image";
import { iceCreamData, popsiclesData, snacksData, drinksData } from "./data/foodData";
export default function Home() {
  return (
    <div>
      <Hero />
      <MenuIcons />
      {/* IceCream */}
      <div className="pb-10">
        <FoodCategory
          id="ice-cream"
          neonBar="/neon-bars/pink-neon-vertical2.svg"
          imgSrc="/icons/ice-cream.svg"
          categoryTitle="Ice Cream"
          categoryDescription="This is the description of the ice cream at the store."
          foodItems={iceCreamData}
          classes="text-neon-pink pink-neon-glow"
        />
      </div>
      <div className="pb-10">
        <FoodCategory
          id="popsicles"
          neonBar="/neon-bars/turquoise-neon-vertical2.svg"
          imgSrc="/icons/popsicle.svg"
          categoryTitle="Popsicles"
          categoryDescription="This is the description of the popsicles at the store."
          foodItems={popsiclesData}
          classes="text-neon-turquoise turquoise-neon-glow"
        />
      </div>
      <div className="pb-10">
        <FoodCategory
          id="snacks"
          neonBar="/neon-bars/orange-neon-vertical2.svg"
          imgSrc="/icons/snack.svg"
          categoryTitle="Snacks"
          categoryDescription="This is the description of the snacks at the store."
          foodItems={snacksData}
          classes="text-neon-orange orange-neon-glow"
        />
      </div>
      <div className="pb-10">
        <FoodCategory
          id="drinks"
          neonBar="/neon-bars/green-neon-vertical2.svg"
          imgSrc="/icons/drinks.svg"
          categoryTitle="Drinks"
          categoryDescription="This is the description of the drinks at the store."
          foodItems={drinksData}
          classes="text-neon-green green-neon-glow"
        />
      </div>


      <div className="wrapper py-4 md:py-8">
        <Image src="/neon-bars/purple-neon-slim.svg" alt="Horizontal purple neon bar" width={1920} height={10} />
      </div>

      <FollowSocial />

      <div className="wrapper py-4 md:py-8">
        <Image src="/neon-bars/green-neon-slim.svg" alt="Horizontal green neon bar" width={1920} height={10} />
      </div>

      <LocationHours />

    </div>
  );
}
