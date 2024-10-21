"use client"
import React, { useState } from 'react'
// import { BiSolidLeftArrowMini, BsChevronDownMini } from "../lib/@react-icons";
import Link from 'next/link'
const AccordionMater = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (

        <div className="mb-6  relative font-Tajawal border-[#615d8b] ">
            <button
                className="flex items-center rounded-xl  justify-between w-full h-24  text-left text-lg font-medium  bg-[#F5F5F5]   border-t-1"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className='absolute top-0 right-0 w-2 h-full  rounded-r-xl rounded-br-xl bg-[#FF7426] '></div>

                <span className="relative text-xl font-medium text-[#00052E] text-right max-sm:text-lg pr-16">
                    <div className='absolute -bottom-6 right-16 w-[350px] h-[6px]  rounded-xl  bg-[#CDCDCD] '></div>
                    <div className='absolute top-0 -left-24 rounded-3xl w-fit text-[10px] h-fit px-3 bg-[#00B267] text-white '>
                        تنزيل مجاني
                    </div>
                    الدرس الأول:جبر خطي (العلاقات والدوال)</span>

                <span className="ml-6 flex-shrink-0 ">
                    {isOpen ? (
                        <div className='border-2 rounded-full p-2 border-[#00052E]'>
                            {/* <BsChevronDownMini className="h-5 w-5  rotate-180" /> */}
                        </div>
                    ) : (
                        <div className='border-2 rounded-full p-2 border-[#00052E]'>
                            {/* <BsChevronDownMini className="h-5 w-5" /> */}
                        </div>
                    )}
                </span>
            </button>
            {isOpen && (
                <div className=''>
                    <div className="px-6 py-5 text-right text-[#00052E] bg-[#F5F5F5] ">
                        <div className='text-center text-lg md:text-2xl font-medium py-4 underline'>
                            الدرس الأول:جبر خطي (العلاقات والدوال)
                        </div>
                        <div className='relative text-[--seconderay] font-medium text-xl flex justify-start items-center pr-[40px]'>
                            {/* <BiSolidLeftArrowMini /> */}
                            <h3>الملف الأول : اختبارالرياضيات </h3>
                            <Link href="/Files">
                        <div className='absolute top-0 right-96 rounded-3xl w-fit text-[14px] h-fit py-1 px-6 cursor-pointer bg-[--seconderay] text-white '>
                                تصفح الملف
                            </div>
                        </Link>
                        </div>
                    </div>

                    <div className="px-6 py-2 pb-4 text-right text-[#00052E] bg-[#F5F5F5] ">
                        <div className='relative text-[--seconderay] font-medium text-xl flex justify-start items-center pr-[40px]'>
                            {/* <BiSolidLeftArrowMini /> */}
                            <h3>الملف الثاني : اختبارالرياضيات </h3>
                        <Link href="/Files">
                        <div className='absolute top-0 right-96 rounded-3xl w-fit text-[14px] h-fit py-1 px-6 cursor-pointer bg-[--seconderay] text-white '>
                                تصفح الملف
                            </div>
                        </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AccordionMater