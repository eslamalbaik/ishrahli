"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiCartAddMini, FaExternalLinkAltMini } from "../lib/@react-icons";
import Link from "next/link";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const sliderImageUrl = [
  {
    url: "/images/packs/pack-1.png",
    name: "باقة كورسات الصف الاول الثانوي",
    about: "باقة كورسات الصف الرابع (لغة عربية - لغة انجليزية - علوم - رياضيات)",
    salary: "KWD 50",
  },
  {
    url: "/images/packs/pack-2.png",
    name: "باقة كورسات الصف الثاني الثانوي",
    about: "باقة كورسات الصف الرابع (لغة عربية - لغة انجليزية - علوم - رياضيات)",
    salary: "KWD 45",
  },
  {
    url: "/images/packs/pack-3.png",
    name: "باقة كورسات الصف الثالث الثانوي",
    about: "باقة كورسات الصف الرابع (لغة عربية - لغة انجليزية - علوم - رياضيات)",
    salary: "KWD 60",
  },
  {
    url: "/images/packs/pack-4.png",
    name: "باقة كورسات الصف الثالث الثانوي",
    about: "باقة كورسات الصف الرابع (لغة عربية - لغة انجليزية - علوم - رياضيات)",
    salary: "KWD 55",
  },
  {
    url: "/images/packs/pack-5.png",
    name: "باقة كورسات الصف الثالث الثانوي",
    about: "باقة كورسات الصف الرابع (لغة عربية - لغة انجليزية - علوم - رياضيات)",
    salary: "KWD 40",
  },
];

const BestPackages = () => {
  return (
    <div className="w-full bg-[#f3f3f3ec] py-12 md:py-24 px-6 md:px-12 text-[--background] font-[family-name:var(--font-Cairo-Medium)]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[20px] md:text-[22px] border-b-[3px] border-[--foreground] font-[family-name:var(--font-Cairo-Bold)]">
          تصفح أفضل الباقات
        </h2>
        <Link href="/" className="font-[family-name:var(--font-Cairo-Bold)] flex items-center gap-1 text-[--background] hover:text-[--foreground] transition">
          المزيد <FaExternalLinkAltMini />
        </Link>
      </div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => (
          <div className="h-[400px] md:h-[450px] w-[280px] md:w-[320px] mx-4 border rounded-md border-[#f3f3f3d5] bg-white" key={index}>
            <div className="overflow-hidden">
              <Image
                src={imageUrl.url}
                alt={imageUrl.name}
                width={350}
                height={250}
                className="rounded-tl-md rounded-tr-md transition-transform duration-300 transform hover:scale-105"
              />
            </div> 
            
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-medium mb-2">{imageUrl.name}</h3>
              <p className="text-sm md:text-base text-[#595C5F] font-light mb-4">{imageUrl.about}</p>
              <div className="flex justify-between items-center">
                <p className="text-red-600 text-[16px] md:text-[18px] font-bold">{imageUrl.salary}</p>
                <p>:سعر الباقة</p>
              </div>
              <button className="bg-[--foreground] hover:bg-[--background] text-white font-semibold mt-4 py-2 lg:w-[285px]  px-4 rounded-md flex justify-center items-center gap-2 transition-colors duration-300">
                أضف إلى السلة
                <BiCartAddMini className="text-xl md:text-2xl" />
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BestPackages;
