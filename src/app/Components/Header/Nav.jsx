"use client"; // Add this to mark the component as a Client Component

import React, { useState } from "react";
import Link from "next/link";
// import { IoIosArrowDown } from "react-icons/io";
import DropdownMenu from "./DropdownMenu";
import Button from "../Button";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const items = [
    {
      id: 0,
      link: "one",
      namechildern: "one",
    },
    {
      id: 1,
      link: "two",
      namechildern: "two",
    },
  ];
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="hidden font-[family-name:var(--font-IBMPlexSans-Medium)]  min-[1020px]:flex   h-[100px] w-fit  lg:gap-52">
      <ul className="text-[--background]  lg:flex space-x-6 items-center text-[20px] leading-6 font-normal lg:mr-32">
        <li className=" cursor-pointer font-[family-name:var(--font-IBMPlexSans-Medium)]  hover:text-[--foreground]  ">
          <Link
            className="ml-6 relative block  lg:px-2    "
            href="/"
          >
            الرئيسية
          </Link>
        </li>
        {/* <li className='block  cursor-pointer  py-8   hover:bg-[--foreground] hover:text-white '>
          <Link className='relative block py-12 px-2 lg:p-4   ' href='/privacy'> </Link>
        </li> */}
     <li className="text-[--background] py-2 hover:text-[--foreground] lg:px-3 text-center border-b-2 md:border-b-0">
          <DropdownMenu nameDropdown=" المذكرات" items={items} />
        </li>
        <li className=" cursor-pointer font-[family-name:var(--font-IBMPlexSans-Medium)]  hover:text-[--foreground]  ">
          <Link
            className="ml-6 relative block  lg:px-2    "
            href="/"
          >
            الحصص المباشرة
          </Link>
        </li>
       <li className="text-[--background] py-2 hover:text-[--foreground] lg:px-3 text-center border-b-2 md:border-b-0">
          <DropdownMenu nameDropdown="مسارات التعلم" items={items} />
        </li>



      </ul>
      {/* <Link className=" py-6" href="login">
        <button className=" transition-all delay-100  border text-[--background] rounded-[6px] text-[18px] font-medium leading-6 relative block py-12 px-2 lg:p-4 hover:text-white hover:bg-[--foreground]">
          
        </button>

      </Link> */}

    </nav>
  );
};
export default Nav;
