"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../Components/Logo";
import Breadcrumbs from "../Components/Breadcrumbs";
import InputFiled from "../Components/InputFiled";

const Page = () => {
  const [data, setData] = useState({
    phoneNumber: "",
    password: "",
  });
  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const { ...allData } = data;
  const canSubmit = [...Object.values(allData)].every(Boolean);
  console.log("Can Submit:", canSubmit); // Add this to debug

  const styleInput =
    "h-[45px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 placeholder-gray-300 valid:[&:not(:placeholder-shown)]:border-green-500 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 [&:not(:placeholder-shown):not(:focus):invalid~span]:block";
  const linksLogin = [
      { href: '/', label: 'الصفحة الرئيسية'  },
      { href: '/login', label: 'تسجيل الدخول' },
    ]
  return (
    <section className=" py-12 px-24 font-[family-name:var(--font-Cairo-Medium)] bg-[#f3f3f3ec] ">
      <Breadcrumbs links={linksLogin}/>
      <div className="flex  flex-col items-center py-10 sm:justify-center ">
        <Logo classNameAdd="w-[300px] mr-44 mb-0 pb-0" />
        <div className="px-6 py-6 bg-white shadow-md rounded-md sm:rounded-lg ">
          <div className="flex justify-between">
            <h4 className="text-start pb-12 text-2xl text-[--background]">
              تسجيل الدخول
            </h4>
            <h4 className="text-start pb-12  text-lg  text-[--background] ">
              <Link href="/register" className="hover:text-[--foreground]">
                أنشئ حساب
              </Link>
            </h4>
          </div>
          <form action="" onSubmit={handleRegistration} className="group">
            <InputFiled 
            name="رقم الهاتف" 
            namelabel="phoneNumber"
            classNameSpan="text-gray-900 dark:text-white"
            otherlabel="+965"
            type="tel"
            maxLength={8} 
            pattern="^(?!.*[A-Za-z])([0-9]{8,12})$"
            styleInput={styleInput}
            onChange={(e) => {setData({...data,phoneNumber: e.target.value,});}}
            messageError="يجب أن يتكون رقم الهاتف من 8 إلى 12 رقمًا ولا يحتوي على أحرف."
            />
            <InputFiled 
            name="كلمة السر" 
            namelabel="password"
            type="password"
            maxLength={9} 
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            styleInput={styleInput}
            onChange={(e) => {setData({...data,password: e.target.value,});}}
            messageError="يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل،  . ."
            />
            <div className="flex justify-between items-center">
              <div className="flex items-center py-4 mb-4">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 text-[--foreground]  border-[--foreground] rounded focus:[--foreground]  accent-current"
                  required
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-900">
                  تذكرني
                </label>
              </div>
              <Link href="lostpassword" className="hover:text-[--foreground]">نسيت كلمة السر ؟</Link>
            </div>
            <div className="flex items-center mt-4">
              <button
                type="submit"
                disabled={!canSubmit}
                className="w-full text-white bg-[--foreground] hover:bg-purple-600 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mt-2  group-invalid:bg-gradient-to-br  "
              >
                دخول
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
