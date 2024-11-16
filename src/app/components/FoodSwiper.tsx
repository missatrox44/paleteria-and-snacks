"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import FoodCard from "./FoodCard";
import { FoodItem } from "../types/food";
import classNames from "classnames";

interface FoodSwiperProps {
  id: string;
  imgSrc: string;
  categoryTitle: string;
  categoryDescription: string;
  foodItems: FoodItem[];
  classes: string;
}

const FoodSwiper: React.FC<FoodSwiperProps> = ({    
  id = "",
  imgSrc = "",
  categoryTitle,
  categoryDescription,
  foodItems,
  classes = "" }) => {
  if (!foodItems || foodItems.length === 0) {
    return <div>No food items available</div>;
  }

  return (
    <section id={id} className="wrapper py-8">
           <div className="flex flex-col pb-8">
        <div className="flex items-center gap-x-4">
          <Image src={imgSrc} alt={`${categoryTitle} icon`} width={50} height={50} />
          <h2 className={classNames("font-acme text-2xl md:text-4xl", classes)}>{categoryTitle}</h2>
        </div>
        <p className="text-xl pt-3">{categoryDescription}</p>
      </div>
      <Swiper spaceBetween={0} slidesPerView={1.75}>
        {foodItems.map((item, index) => (
          <SwiperSlide key={index}>
            <FoodCard foodItems={[item]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FoodSwiper;