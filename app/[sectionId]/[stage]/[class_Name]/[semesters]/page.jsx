"use client";
import React from "react";
import { useParams } from "next/navigation";
import data from "../../../../data/stages.json";
import MainLayout from "../../../../MainLayout/MainLayout";
import Image from "next/image";

const Page = () => {
  const { sectionId, stage, class_Name, semesters } = useParams();

  // Decode the parameters
  const decodedStage = decodeURIComponent(stage);
  const decodedClassName = decodeURIComponent(class_Name);
  const semesterss = decodeURIComponent(semesters);

  // Access the stages data based on sectionId
  // const selectedStage = data.stages[sectionId];
  // let classData;
  // if (selectedStage && selectedStage.classes) {
  //   const classes = selectedStage.classes;
  //   console.log('Available classes:', Object.keys(classes)); // Log available classes for debugging

 // Check if decodedClassName is a valid key
  //   if (classes[decodedClassName]) {
  //     classData = classes[decodedClassName];
  //   } else {
  //     console.error(`Class "${decodedClassName}" not found in stage "${sectionId}"`);
  //   }
  // } else {
  //   console.error(`Stage with sectionId "${sectionId}" not found`);
  // }
  return (
    <MainLayout>
      <div className="p-24">
        <br />
        <br />
        <p>
          This is id: {sectionId}
          <br />
          This is stage: {decodedStage}
          <br />
          This is Material: {semesterss}
          <br />
          This is Class Name : {decodedClassName}
        </p>
      </div>
      <div>
         <Image
         src="/images/courses/E-01.png.webp"
         width={220}
         height={120}
         alt="the image material"
          />
          {/* <h1>بطاقة  name cards : {semesterss.Material}</h1> */}
      </div>
      <br />
      <br />
      <br />
    </MainLayout>
  );
};

export default Page;
