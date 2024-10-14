import Image from 'next/image';
import React from 'react';
import { BiCartAddMini } from '../lib/@react-icons';
import Rating from "../Components/Home/Reviews/Rating"
 
const CourseCard = ({ url, name, rating, salary }) => {
  return (
    <div className="h-auto md:h-[450px] w-full md:w-[320px] mx-4 border rounded-md border-[#f3f3f3d5] bg-white">
      <div className="overflow-hidden">
        <Image
          src={url}
          alt={name}
          width={350} 
          height={250}
          className="rounded-tl-md rounded-tr-md transition-transform duration-300 transform hover:scale-105"
          priority           
        />
      </div>

      <div className="p-4">
        <h3 className="text-[18px] font-medium mb-2">{name}</h3>
        <Rating rating={rating} />
        <div className="flex justify-between items-center">
          <p className="text-red-600 text-[16px] md:text-[18px] font-bold">{salary} د.ك</p>
          <p>: سعر الباقة</p>
        </div>
        <button className="bg-[--foreground] hover:bg-[--background] text-white font-semibold mt-4 py-2 lg:w-full md:w-[285px] px-4 rounded-md flex justify-center items-center gap-2 transition-colors duration-300">
          أضف إلى السلة
          <BiCartAddMini className="text-xl md:text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
