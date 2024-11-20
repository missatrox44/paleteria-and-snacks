"use client";

import { iceCreamData, popsiclesData, snacksData, drinksData } from "../data/foodData";
import FoodSwiper from "./FoodSwiper";
import useStore from "../store";

const MobileMenu = () => {
  const { language } = useStore() as { language: 'en' | 'es' };

  return (
    <>
      <FoodSwiper id="ice-cream"
        imgSrc="/icons/ice-cream.svg"
        categoryTitle={language === "en" ? "Ice Cream" : "Helado"}
        categoryDescription={
          language === "en"
            ? "This is the description of the ice cream at the store."
            : "Esta es la descripción del helado en la tienda."
        }
        foodItems={iceCreamData}
        classes="text-neon-pink pink-neon-glow"
        swiperClass="ice-cream-swiper"
        language={language} />

      <FoodSwiper id="popsicles"
        imgSrc="/icons/popsicle.svg"
        categoryTitle={language === "en" ? "Popsicles" : "Paletas"}
        categoryDescription={
          language === "en"
            ? "This is the description of the popsicles at the store."
            : "Esta es la descripción del paletas en la tienda."
        }
        foodItems={popsiclesData}
        classes="text-neon-blue blue-neon-glow"
        swiperClass="popsicles-swiper"
        language={language} />

      <FoodSwiper id="snacks"
        imgSrc="/icons/snack.svg"
        categoryTitle={language === "en" ? "Snacks" : "Bocadillos"}
        categoryDescription={
          language === "en"
            ? "This is the description of the snacks at the store."
            : "Esta es la descripción del bocadillos en la tienda."
        }
        foodItems={snacksData}
        classes="text-neon-orange orange-neon-glow"
        swiperClass="snacks-swiper"
        language={language} />

      <FoodSwiper id="drinks"
        imgSrc="/icons/drinks.svg"
        categoryTitle={language === "en" ? "Drinks" : "Bebidas"}
        categoryDescription={
          language === "en"
            ? "This is the description of the drinks at the store."
            : "Esta es la descripción del bebidas en la tienda."
        }
        foodItems={drinksData}
        classes="text-neon-green green-neon-glow"
        swiperClass="drinks-swiper"
        language={language} />

      {/* <div className="relative">
      <div className="absolute right-0 top-20 z-[-1] opacity-40">
        <Image src="/bg-icons/agua.svg" alt="agua fresca icon" width={550} height={550} />
      </div>
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
    </div>
    <div className="relative">
      <div className="absolute right-0 bottom-0 z-[-1] opacity-40">
        <Image src="/bg-icons/nachos.svg" alt="nachos icon" width={750} height={750} />
      </div>
      <div className="absolute left-0 top-0 z-[-1] opacity-40">
        <Image src="/bg-icons/popcorn.svg" alt="popcorn icon" width={500} height={500} />
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
    </div>
    <div className="relative">
      <div className="absolute left-0 top-0 z-[-1] opacity-40">
        <Image src="/bg-icons/coke.svg" alt="coke bottle icon" width={500} height={500} />
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
    </div> */}
    </>
  );
};

export default MobileMenu;
