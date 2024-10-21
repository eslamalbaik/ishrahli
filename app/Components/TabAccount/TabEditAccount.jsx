import { useForm, FormProvider, Controller } from "react-hook-form";
import InputField from "../InputField";
import React, { useState } from "react";
const TabEditAccount = () => {
    const methods = useForm(); // Create methods for useForm
    const {
      control,
      register,
      handleSubmit,
      formState: { errors },
    } = methods;
    const styleInput =
    "h-[45px] w-full bg-[#7786f97a]   border border-gray-300 text-gray-900 text-base rounded-lg block  p-2.5 placeholder-gray-600";
  return (
    <div> {/* تعديل حسابك */}
    <h2 className="font-[900] text-[--background] text-xl mt-6 py-2">
      المعلومات الشخصية
    </h2>
    <FormProvider {...methods}>
      <form action="">
          <div className="flex justify-center items-center flex-col ">
        <div class="relative w-52 h-52 m-6 overflow-hidden  bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            class="absolute w-52 h-52 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
          </div>
          <div className="flex flex-col max-w-full sm:flex-row items-center gap-8  py-2">
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
            name="LastName"
            namelabel="الاسم الأخير"
            type="text"
            maxLength={25}
            pattern="^(?=.*[\u0600-\u06FF]|(?=.*[A-Za-z]))[A-Za-z\u0600-\u06FF\s]{3,40}$"
            styleInput={styleInput}
            messageError="الاسم الأخير يجب أن يتكون من 6 أحرف على الأقل ولا يحتوي على أرقام"
            register={register}
          />
        </div>
        <div className="flex flex-col max-w-full sm:flex-row items-center gap-8 py-2 ">
          <InputField
            name="email"
            namelabel="البريد الإلكتروني"
            type="email"
            register={register}
            maxLength={12}
            pattern="^(?!.*[A-Za-z])([4-69][0-9]{7,11})$"
            styleInput={` ${styleInput}`}
            messageError="يجب أن يتكون رقم الهاتف من 8 إلى 12 رقمًا ويكون بمقدمة احدى ارقام الكويت."
          />
          <InputField
            name="phoneNumber"
            namelabel="رقم الهاتف"
            type="tel"
            register={register}
            maxLength={12}
            pattern="^(?!.*[A-Za-z])([4-69][0-9]{7,11})$"
            styleInput={`text-end ${styleInput}`}
            messageError="يجب أن يتكون رقم الهاتف من 8 إلى 12 رقمًا ويكون بمقدمة احدى ارقام الكويت."
          />
        </div>
        </div>
 
      </form>
    </FormProvider></div>
  )
}

export default TabEditAccount