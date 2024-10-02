"use client";
import React, { useState } from "react";
import Logo from "../Components/Logo";
import InputFiled from "../Components/InputFiled";
import Breadcrumbs from "../Components/Breadcrumbs";

const Page = () => {
  const [data, setData] = useState({
    email: "",
  });
  const links = [
    { href: '/', label: 'الصفحة الرئيسية' },
    { href: '/login', label: 'تسجيل الدخول' },
    { href: '/lostpassword', label: 'نسيت كلمة السر' }
  ]
  const [gender, setGender] = useState(""); // State for gender

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const { ...allData } = data;
  const canSubmit = [...Object.values(allData)].every(Boolean);
  console.log("Can Submit:", canSubmit); // Add this to debug

  const styleInput =
    "h-[45px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 placeholder-gray-300 valid:[&:not(:placeholder-shown)]:border-green-500 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 [&:not(:placeholder-shown):not(:focus):invalid~span]:block";

  return (
    <section className="   py-12 px-24 font-[family-name:var(--font-Cairo-Medium)] bg-[#f3f3f3ec] ">
      <Breadcrumbs links={links}/>
      <div className="flex flex-col items-center py-10 sm:justify-center ">
        <Logo classNameAdd="w-[300px] mr-44 mb-0 pb-0" />
        <div className="px-6   py-6 bg-white shadow-md rounded-md sm:rounded-lg ">
        <h4 className="text-start w-[520px] pb-12 text-lg  text-[--background] ">
            الرجاء إدخال عنوان البريد الإلكتروني. سوف تتلقى رسالة بريد إلكتروني مع تعليمات حول كيفية إعادة تعيين كلمة المرور الخاصة بك.
            </h4>
          <form action="" onSubmit={handleRegistration} className="group">
            <InputFiled 
            name="البريد الإلكتروني" 
            namelabel="email"
            type="email"
            maxLength={25} 
             pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
            styleInput={styleInput}
            onChange={(e) => {setData({...data,email: e.target.value,});}}
            messageError="يرجى إدخال عنوان بريد إلكتروني صالح."
            />
              <button
                type="submit"
                disabled={!canSubmit}
                className="w-full text-white bg-[--foreground] hover:bg-purple-600 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mt-6 group-invalid:bg-gradient-to-br  "
                >
                طلب الرابط للإستعادة
              </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
