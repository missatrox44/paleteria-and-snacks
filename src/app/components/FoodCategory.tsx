
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
      <div className="absolute -left-8 top-0 w-10 h-full">
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-14">
        {foodItems.map((item: FoodItem, index: number) => (
          <div
            key={index}
            className="col-span-1 flip-card"
          >
            <div className="flip-card-inner w-full h-full">
              <div className="flip-card-front bg-gradient-to-b from-card-gr-top via-card-gr-middle to-card-gr-bottom flex items-center justify-center rounded-3xl">
                <div className="flex flex-col gap-y-6 items-center">
                  <Image src={item.image} alt={item.name} width={150} height={150} />
                  <p className="font-acme text-2xl text-center">{item.name}</p>
                </div>
              </div>
              <div className="flip-card-back bg-gradient-to-b from-card-gr-top via-card-gr-middle to-card-gr-bottom flex items-center justify-center rounded-3xl">
                <h1 className="text-white font-acme text-2xl">Back of {item.name}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodCategory;