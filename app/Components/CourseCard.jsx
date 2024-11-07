import Image from 'next/image';
import React from 'react';
import { BiCartAddMini } from '../lib/@react-icons';

const CourseCard = ({ url, name, about, salary, oldPrice }) => {
  return (
    <div className="relative h-auto md:h-[450px] w-full max-w-xs mx-auto border rounded-md border-[#f3f3f3d5] bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <div className="overflow-hidden rounded-t-md">
        <Image
          src={url}
          alt={name}
          width={350}
          height={250}
          className="w-full h-56 object-cover rounded-tl-md rounded-tr-md transition-transform duration-300 transform hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-medium mb-2">{name}</h3>
        <p className='text-sm text-slate-400 py-2'>{about}</p>
        <div className="flex justify-start gap-2 items-center">
          <p className="text-sm md:text-base"> سعر الباقة :</p>
          {oldPrice && (
            <p className="text-gray-400 text-sm md:text-base line-through mr-2">{oldPrice} د.ك</p>
          )}
          <p className="text-red-600 text-lg md:text-xl font-bold">{salary} د.ك</p>
        </div>
        <button className="absolute right-0 bottom-0 bg-[--foreground] hover:bg-[--background] text-white font-semibold mt-4 py-2 px-4 rounded-md flex justify-center items-center gap-2 transition-colors duration-300 w-full">
          أضف إلى السلة
          <BiCartAddMini className="text-lg md:text-xl" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
