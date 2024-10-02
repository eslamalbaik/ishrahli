"use client"; // Add this to mark the component as a Client Component
import React, { useState } from 'react';
import Link from 'next/link'
// import icons
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
// FaBars 
// AiOutlineClose
const NavMobile = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
 

<nav className='min-[1200px]:hidden   duration-500 transition-all relative z-20'>
      {/* menu icons */}
      <button onClick={() => setisOpen(true)} className="duration-500 transition-all">
        <span className='content-none  text-white bg-[--foreground]  absolute -top-1 -right-1 w-4 h-4 p-4 rounded-sm'></span> <FaBars size={22} className=" text-white 
        relative" />
      </button>
      {/* nav list */}
      <ul className={`${isOpen ? 'right-0' : 'right-full'
        } bg-[--foreground] fixed top-0 w-1/2  sm:w-full h-screen text-[--background] transition-all flex flex-col
          justify-center items-center space-y-8 text-[17px] ` }>
        {/* close button */}
        <button onClick={() => setisOpen(false)} className='absolute top-6 left-6'>
          <AiOutlineClose size={22} className="text-[--background]" />
        </button>
        <li>
          <Link className='cursor-pointer' href='/home'> الرئيسية</Link>
        </li>
        <li>
          <Link className='cursor-pointer' href='/privacy'>مسارات التعلم </Link>
        </li>
        <li>
          <Link className='cursor-pointer' href='/terms'> حول المنصة </Link>
        </li>
        <li><button className='   rounded-[26px] py-2 px-4 text-[17px] font-medium leading-6
        bg-[--background] text-white' >تسجيل الدخول</button></li>
      </ul>
    </nav >

  )
}

export default NavMobile