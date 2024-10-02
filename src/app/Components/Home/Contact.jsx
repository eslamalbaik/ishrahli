import React from 'react';
import { FaMapMarkerAltMini, FaMessageMini, FaPhoneMini } from '../../lib/@react-icons';

const Contact = () => {
  return (
    <div className="flex justify-center items-center font-[family-name:var(--font-Cairo-Medium)] bg-[#F69E28] py-12 px-4">
      <div className="max-w-7xl  w-full text-center">
        <h6 className="text-lg font-bold text-white mb-4">تواصل معنا</h6>
        <h1 className="text-3xl md:text-4xl font-semibold  py-2 text-[#00052E] mb-4">
          لا تتردد في التواصل معنا في أي وقت
        </h1>

        {/* Grid Layout */}
        <div className="flex justify-center items-center ">
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8 my-6 text-white">
        <div className="flex flex-col  w-[290px] space-y-4 items-center bg-white rounded-lg py-6 hover:transition-transform hover:translate-y-2 shadow-sm shadow-[#00052E]">
          <span className="bg-[#00052E] bg-opacity-15  rounded-full flex justify-center items-center w-16 h-16 text-center">  <FaPhoneMini className="text-xl text-[#00052E]" /></span>
            <p className="text-2xl font-bold text-[#00052E]">+965 66916432</p>
          </div>

          <div className="flex flex-col space-y-4 items-center bg-white rounded-lg py-6 hover:transition-transform hover:translate-y-2 shadow-sm shadow-[#00052E]">
          <span className="bg-[#00052E] bg-opacity-15  rounded-full flex justify-center items-center w-16 h-16 text-center">
            <FaMessageMini className="text-xl  text-[#00052E]" /></span>
            <p className="text-xl text-[#00052E] font-bold">info.ishrahli@gmail.com</p>
          </div>

          <div className="flex flex-col space-y-4 items-center bg-white rounded-lg py-6 hover:transition-transform hover:translate-y-2 shadow-sm shadow-[#00052E]">
            <span className="bg-[#00052E] bg-opacity-15  rounded-full flex justify-center items-center w-16 h-16 text-center">
              <FaMapMarkerAltMini className="text-2xl text-[#00052E]" />
              </span>  
            <p className="text-xl font-bold text-[#00052E]">Al-Kuwait</p>
          </div>
        </div>
      </div>
    </div></div>
  );
};

export default Contact;
