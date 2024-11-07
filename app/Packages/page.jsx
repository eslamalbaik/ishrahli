"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStage, setGrade, setSemester, resetFilters } from "../lib/@redux-toolkit/filterSlice";
import MainLayout from "../MainLayout/MainLayout";
import CourseCard from "../Components/CourseCard";
import { PackagesCard } from '../data/data';

const stages = [
  {
    level: "المرحلة الابتدائية",
    grades: ["الصف الأول", "الصف الثاني", "الصف الثالث", "الصف الرابع", "الصف الخامس"],
  },
  {
    level: "المرحلة المتوسطة",
    grades: ["الصف السادس", "الصف السابع", "الصف الثامن", "الصف التاسع"],
  },
  {
    level: "المرحلة الثانوية",
    grades: [
      "الصف العاشر",
      "الصف الحادي عشر علمي",
      "الصف الحادي عشر أدبي",
      "الصف الثاني عشر علمي",
      "الصف الثاني عشر أدبي",
    ],
  },
];

const semesters = ["الفصل الأول", "الفصل الثاني"];

const Page = () => {
  const dispatch = useDispatch();
  const { selectedStage, selectedGrade, selectedSemester } = useSelector((state) => state.filters);

  const filteredCourses = PackagesCard.filter((course) => {
    return (
      (!selectedStage || course.level === selectedStage) &&
      (!selectedGrade || course.grade === selectedGrade) &&
      (!selectedSemester || course.Semester === selectedSemester)
    );
  });

  const allCourses = PackagesCard;

  return (
    <MainLayout>
      <section className="w-full md:mt-24  sm:mt-24 h-full bg-[#f3f3f3ec] py-6 px-4 md:py-12 md:px-8 lg:py-24 lg:px-16 text-[--background] font-[family-name:var(--font-Cairo-Medium)]">
        <div className="flex flex-col md:flex-row md:justify-center">
          <div className="w-full md:w-1/5 lg:w-1/3  flex flex-col  gap-4 py-6">
            {/* Filter for stage */}
            <div>
              <h3 className="font-bold mb-2">المرحلة:</h3>
              {stages.map((stage) => (
                <label key={stage.level} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="stage"
                    value={stage.level}
                    checked={selectedStage === stage.level}
                    onChange={(e) => dispatch(setStage(e.target.value))}
                  />
                  {stage.level}
                </label>
              ))}
            </div>
            <hr />

            {/* Filter for grade based on selected stage */}
            <div>
              <h3 className="font-bold mb-2">الصف:</h3>
              {selectedStage &&
                stages.find((stage) => stage.level === selectedStage)
                  ?.grades.map((grade) => (
                    <label key={grade} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="grade"
                        value={grade}
                        checked={selectedGrade === grade}
                        onChange={(e) => dispatch(setGrade(e.target.value))}
                      />
                      {grade}
                    </label>
                  ))}
            </div>
            <hr />

            {/* Filter for semester */}
            <div>
              <h3 className="font-bold mb-2">الفصل الدراسي:</h3>
              {semesters.map((semester) => (
                <label key={semester} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="semester"
                    value={semester}
                    checked={selectedSemester === semester}
                    onChange={(e) => dispatch(setSemester(e.target.value))}
                  />
                  {semester}
                </label>
              ))}
            </div>
            
            <hr />
            {/* Reset Filters Button */}
            <div>
              <h3 className="font-bold mb-2">عرض جميع الباقات</h3>
              <button
                onClick={() => dispatch(resetFilters())}
                className="bg-[--background] hover:bg-[--foreground] text-sm text-white py-2 px-3 rounded-md"
              >
                إعادة ضبط الفلاتر
              </button>
            </div>
          </div>
      <hr />
          {/* Display Courses Based on Selection */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 pt-6 md:pt-0">
            {filteredCourses.length > 0
              ? filteredCourses.map(({ id, name, about, salary,oldPrice, url }) => (
                  <CourseCard
                    key={id}
                    name={name}
                    about={about}
                    oldPrice={oldPrice}
                    salary={salary}
                    url={url}
                  />
                ))
              : <h3 className="text-center text-lg font-bold col-span-full">لا توجد باقات متوفرة حاليا.</h3>
            }
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Page;
