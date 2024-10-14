"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiCartAddMini, FaExternalLinkAltMini } from "../../../lib/@react-icons";
import Link from "next/link";
import dynamic from "next/dynamic";
const PackageCard = dynamic(() => import("./PackageCard"));
import {sliderImageUrl} from "@/app/data/data"
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
                <PackageCard key={index} imageUrl={imageUrl} />
        ))}
      </Carousel>
    </div>
  );
};

export default BestPackages;
