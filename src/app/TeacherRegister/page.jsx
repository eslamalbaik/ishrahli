"use client";
import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const CountrySelector = dynamic(() => import("../Components/CitySelector"));
const InputField = dynamic(() => import("../Components/InputField"));
import { useForm, FormProvider, Controller } from "react-hook-form";

const Page = () => {
  const methods = useForm(); // Create methods for useForm
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const handleRegistration = (e) => {
    e.preventDefault();

    console.log(data);
  };
  const [country, setCountry] = useState(""); // State for country selection
  const styleInput =
    "h-[45px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 placeholder-gray-300 valid:[&:not(:placeholder-shown)]:border-green-500 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 [&:not(:placeholder-shown):not(:focus):invalid~span]:block";

  return (
    <div className="pt-32 py-24 px-24 font-[family-name:var(--font-Cairo-Medium)] bg-[#f3f3f3ec] ">
      <div>
        <Link
          href="/"
          className="hover:text-[--background] hover:border-b-2 hover:border-[--background]"
        >
          الصفحة الرئيسية
        </Link>
        /<Link href="/TeacherRegister">انضم كمعلم</Link>
      </div>
      <div className="flex  flex-col items-center py-10 sm:justify-center ">
        <h1 className="text-center p-12 text-4xl font-bold text-[--background] font-[family-name:var(--font-Cairo-Bold)]">
          انضم إلينا كمعلم
        </h1>
        <div className="px-6 py-6 bg-white shadow-md rounded-md sm:rounded-lg ">
          <FormProvider {...methods}>
            <form action="" onSubmit={handleRegistration} className="group">
              <div className="flex justify-center items-center gap-3">
                <InputField
                  name="FirstName"
                  namelabel="الاسم الأول"
                  type="text"
                  maxLength={25}
                  pattern="^(?=.*[\u0600-\u06FF]|(?=.*[A-Za-z]))[A-Za-z\u0600-\u06FF\s]{3,40}$"
                  styleInput={styleInput}
                  messageError="الاسم الأول يجب أن يتكون من 6 أحرف على الأقل ولا يحتوي على أرقام"
                />
                <InputField
                  name="email"
                  namelabel="البريد الإلكتروني"
                  type="email"
                  maxLength={25}
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
                  styleInput={styleInput}
                  messageError="يرجى إدخال عنوان بريد إلكتروني صالح."
                />
              </div>
              <div className="flex justify-center items-center gap-3 mt-4 ">
                <div className="w-[500px]">
                  <CountrySelector
                    control={control} // Ensure to pass control if needed
                    country={country}
                    setCountry={setCountry} // Pass setter function
                  />
                </div>
                <InputField
                  name="رقم الهاتف"
                  nameplaceholder="رقم الهاتف بدون مقدمة الدولة"
                  namelabel="phoneNumber"
                  type="tel"
                  maxLength={8}
                  pattern="^(?!.*[A-Za-z])([0-9]{8,12})$"
                  styleInput={styleInput}
                  onChange={(e) => {
                    setData({ ...data, phoneNumber: e.target.value });
                  }}
                  messageError="يجب أن يتكون رقم الهاتف من 8 إلى 12 رقمًا ولا يحتوي على أحرف."
                />
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
                      required
                      pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
                    />
                    <span className="mt-1 hidden text-sm text-red-400">
                      الاسم الكامل يجب أن يتكون من 6 أحرف على الأقل ولا يحتوي
                      على أرقام
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
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default Page;
