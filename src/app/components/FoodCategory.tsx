// TODO: Props to add: neon-bar (img), section title (img), food description (string), 
// TODO: card component - passing in food data
// TODO: import food data?

import Image from "next/image";
const FoodCategory = () => {

  return (
    <section className="wrapper py-10">
      <div className="flex flex-col">
        <div className="flex items-center gap-x-4">
          <Image src="/icons/drinks.svg" alt="Drinks icon" width={32} height={32} /> 
          <h2 className="font-acme text-2xl md:text-4xl text-neon-pink">Ice Cream</h2>
          {/* <Image className="object-fit" src="/text/ice-cream-text.svg" alt="Ice Cream" width={1000} height={1000} />  */}
        </div>
        <p className="text-xl">This is the description of the ice cream at the store.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div className="border border-blue-400">
          CARD
        </div>
   
      <div className="border border-blue-400">
          CARD
        </div>
      <div className="border border-blue-400">
          CARD
        </div>
        <div className="border border-blue-400">
          CARD
        </div>
        <div className="border border-blue-400">
          CARD
        </div>
        <div className="border border-blue-400">
          CARD
        </div>
      </div>
    </section>
  );
};

export default FoodCategory;
