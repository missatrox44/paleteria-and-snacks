
import Image from "next/image";
import classNames from "classnames";
import { FoodItem } from "../types/food";

interface FoodCategoryProps {
  id: string;
  neonBar: string;
  imgSrc: string;
  categoryTitle: string;
  categoryDescription: string;
  foodItems: FoodItem[];
  classes: string;
}
const FoodCategory: React.FC<FoodCategoryProps> = ({
  id = "",
  neonBar = "",
  imgSrc = "",
  categoryTitle,
  categoryDescription,
  foodItems,
  classes = "" }) => {

  return (
    <section id={id} className="wrapper py-10 relative">
      {/* vertical neon bar */}
      <div className="absolute -left-8 top-0 w-10 h-full hidden md:block">
        <Image
          src={neonBar}
          alt="neon bar"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col pb-8">
        <div className="flex items-center gap-x-4">
          <Image src={imgSrc} alt={`${categoryTitle} icon`} width={50} height={50} />
          <h2 className={classNames("font-acme text-2xl md:text-4xl", classes)}>{categoryTitle}</h2>
        </div>
        <p className="text-xl pt-3">{categoryDescription}</p>
      </div>
      <div className="flip-card-container">
        {foodItems.map((item: FoodItem, index: number) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner w-full h-full">
              <div className="flip-card-front card-base">
                <div className="flex flex-col gap-y-6 items-center">
                  <Image src={item.image} alt={item.name} width={125} height={125} />
                  <p className="font-acme text-2xl text-center">{item.name}</p>
                </div>
              </div>
              <div className="flip-card-back card-base relative">
                <div className="absolute w-full h-full z-10 flex justify-center items-center top-0 left-0">
                  <div className="flex flex-col items-center">
                    <ul>
                      <li>variation one</li>
                      <li>variation two</li>
                      <li>variation three</li>
                      <li>variation four</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-y-6 items-center z-0 blur-sm opacity-50">
                  <Image src={item.image} alt={item.name} width={125} height={125} />
                  <p className="font-acme text-2xl text-center">{item.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default FoodCategory;