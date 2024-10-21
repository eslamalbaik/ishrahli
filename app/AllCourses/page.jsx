"use client"
import React, { useState } from "react";
import MainLayout from "../MainLayout/MainLayout";
import  CourseCard from "../Components/CourseCard";
import {CardsData} from '../data/data'
const Page = () => { 
  const [filter, setFilter] = useState(null); 
  const filterCourses = (subject) => {
    setFilter(subject);
  };
  const filteredCourses = filter  ? CardsData.filter((course) => course.subject === filter)  : CardsData;

  return (
    <MainLayout>
      <section className="w-full h-full bg-[#f3f3f3ec] py-24 px-12  md:py-36 md:px-24   text-[--background] font-[family-name:var(--font-Cairo-Medium)]">
        <h1 className="text-[24px] md:text-[22px] border-b-[3px] border-[--foreground] font-[family-name:var(--font-Cairo-Bold)]">
          جميع الكورسات
        </h1>
        <div>
        <div className="py-6">
            <div className="flex space-x-4">
              <button className="p-2 ml-4 bg-[--foreground] rounded-md text-white hover:bg-[--background]" onClick={() => filterCourses (null)}>جميع المواد</button>
              <button className="p-2 bg-[--foreground] rounded-md text-white hover:bg-[--background]" onClick={() => filterCourses ("اللغة العربية")}>اللغة العربية</button>
              <button className="p-2 bg-[--foreground] rounded-md text-white hover:bg-[--background]" onClick={() => filterCourses ("الرياضيات")}>الرياضيات</button>
              <button className="p-2 bg-[--foreground] rounded-md text-white hover:bg-[--background]" onClick={() => filterCourses ("English")}>English</button>
            </div>
              {/* إضافة المزيد من الأزرار لباقي المواد */}
            </div>
            <div className="grid grid-cols-4 gap-y-6 pt-12">
            {filteredCourses.map(({ id, name, rating, salary, url }) => (
              <CourseCard
                key={id}
                name={name}
                rating={rating}
                salary={salary}
                url={url}
              />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Page;
