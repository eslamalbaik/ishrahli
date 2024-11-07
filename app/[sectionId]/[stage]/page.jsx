"use client";
import React from "react";
import { useParams } from "next/navigation";
import AccordionMater from "../../components/AccordionMater";
import data from "../../data/stages.json";
import MainLayout from "../../MainLayout/MainLayout";
import Image from "next/image";
import Link from "next/link"; // استيراد Link من next/link

const StagePage = () => {
  const { sectionId, stage } = useParams();
  const decodedStage = decodeURIComponent(stage);
  console.log("Decoded Stage:", decodedStage);

  const selectedStages = data.stages[sectionId];
  const selectedStage = selectedStages?.find((s) => s.name === decodedStage);

  if (!selectedStage) return <div>المرحلة غير موجودة</div>;

  return (
    <MainLayout>
      <div className="mt-24">
        <Image
          src="/images/desktop-header.png"
          alt="the image header"
          className="w-full"
          width={1000}
          height={400}
        />
        <div className="p-24">
          {Object.entries(selectedStage.classes).map(
            ([class_Name, classData]) => (
              <div key={class_Name}>
                <AccordionMater
                  name_material={class_Name}
                  first_semester={`/${sectionId}/${stage}/${class_Name}/${classData.semesters[0].name}`}
                  second_semester={`/${sectionId}/${stage}/${class_Name}/${classData.semesters[1].name}`}
                />
              </div>
            )
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default StagePage;
