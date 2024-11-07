"use client";
import React, { useState } from "react";
import {
  RiArrowLeftWideFillMini,
  BsChevronDownMini,
} from "../lib/@react-icons";
import Link from "next/link";
const AccordionMater = ({ name_material, first_semester, second_semester }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-6 relative  border-[#615d8b]">
      <button
        className="flex items-center rounded-xl justify-between w-full h-24 text-left text-lg font-medium bg-[#F5F5F5]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`absolute top-0 right-0 w-2 h-full rounded-r-xl ${
          isOpen? "bg-[--foreground]" : " bg-[#27A6E4] "}`}></div>
        <span
          className={`relative text-xl text-[#00052E] font-medium text-right max-sm:text-lg pr-16 `}
        >
          <div className="absolute -bottom-6 right-16 w-[350px] h-[6px] rounded-xl bg-[#CDCDCD]"></div>
          {name_material}
        </span>

        <span className="ml-6 flex-shrink-0">
          <div className={`border-2 rounded-full p-2   transition-transform duration-1000 ease-out ${
          isOpen? "bg-[--foreground]" : " bg-[#27A6E4] "}`}>
            <BsChevronDownMini
              className={`h-5 w-5 text-white ${isOpen ? "rotate-180" : "rotate-0 "}`}
            />
          </div>
        </span>
      </button>
      {isOpen && (
        <div className="overflow-hidden transition-all duration-1000 ease-in-out">
          <div className="px-6 py-5 text-right text-[#00052E] bg-[#F5F5F5]">
            <Link
              href={first_semester}
              className="relative text-[#00052E] font-medium text-xl flex justify-start items-center pr-[40px] hover:text-[--foreground]"
            >
              <RiArrowLeftWideFillMini /> الفصل الأول
            </Link>
          </div>

          <div className="px-6 py-2 pb-4 text-right text-[#00052E] bg-[#F5F5F5]">
            <Link
              href={second_semester}
              className="relative text-[#00052E] font-medium text-xl flex justify-start items-center pr-[40px] hover:text-[--foreground]"
            >
              <RiArrowLeftWideFillMini /> الفصل الثاني
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionMater;
