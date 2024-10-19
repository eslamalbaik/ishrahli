"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import { BiCartAddMini } from "../../lib/@react-icons";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../data/mediaQuery";
import Rating from "../Home/Reviews/Rating";
function CarouselComponent({ sliderImageUrl, title }) {

    return (
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
                            src={imageUrl.url}
                            alt={imageUrl.name}
                            width={350}
                            height={250}
                            className="rounded-tl-md rounded-tr-md transition-transform duration-300 transform hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-right">
                        <h3 className="text-lg md:text-xl font-medium mb-2">
                            {imageUrl.name}
                        </h3>
                        <div className="text-sm md:text-base text-[#595C5F] font-light mb-4 flex justify-end items-end">
                            <p className="text-xl text-yellow-400">4.5</p>{" "}
                            <Rating rating={4.5} />
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-red-600 text-[16px] md:text-[18px] font-bold">
                                {imageUrl.salary}
                            </p>
                            <p>:سعر {title}</p>
                        </div>
                        <button className="bg-[--foreground] hover:bg-[--background] text-white font-semibold mt-4 py-2  lg:w-[285px] px-4 rounded-md flex justify-center items-center gap-2 transition-colors duration-300">
                            أضف إلى السلة
                            <BiCartAddMini className="text-xl md:text-2xl" />
                        </button>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}

export default CarouselComponent;
