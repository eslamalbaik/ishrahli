import React from 'react'
import { BiSolidBrainMini, FaBusinessTimeMini, TbCertificateMini,PiStudentBoldMini } from '../lib/@react-icons'

const Features = () => {
  return (
    <div className="bg-[#1F1B4A] font-[family-name:var(--font-Cairo-Medium)]  text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex lg:w-[290px] h-[160px] items-center  text-white p-6 ">
            <BiSolidBrainMini size={50} className="text-[#F69A1F] ml-4" />
            <h3 className="text-xl md:text-[19px] font-semibold text-center">
              طرق شرح بسيطة <br /> تناسب جميع المراحل
            </h3>
          </div>

          <div className="flex w-[290px] h-[160px] items-center  text-white p-6 ">
            <TbCertificateMini size={80} className="text-[#F69A1F] ml-4" />
            <h3 className="text-xl md:text-[19px] font-semibold  text-center">
              إختبارات حديثة متنوعة والتصحيح الكتروني
            </h3>
          </div>

          <div className="flex w-[290px] h-[160px] items-center  text-white p-6 ">
            <FaBusinessTimeMini size={70} className="text-[#F69A1F] ml-4" />
            <h3 className="text-xl md:text-[19px] font-semibold  text-center">
              إدارة وتنظيم الوقت والمجموعات الدراسية
            </h3>
          </div>

          <div className="flex w-[290px] h-[160px] items-center  text-white p-6 ">
            <PiStudentBoldMini size={60} className="text-[#F69A1F] ml-4" />
            <h3 className="text-xl md:text-[19px] font-semibold text-center">
              تواصل مباشر بين <br /> الطالب والمعلم
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features