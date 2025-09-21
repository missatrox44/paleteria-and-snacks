"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
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
  swiperClass: string;
  language: "en" | "es";
}

const FoodSwiper: React.FC<FoodSwiperProps> = ({
  id = "",
  imgSrc = "",
  categoryTitle,
  categoryDescription,
  foodItems,
  classes = "",
  swiperClass = "",
  language }) => {
  if (!foodItems || foodItems.length === 0) {
    return <div>No food items available</div>;
  }

  return (
    <section id={id} className="wrapper py-8 scroll-mt-[80px]">
      <div className="flex flex-col pb-8">
        <div className="flex items-center gap-x-4">
          <Image src={imgSrc} alt={`${categoryTitle} icon`} width={50} height={50} />
          <h2 className={classNames("font-acme text-[2.25rem]", classes)}>{categoryTitle}</h2>
        </div>
        <p className="text-lg md:text-3xl pt-3">{categoryDescription}</p>
      </div>
      <Swiper
        className={classNames("custom-swiper", swiperClass)}
        modules={[Navigation, Pagination]}
        // spaceBetween={40}
        slidesPerView={1.5}
        centeredSlides={true}
        navigation
        pagination={{
          type: "progressbar",
        }}
      >
        {foodItems.map((item, index) => (
          <SwiperSlide key={index}>
            <FoodCard foodItems={[item]} language={language} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FoodSwiper;