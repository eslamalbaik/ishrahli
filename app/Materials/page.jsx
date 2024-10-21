import React from 'react'
// import { AiOutlineArrowLeftMini } from "../lib/@react-icons";
import Image from 'next/image'
import dynamic from 'next/dynamic';
const ItemMater=dynamic(()=>import('./ItemMater'))
import Link from 'next/link'
// const Button=dynamic(()=>import('../Components/Button'))
import {faqs} from '../data/data'
const page = () => {
  return (
    <div className='mt-40 md:mx-24'>
      <div>
      <div className='flex justify-between items-center'>
        <h3 className='text-[#00052E] text-xl font-medium'>
            الصف الثالث الإعدادي - الفصل الدراسي الأول
        </h3>
      <div className="flex justify-center items-center gap-2 cursor-pointer ">
        <Link href="/">
        <h3 className='text-[#00052E] text-xl font-semibold underline'>العودة لصفحة المنهج</h3>
        </Link>
        {/* <AiOutlineArrowLeftMini/> */}
      </div>
     </div>

     <div className='flex justify-between items-center py-12' >
      <div>
        <h1 className='w-full text-[#00052E] text-[46px] pb-10 font-semibold'>
          مادة الرياضيات
        </h1>
        <button ClassName="bg-[#472758] px-4 py-2 text-xl">تصفح الكورس</button>
      </div>
      
      <div>
      <Image
        src="/img/material.webp"
        alt="صورة الصفحة الرئيسية ندرس"
        width={450}
        height={350}
      />
      </div>

     </div>
      </div>

      <div>
      <ItemMater data={faqs} />
      </div>
    </div>
  )
}

export default page