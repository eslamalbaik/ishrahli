"use client"; // Add this to mark the component as a Client Component
import React, { useState } from "react";
import Link from "next/link";
import InputFiled from "../Components/InputFiled";
import Logo from "../Components/Logo";
import Breadcrumbs from "../Components/Breadcrumbs";

const Page = () => {
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    phoneNumber: "",
    AgainPassword: "",
    password: "",
  });
  const [gender, setGender] = useState(""); // State for gender

  const handleRegistration = (e) => {
    e.preventDefault();

    console.log(data);
  };

  const { ...allData } = data;
  const [errors, setErrors] = useState({
    cvError: "",
  });

  const canSubmit = [...Object.values(allData)].every(Boolean);
  console.log("Can Submit:", canSubmit); // Add this to debug
  const linksRegister = [
    { href: "/", label: "الصفحة الرئيسية" },
    { href: "/login", label: "إنشاء حساب" },
  ];
  const styleInput =
    "h-[45px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 placeholder-gray-300 valid:[&:not(:placeholder-shown)]:border-green-500 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 [&:not(:placeholder-shown):not(:focus):invalid~span]:block";

  return (
    <section className=" py-12 px-24 font-[family-name:var(--font-Cairo-Medium)] bg-[#f3f3f3ec] ">
      <Breadcrumbs links={linksRegister} />
      <div className="flex  flex-col items-center py-10 sm:justify-center ">
        <Logo classNameAdd="w-[300px] mr-44 mb-0 pb-0" />
        <div className="px-6 py-6 bg-white shadow-md rounded-md sm:rounded-lg ">
          <div className="flex justify-between">
            <h4 className="text-start pb-12 text-2xl text-[--background]">
              انشئ حساب
            </h4>
            <h4 className="text-start pb-12  text-lg  text-[--background] ">
              أو{" "}
              <Link href="/login" className="hover:text-[--foreground]">
                {" "}
                تسجيل دخول{" "}
              </Link>
            </h4>
          </div>
          <form action="" onSubmit={handleRegistration} className="group">
            <div className="flex justify-center items-center gap-3">
              <InputFiled
                name="الاسم الأول"
                namelabel="FirstName"
                type="text"
                maxLength={25}
                pattern="^(?!.*[0-9])[A-Za-z\s]{6,40}$"
                styleInput={styleInput}
                onChange={(e) => {
                  setData({ ...data, FirstName: e.target.value });
                }}
                messageError="الاسم الأول يجب أن يتكون من 6 أحرف على الأقل ولا يحتوي على أرقام"
              />

              <InputFiled
                name="الاسم الأخير"
                namelabel="LastName"
                type="text"
                maxLength={25}
                pattern="^(?!.*[0-9])[A-Za-z\s]{6,40}$"
                styleInput={styleInput}
                onChange={(e) => {
                  setData({ ...data, LastName: e.target.value });
                }}
                messageError="الاسم الأخير يجب أن يتكون من 6 أحرف على الأقل ولا يحتوي على أرقام"
              />
            </div>
            <div className="flex justify-center items-center gap-3 mt-4 ">
              <InputFiled
                name="رقم الهاتف"
                namelabel="phoneNumber"
                classNameSpan="text-gray-900 dark:text-white"
                otherlabel="+965"
                type="tel"
                maxLength={8}
                pattern="^(?!.*[A-Za-z])([0-9]{8,12})$"
                styleInput={styleInput}
                onChange={(e) => {
                  setData({ ...data, phoneNumber: e.target.value });
                }}
                messageError="يجب أن يتكون رقم الهاتف من 8 إلى 12 رقمًا ولا يحتوي على أحرف."
              />

              <div className="w-[500px]">
                <div className="flex flex-col mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    الجنس
                  </label>
                  <div className="flex items-center gap-12">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="ذكر"
                        checked={gender === "ذكر"} // Check if gender is ذكر
                        onChange={() => setGender("ذكر")} // Update gender state
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-base text-gray-900">ذكر</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="أنثى"
                        checked={gender === "أنثى"} // Check if gender is أنثى
                        onChange={() => setGender("أنثى")} // Update gender state
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-base text-gray-900">أنثى</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-3 mt-4 mb-4">
              <InputFiled
                name="كلمة السر"
                namelabel="password"
                type="password"
                maxLength={9}
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                styleInput={styleInput}
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
                messageError="يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل،  . ."
              />

              <InputFiled
                name="تأكيد كلمة السر"
                namelabel="AgainPassword"
                type="password"
                maxLength={9}
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                styleInput={styleInput}
                onChange={(e) => {
                  setData({ ...data, AgainPassword: e.target.value });
                }}
                messageError="يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل،  . ."
              />
            </div>
            <div className="flex items-center py-4 mb-4">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-[--foreground]  border-[--foreground] rounded focus:[--foreground]  accent-current"
                required // Make sure user checks the box
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-900">
                أنا أوافق على الشروط والأحكام و سياسة الخصوصية.
              </label>
            </div>
            <div className="flex items-center mt-4">
              <button
                type="submit"
                disabled={!canSubmit}
                className="w-full text-white bg-[--foreground] hover:bg-purple-600 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mt-2  group-invalid:bg-gradient-to-br  "
              >
                إنشئ حساب
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
