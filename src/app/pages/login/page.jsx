"use client"; // Add this to mark the component as a Client Component
import React, { useState } from "react";
import Link from "next/link";
import CountrySelector from "../../Components/CountrySelector";

const Page = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    nameMaterial: "",
    experience: "",
    country: "",
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

  const styleInput =
    "h-[45px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 placeholder-gray-300 valid:[&:not(:placeholder-shown)]:border-green-500 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 [&:not(:placeholder-shown):not(:focus):invalid~span]:block";

  return (
    <section className=" py-12 px-24 font-[family-name:var(--font-Cairo-Medium)] bg-[#f3f3f3ec] ">
      <div>
        <Link
          href="/"
          className="hover:text-[--background] hover:border-b-2 hover:border-[--background]"
        >
          الصفحة الرئيسية
        </Link>
        /<Link href="/TeacherRegister">إنشاء حساب </Link>
      </div>
      <div className="flex  flex-col items-center py-10 sm:justify-center ">
        <h1 className="text-center p-12 text-4xl font-bold text-[--background] font-[family-name:var(--font-Cairo-Bold)]">
          إنشاء حساب الطالب
        </h1>
        <div className="px-6 py-6 bg-white shadow-md rounded-md sm:rounded-lg ">
          <form action="" onSubmit={handleRegistration} className="group">
            <div className="flex justify-center items-center gap-3">
              <div className="w-[500px]">
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  الاسم الأول
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="الاسم الأول"
                    maxLength={25} // Set maximum length to 40 characters
                    className={styleInput}
                    pattern="^(?!.*[0-9])[A-Za-z\s]{6,40}$" // Pattern for no numbers, minimum 6 characters, maximum 40 characters
                    required
                    onChange={(e) => {
                      setData({
                        ...data,
                        fullName: e.target.value,
                      });
                    }}
                  />
                  <span className="mt-1 hidden text-sm text-red-400">
                    الاسم الكامل يجب أن يتكون من 6 أحرف على الأقل ولا يحتوي على
                    أرقام
                  </span>
                </div>
              </div>
              <div className="w-[500px]">
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  الاسم الأخير
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="الاسم الأخير"
                    maxLength={25} // Set maximum length to 40 characters
                    className={styleInput}
                    pattern="^(?!.*[0-9])[A-Za-z\s]{6,40}$" // Pattern for no numbers, minimum 6 characters, maximum 40 characters
                    required
                    onChange={(e) => {
                      setData({
                        ...data,
                        fullName: e.target.value,
                      });
                    }}
                  />
                  <span className="mt-1 hidden text-sm text-red-400">
                    الاسم الكامل يجب أن يتكون من 6 أحرف على الأقل ولا يحتوي على
                    أرقام
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3 mt-4 ">
              <div className="w-[500px] ">
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  رقم الهاتف
                </label>
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-2 w-[500px] ">
                    <span className="text-gray-900 dark:text-white ">+965</span>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="   رقم الهاتف بدون مقدمة الدولة"
                      maxLength={9} // Set maximum length to 25 characters
                      className={`${styleInput} w-[450px]`}
                      pattern="^(?!.*[A-Za-z])([0-9]{8,12})$" // Pattern for 8-12 digits (Kuwaiti phone numbers)
                      required
                      onChange={(e) => {
                        setData({
                          ...data,
                          phoneNumber: e.target.value, // Update to set the phone number
                        });
                      }}
                    />
                  </div>
                  <span className="mt-1 hidden text-sm text-red-400">
                    يجب أن يتكون رقم الهاتف من 8 إلى 12 رقمًا ولا يحتوي على أحرف
                  </span>
                </div>
              </div>

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
              <div className="w-[500px]">
                <label
                  htmlFor="nameMaterial"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  كلمة السر
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="password"
                    name="password"
                    placeholder="كلمة السر"
                    className={styleInput}
                    autoComplete="off"
                    required
                    pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={(e) => {
                      setData({
                        ...data,
                        nameMaterial: e.target.value,
                      });
                    }}
                  />
                  <span className="mt-1 hidden text-sm text-red-400">
                    Please enter a valid email address.{" "}
                  </span>
                </div>
              </div>

              <div className="w-[500px]">
                <label
                  htmlFor="passwordagain"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  تأكيد كلمة السر
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="password"
                    name="passwordagain"
                    placeholder="تأكيد كلمة السر"
                    className={styleInput}
                    autoComplete="off"
                    required
                    pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={(e) => {
                      setData({
                        ...data,
                        nameMaterial: e.target.value,
                      });
                    }}
                  />
                  <span className="mt-1 hidden text-sm text-red-400">
                    Please enter a valid email address.{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center py-4 mb-4">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                required // Make sure user checks the box
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-900">
                أوافق على جميع شروط واحكام منصة اشرحلي
              </label>
            </div>
            <div className="flex items-center mt-4">
              <button
                type="submit"
                disabled={!canSubmit}
                className="w-full text-white bg-[--foreground] hover:bg-purple-600 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mt-2  group-invalid:bg-gradient-to-br  "
              >
                إرسال
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
