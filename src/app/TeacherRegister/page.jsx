"use client"; // Add this to mark the component as a Client Component
import React, { useState } from "react";
import Link from "next/link";
import CountrySelector from "../Components/CountrySelector";

const Page = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    nameMaterial: "",
    experience: "",
    country: "",
  });
  const handleRegistration = (e) => {
    e.preventDefault();

    console.log(data);
  };

  const { ...allData } = data;
  const [errors, setErrors] = useState({
    cvError: "",
  });
  const handleCVChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      ![
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type)
    ) {
      setErrors({
        ...errors,
        cvError: "يرجى رفع ملف بصيغة PDF أو DOC أو DOCX فقط.",
      });
    } else {
      setData({
        ...data,
        cv: file,
      });
      setErrors({
        ...errors,
        cvError: "",
      });
    }
  };
  // Disable submit button until all fields are filled in
  const canSubmit = [...Object.values(allData)].every(Boolean);
  console.log("Can Submit:", canSubmit); // Add this to debug

  const styleInput="h-[45px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 placeholder-gray-300 valid:[&:not(:placeholder-shown)]:border-green-500 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 [&:not(:placeholder-shown):not(:focus):invalid~span]:block"

  return (
    <div className="pt-32 py-24 px-24 font-[family-name:var(--font-Cairo-Medium)] bg-[#f3f3f3ec] ">
      <div>
        <Link
          href="/"
          className="hover:text-[--background] hover:border-b-2 hover:border-[--background]"
        >
          الصفحة الرئيسية
        </Link>{" "}
        /<Link href="/TeacherRegister">انضم كمعلم</Link>
      </div>
      <div className="flex  flex-col items-center py-10 sm:justify-center ">
        <h1 className="text-center p-12 text-4xl font-bold text-[--background] font-[family-name:var(--font-Cairo-Bold)]">
          {" "}
          انضم إلينا كمعلم
        </h1>
        <div className="px-6 py-6 bg-white shadow-md rounded-md sm:rounded-lg ">
          <form action="" onSubmit={handleRegistration} className="group">
            <div className="flex justify-center items-center gap-3">
              <div className="w-[500px]">
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  الاسم كاملا
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="الاسم كاملا"
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
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  البريد الإلكتروني
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="email"
                    name="email"
                    placeholder="البريد الإلكتروني"
                    className={styleInput}
                    autoComplete="off"
                    required
                    pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={(e) => {
                      setData({
                        ...data,
                        email: e.target.value,
                      });
                    }}
                  />
                  <span className="mt-1 hidden text-sm text-red-400">
                    Please enter a valid email address.
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
                      placeholder=" رقم الهاتف"
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
                <CountrySelector
                  country={data.country}
                  setData={setData}
                  data={data}
                />
              </div>
            </div>

            <div className="flex justify-center items-center gap-3 mt-4 mb-4">
              <div className="w-[500px]">
                <label
                  htmlFor="nameMaterial"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  سنوات الخبرة
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="number"
                    name="experience"
                    placeholder="سنوات الخبرة"
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
                  htmlFor="nameMaterial"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  المادة الدارسية
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="nameMaterial"
                    placeholder="المادة الدارسية"
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
            <div className="flex justify-center items-center gap-3">
              <div className="w-[500px]">
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  المرحلة الدراسية
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="المرحلة الدراسية"
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
              <div className="w-[500px] ">
                {/* CV Upload */}
                <div className="">
                  <label
                    htmlFor="cv"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    السيرة الذاتية (CV)
                  </label>
                  <input
                    type="file"
                    id="cv"
                    accept=".pdf,.doc,.docx"
                    className={`${styleInput} valid:[&:not(:placeholder-shown)]:border-gray-300 `}
                    onChange={handleCVChange}
                  />
                  {errors.cvError && (
                    <span className="text-sm text-red-400 mt-2">
                      {errors.cvError}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <button
                type="submit"
                // disabled={!canSubmit}
                className="w-full text-white bg-[--foreground] hover:bg-purple-600 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mt-2 disabled:bg-gradient-to-br disabled:from-gray-100 disabled:to-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed group-invalid:bg-gradient-to-br group-invalid:from-gray-100 group-invalid:to-gray-300 group-invalid:text-gray-400 group-invalid:pointer-events-none group-invalid:opacity-70"
              >
                انضم كمعلم
              </button>
            </div>
          </form>
 
        </div>
      </div>
    </div>
  );
};

export default Page;
