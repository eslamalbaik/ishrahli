"use client";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Slide =dynamic(()=>import('../Slide'));

const Reviews = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = [
    "/images/reviews/p1.webp",
    "/images/reviews/p2.webp",
    "/images/reviews/p3.webp",
    "/images/reviews/p4.webp",
    "/images/reviews/p5.webp",
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1300 },
      items: 1.5,
      slidesToScroll: 1,
    },
    LargeDesktop: {
      breakpoint: { max: 1300, min: 1024 },
      items: 1,
      slidesToScroll: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 750 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 750, min: 640 },
      items: 1.5,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      centerMode: true,
    },
  };

  return (
    <>
      <div className="relative bg-white pt-44 pb-44 max-md:py-14 space-y-3 font-[family-name:var(--font-Cairo-Medium)]">
        <div className="flex justify-start items-center">
          <div className="hidden lg:block w-[40vw]">
            <div>
              <Image
                className="absolute top-2 rotate-[360deg] -right-28 w-[690px]"
                src="/images/reviews/Polygon.webp"
                alt="Polygon"
                width={690}
                height={690}
              />
              <Image
                className="absolute top-48 rotate-[10deg] right-20 w-[400px]"
                src="/images/reviews/Path.webp"
                alt="Path"
                width={400}
                height={400}
              />
              <div
                className="ease-linear duration-300 bg-cover bg-center shadow-xl absolute top-44 swiper-slide-active rounded-full border-[5px] border-white right-48 w-[50px] h-[50px]"
                style={{
                  backgroundImage: `url(${
                    images[activeImageIndex % images.length]
                  })`,
                }}
              />
              <span
                className="ease-linear duration-300 bg-cover bg-center shadow-xl absolute top-[450px] rounded-full border-[5px] border-white right-[68px] w-[72px] h-[72px]"
                style={{
                  backgroundImage: `url(${
                    images[(activeImageIndex + 1) % images.length]
                  })`,
                }}
              />
              <div
                className="ease-linear duration-300 bg-cover bg-center shadow-xl absolute top-[510px] rounded-full border-[6px] border-[--foreground] right-[300px] w-[100px] h-[100px]"
                style={{
                  backgroundImage: `url(${
                    images[(activeImageIndex + 2) % images.length]
                  })`,
                }}
              />
              <div
                className="ease-linear duration-300 bg-cover bg-center shadow-xl absolute top-[365px] rounded-full border-[5px] border-white right-[280px] w-[80px] h-[80px]"
                style={{
                  backgroundImage: `url(${
                    images[(activeImageIndex + 3) % images.length]
                  })`,
                }}
              />
              <div
                className="ease-linear duration-300 bg-cover bg-center shadow-xl absolute top-[245px] rounded-full border-[5px] border-white right-[410px] w-[60px] h-[60px]"
                style={{
                  backgroundImage: `url(${
                    images[(activeImageIndex + 4) % images.length]
                  })`,
                }}
              />
              <span className="absolute top-[340px] dots  rounded-full  border-[7px] border-white right-[140px] w-7 h-7 bg-[--background]" />
              <span className="absolute top-[520px] dots2  rounded-full  border-[7px] border-white right-[200px] w-6 h-6 bg-[--background]" />
              <span className="absolute top-[220px] dots2  rounded-full  border-[7px] border-white right-[300px] w-6 h-6 bg-[--background]" />
              <span className="absolute top-[320px] dots3  rounded-full  border-[5px] border-white right-[375px] w-5 h-5 bg-[--background]" />
              <span className="absolute top-[480px] dots3  rounded-full  border-[5px] border-white right-[325px] w-5 h-5 bg-[--background]" />
            </div>
          </div>
          <div className="w-full lg:w-[60vw] max-lg:w-[100vw] overflow-hidden">
            <h1 className="text-[24px] text-[--background] sm:text-[28px] md:text-[28px] lg:text-[28px] xl:text-[28px] font-[family-name:var(--font-Cairo-Bold)]">
            انضم إلى العديد من الطلاب الذين يستفيدون من المحتوى التعليمي   
            </h1>
            <Carousel
              responsive={responsive}
              infinite={true}
              arrows={true}
              className="!mx-0 !px-0"
              containerClass="lg:w-[60vw] max-lg:w-[100vw] !mx-0 !px-0"
              itemClass="mt-2 mb-6 lg:px-4 md:px-3 cursor-grab"
              rtl={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              beforeChange={(previousSlide) =>
                setActiveImageIndex(previousSlide)
              }
            >
              <Slide
                image="/images/reviews/p1.webp"
                name="اسلام البيك"
                revirew='"من افضل الشركات اللي تعاملت وناس يعطو اكثر من المطلوب واجمل من المتوقع والعمل الرائع .. اتمنى لهم التوفيق"'
              />
              <Slide
                image="/images/reviews/p2.webp"
                name="محمد الكيلاني"
                revirew='"من افضل الشركات اللي تعاملت وناس يعطو اكثر من المطلوب واجمل من المتوقع والعمل الرائع .. اتمنى لهم التوفيق"'
              />
              <Slide
                image="/images/reviews/p3.webp"
                name="طارق العطار"
                revirew='"من افضل الشركات اللي تعاملت وناس يعطو اكثر من المطلوب واجمل من المتوقع والعمل الرائع .. اتمنى لهم التوفيق"'
              />
              <Slide
                image="/images/reviews/p4.webp"
                name="رامي الملاحي"
                revirew='"من افضل الشركات اللي تعاملت وناس يعطو اكثر من المطلوب واجمل من المتوقع والعمل الرائع .. اتمنى لهم التوفيق"'
              />
              <Slide
                image="/images/reviews/p5.webp"
                name="محمد عبده"
                revirew='"من افضل الشركات اللي تعاملت وناس يعطو اكثر من المطلوب واجمل من المتوقع والعمل الرائع .. اتمنى لهم التوفيق"'
              />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
