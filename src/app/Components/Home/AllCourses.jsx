"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiCartAddMini, FaExternalLinkAltMini } from "../../lib/@react-icons";
import Link from "next/link";
import dynamic from "next/dynamic";
const Rating = dynamic(() => import("./Reviews/Rating"),{ssr:false});
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
    url: "/images/courses/E-01.png.webp",
    name: "كورس الرياضيات الصف الثالث الثانوي",
    about:
      "باقة كورسات الصف الرابع (لغة عربية - لغة انجليزية - علوم - رياضيات)",
    salary: "KWD 50",
  },
  {
    url: "/images/courses/E-02.png.webp",
    name: "كورس الرياضيات الصف الثالث الثانوي",
    about:
      "باقة كورسات الصف الرابع (لغة عربية - لغة انجليزية - علوم - رياضيات)",
    salary: "KWD 45",
  },
  {
    url: "/images/courses/E-03.png.webp",
    name: "كورس الرياضيات الصف الثالث الثانوي",
    about:
      "باقة كورسات الصف الرابع (لغة عربية - لغة انجليزية - علوم - رياضيات)",
    salary: "KWD 60",
  },
  {
    url: "/images/courses/E-04.png.webp",
    name: "كورس الرياضيات الصف الثالث الثانوي",
    about:
      "باقة كورسات الصف الرابع (لغة عربية - لغة انجليزية - علوم - رياضيات)",
    salary: "KWD 55",
  },
  {
    url: "/images/courses/E-05.png.webp",
    name: "كورس الرياضيات الصف الثالث الثانوي",
    about:
      "باقة كورسات الصف الرابع (لغة عربية - لغة انجليزية - علوم - رياضيات)",
    salary: "KWD 40",
  },
];

const AllCourses = () => {
  return (
    <div className="w-full bg-[#f3f3f3ec] py-12 md:py-24 px-6 md:px-12 text-[--background] font-[family-name:var(--font-Cairo-Medium)]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[20px] md:text-[22px] border-b-[3px] border-[--foreground] font-[family-name:var(--font-Cairo-Bold)]">
          تصفح أفضل الكورسات
        </h2>
        <Link
          href="/"
          className="font-[family-name:var(--font-Cairo-Bold)] flex items-center gap-1 text-[--background] hover:text-[--foreground] transition"
        >
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
          <div
            className="h-[470px] md:h-[470px] w-[280px] md:w-[320px] overflow-hidden mx-4 border rounded-md border-[#f3f3f3d5] bg-white"
            key={index}
          >
            <div className="overflow-hidden">
      
              <Image
                src="https://ishrahli.com/storage/images/classrooms/2023-06-11-19-35WTwIX.png"
                alt={imageUrl.name}
                width={350} 
                height={250} 
                className="rounded-tl-md rounded-tr-md transition-transform duration-300 transform hover:scale-105"
                priority 
              />
            </div>
            <div className="p-4 text-right">
              <h3 className="text-lg md:text-xl font-medium mb-2">
                {imageUrl.name}
              </h3>
              <Rating rating={4.5} />
              <div className="flex justify-between items-center">
                <p className="text-red-600 text-[16px] md:text-[18px] font-bold">
                  {imageUrl.salary}
                </p>
                <p>:سعر الكورس</p>
              </div>
              <button className="bg-[--background] hover:bg-[--foreground] text-white font-semibold mt-4 py-2  lg:w-[285px] px-4 rounded-md flex justify-center items-center gap-2 transition-colors duration-300">
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

export default AllCourses;
