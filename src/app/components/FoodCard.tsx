import Image from "next/image";
import { FoodItem } from "../types/food";

interface FoodCardProps {
  foodItems: FoodItem[];
  language: "en" | "es";
}

const FoodCard: React.FC<FoodCardProps> = ({ foodItems, language }) => {
  return (
    <div className="flip-card-container">
      {foodItems.map((item: FoodItem, index: number) => (
        <div key={index} className="flip-card">
          <div className="flip-card-inner w-full h-full">
            <div className="flip-card-front card-base">
              <div className="flex flex-col gap-y-6 items-center">
                <Image src={item.image} alt={item.alt?.[language]} width={125} height={125} />
                <p className="font-acme text-2xl text-center">{item.name[language]}</p>
              </div>
            </div>
            <div className="flip-card-back card-base relative">
              <div className="absolute w-full h-full z-10 flex justify-center items-center top-0 left-0">
                <div className="flex flex-col items-center">
                  <ul className="text-lg md:text-xl font-extrabold">
                    {item.price !== null ? (
                      <li>${item.price.toFixed(2)} each</li>
                    ) : (
                      item.variations?.map((variation, varIndex) => (
                        <li key={varIndex}>
                          {variation.name[language]}: ${variation.price.toFixed(2)}
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-y-6 items-center z-0 blur-sm opacity-50">
                <Image src={item.image} alt={item.alt?.[language]} width={125} height={125} />
                <p className="font-acme text-2xl text-center">{item.name[language]}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
