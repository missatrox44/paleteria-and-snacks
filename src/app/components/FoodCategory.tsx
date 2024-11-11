
import Image from "next/image";
import classNames from "classnames";
import { FoodItem } from "../types/food";

interface FoodCategoryProps {
  id : string;
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
       <div className="absolute -left-7 top-0 h-full w-10">
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
        <p className="text-xl">{categoryDescription}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-14">
        {foodItems.map((item: FoodItem, index: number) => (
          <div
            key={index}
            className="bg-gradient-to-b from-card-gr-top via-card-gr-middle to-card-gr-bottom flex items-center justify-center col-span-1 py-4 rounded-3xl"
          >
            <div className="flex flex-col gap-y-6 items-center">
              <Image src={item.image} alt={item.name} width={150} height={150} />
              <p className="font-acme text-2xl text-center">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodCategory;