"use client"
import React, { useState } from "react";
import dynamic from "next/dynamic";
const MainLayout = dynamic(() => import("../MainLayout/MainLayout"),{ ssr: false });
const CourseCard = dynamic(() => import("../Components/CourseCard"),{ ssr: false });
const Page = () => {
  const [filter, setFilter] = useState(null); // State لتخزين الفلتر الحالي
  const CardsData = [
    {
      id: 1,
      url:"https://ishrahli.com/storage/images/classrooms/2023-06-11-19-35WTwIX.png",
      name: "كورس اللغة العربية الصف الثامن",
      rating: 4,
      salary: "40",
      subject: "اللغة العربية",
      grade: "الصف الثامن",
    },
    {
      id: 2,
      url:"https://ishrahli.com/storage/images/classrooms/2023-06-11-19-35WTwIX.png",
      name: "كورس اللغة الرياضيات الصف الثامن",
      rating: 4,
      salary: "56",
      subject: "الرياضيات",
      grade: "الصف الثامن",
    },
    {
      id: 3,
      url:"https://ishrahli.com/storage/images/classrooms/2023-06-11-19-35WTwIX.png",
      name: "كورس اللغة العربية الصف الثامن",
      rating: 4,
      salary: "40",
      subject: "اللغة العربية",
      grade: "الصف الثامن",
    },
    {
      id: 4,
      url:"https://ishrahli.com/storage/images/classrooms/2023-06-11-19-35WTwIX.png",
      name: "كورس  اللغة الانجليزية الصف الثامن",
      rating: 4,
      salary: "40",
      subject: "English",
      grade: "الصف الثامن",
    },
    {
      id: 5,
      url:"https://ishrahli.com/storage/images/classrooms/2023-06-11-19-35WTwIX.png",
      name: "كورس اللغة الانجليزية الصف الثامن",
      rating: 4,
      salary: "40",
      subject: "English",
      grade: "الصف الثامن",
    },
    {
      id: 6,
      url:"https://ishrahli.com/storage/images/classrooms/2023-06-11-19-35WTwIX.png",
      name: "كورس اللغة الرياضيات الصف الثامن",
      rating: 4,
      salary: "56",
      subject: "الرياضيات",
      grade: "الصف الثامن",
    },
    
  ];
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
            </div>          <div className="grid grid-cols-4 gap-y-6 pt-12">
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
