// TODO: Props to add: neon-bar (img), section title (string), food description (string), 
// TODO: card component - passing in food data
// TODO: import food data?

import Image from "next/image";
import { iceCreamData } from "../data/foodData";
const FoodCategory = () => {

  return (
    <section className="wrapper py-10">
      <div className="flex flex-col pb-8">
        <div className="flex items-center gap-x-4">
          <Image src="/icons/ice-cream.svg" alt="Ice Cream icon" width={50} height={50} />
          <h2 className="font-acme text-2xl md:text-4xl text-neon-pink pink-neon-glow">Ice Cream</h2>
        </div>
        <p className="text-xl">This is the description of the ice cream at the store.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-14">
        <div className="bg-gradient-to-b from-card-gr-top via-card-gr-middle to-card-gr-bottom flex items-center justify-center col-span-1 py-4 rounded-3xl">
          <div className="flex flex-col gap-y-6 items-center">
            <Image src="/temp/ice-cream/cup.png" alt="Ice Cream" width={150} height={150} />
            <p className="font-acme text-2xl">Cup</p>
          </div>
        </div>
     
       
      </div>
    </section>
  );
};

export default FoodCategory;
