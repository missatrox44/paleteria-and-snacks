"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import FoodCard from "./FoodCard";
import { FoodItem } from "../types/food";

interface FoodSwiperProps {
  foodItems: FoodItem[];
}

const FoodSwiper: React.FC<FoodSwiperProps> = ({ foodItems }) => {
  if (!foodItems || foodItems.length === 0) {
    return <div>No food items available</div>;
  }

  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      {foodItems.map((item, index) => (
        <SwiperSlide key={index}>
          <FoodCard foodItems={[item]} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FoodSwiper;