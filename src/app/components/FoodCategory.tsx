
import Image from "next/image";
import classNames from "classnames";
import { FoodItem } from "../types/food";
import FoodCard from "./FoodCard";

interface FoodCategoryProps {
  id: string;
  neonBar: string;
  imgSrc: string;
  categoryTitle: string;
  categoryDescription: string;
  foodItems: FoodItem[];
  classes: string;
  language: "en" | "es";
}
const FoodCategory: React.FC<FoodCategoryProps> = ({
  id = "",
  neonBar = "",
  imgSrc = "",
  categoryTitle,
  categoryDescription,
  foodItems,
  classes = "",
  language }) => {

  return (
    <section id={id} className="wrapper py-10 relative   scroll-mt-[120px]">
      {/* vertical neon bar */}
      <div className="absolute -left-8 top-0 w-10 h-full hidden md:block">
        <Image
          src={neonBar}
          alt="neon bar"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="flex flex-col pb-8">
        <div className="flex items-center gap-x-4">
          <Image src={imgSrc} alt={`${categoryTitle} icon`} width={50} height={50} />
          <h2 className={classNames("font-acme text-2xl md:text-4xl", classes)}>{categoryTitle}</h2>
        </div>
        <p className="text-xl pt-3">{categoryDescription}</p>
      </div>
      <FoodCard foodItems={foodItems} language={language} />

    </section>
  );
};

export default FoodCategory;