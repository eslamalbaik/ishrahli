"use client"; // Add this to mark the component as a Client Component
import Link from "next/link";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import React, { Suspense, lazy, useState } from "react";
import Loading from "../Components/Loading";
import { toast } from "react-hot-toast";
import SelectField from "../Components/SelectField";
const InputField = lazy(() => import("../Components/InputField"));
const Logo = lazy(() => import("../Components/Logo"));
const Breadcrumbs = lazy(() => import("../Components/Breadcrumbs"));
const PasswordInput = lazy(() => import("./PasswordInput"));
const ConfirmPasswordInput = lazy(() => import("./ConfirmPasswordInput"));
const MainLayout = lazy(() => import("../MainLayout/MainLayout"));
import countries from '../data/countries.json'; 
import cities from "../data/cities.json";
const Page = () => {
  const methods = useForm(); // Create methods for useForm
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const [password, setPassword] = useState("");
  const [showAdditionalFields, setShowAdditionalFields] = useState(false); // State for additional fields

  const grades = [
    "الصف الأول",
    "الصف الثاني",
    "الصف الثالث",
    "الصف الرابع",
    "الصف الخامس",
    "الصف السادس",
    "الصف السابع",
    "الصف الثامن",
    "الصف التاسع",
    "الصف العاشر",
  ];

  const linksRegister = [
    { href: "/", label: "الصفحة الرئيسية" },
    { href: "/login", label: "إنشاء حساب" },
  ];
  const router = useRouter();
  const onSubmit = (data) => {
    fetch("http://localhost:3001/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`فشلت مع الحالة: ${res.status}`);
        }
        return res.json();
      })
      .then(() => {
        toast.success("تم إنشاء الحساب بنجاح", {
          duration: 4000,
          position: "top-left",
          style: {
            backgroundColor: "#4CAF50",
            color: "#fff",
          },
        });
        router.push("/login");
      })
      .catch((err) => {
        toast.error(" خطأ " + err.message, {
          duration: 4000,
          position: "top-left",
          style: {
            backgroundColor: "red",
            color: "#fff",
          },
        });
      });
  };

  const styleInput =
    "h-[45px] w-full bg-[#7786f97a]   border border-gray-300 text-gray-900 text-base rounded-lg block  p-2.5 placeholder-gray-600";
  return (
  <Suspense fallback={<Loading />}>
    <MainLayout showHeader={false} showFooter={false}>
      <section className="w-full py-6 px-4  md:px-12 lg:px-24 font-[family-name:var(--font-Cairo-Medium)] bg-[#f3f3f3ec]">
        <Breadcrumbs links={linksRegister} />
        <div className="flex flex-col items-center py-10 sm:justify-center">
          <Logo classNameAdd="w-[550px]  mb-0 pb-0" />
          <div className="px-4 sm:px-6 py-6 bg-white shadow-md rounded-md sm:rounded-lg w-full max-w-[1000px]">
            <div className="flex flex-col sm:flex-row justify-between">
              <h4 className="text-start pb-6 sm:pb-12 text-xl sm:text-2xl text-[--background]">
                انشئ حساب
              </h4>
              <h4 className="text-start pb-6 sm:pb-12 text-md sm:text-lg text-[--background]">
                أو
                <Link href="/login" className="hover:text-[--foreground]">
                  &nbsp; تسجيل دخول &nbsp;
                </Link>
              </h4>
            </div>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
                {!showAdditionalFields ? (
                  <>
                    <div className=" flex flex-col sm:flex-row items-center gap-2 ">
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
                    <div className="flex flex-col max-w-full sm:flex-row items-center gap-2 ">
                      <SelectField
                        name="country"
                        control={control}
                        defaultValue="الكويت" // Default value is the country name
                        label="اختر الدولة"
                        options={countries} // Array of country objects
                        placeholder="اختر دولة..."
                        valueKey="name" 
                        labelKey="name" 
                        styleInput={`${styleInput} p-0 m-0 text-sm`} // Custom styles
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
                    <div className="flex flex-col sm:flex-row items-center gap-2 ">
                      <div className="flex flex-col items-start ">
                        <PasswordInput
                          register={register}
                          setPassword={setPassword}
                          styleInput={styleInput}
                        />
                        {errors.password && (
                          <span className="text-sm text-red-400">
                            {errors.password.message}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col items-start ">
                        <ConfirmPasswordInput
                          password={password}
                          register={register}
                          styleInput={styleInput}
                        />
                        {errors.confirmPassword && (
                          <span className=" text-sm text-red-400">
                            {errors.confirmPassword.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-2 ">
                      <SelectField
                        name="grade"
                        control={control}
                        defaultValue=""
                        label="اختر الصف الدراسي"
                        options={grades}
                        placeholder="اختر الصف..."
                        styleInput={`${styleInput} text-sm`}
                      />
                      <div>
                        <label className="block text-base font-medium text-gray-700">
                          الجنس
                        </label>
                        <div className="mt-2 space-y-2">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              value="ذكر"
                              {...register("gender", { required: true })}
                              className="form-radio text-indigo-600"
                            />
                            <span className="ml-2">ذكر</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              value="أنثى"
                              {...register("gender", { required: true })}
                              className="form-radio text-indigo-600"
                            />
                            <span className="ml-2">أنثى</span>
                          </label>
                        </div>
                        {errors.gender && (
                          <p className="text-red-600 text-sm">
                            يرجى اختيار الجنس
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleSubmit((data) => {
                        if (Object.keys(errors).length === 0) {
                          setShowAdditionalFields(true);
                        } else {
                          console.log("يوجد أخطاء في النموذج");
                        }
                      })}
                      className="w-full text-white  bg-[--foreground]  hover:bg-blue-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mt-2"
                    >
                      التالي
                    </button>
                  </>
                ) : (
                  <div>
                    <div className="flex flex-col sm:flex-row justify-start items-center gap-2">
                      <SelectField
                        name="city"
                        control={control}
                        styleInput={`${styleInput} p-0 pr-2`}
                        defaultValue=""
                        label="اختر المدينة"
                        options={cities.cities} 
                        placeholder="اختر مدينة..."
                        valueKey="id" 
                        labelKey="name" 
                      />
                      <InputField
                        name="piece"
                        namelabel="القطعة"
                        type="text"
                        maxLength={12}
                        styleInput={styleInput}
                        messageError=""
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-start items-center gap-2">
                      <InputField
                        name="street"
                        namelabel="الشارع"
                        type="text"
                        maxLength={12}
                        styleInput={styleInput}
                        messageError=""
                      />
                      <InputField
                        name="avenue"
                        namelabel="الجادة"
                        nameplaceholder="الجادة"
                        type="text"
                        maxLength={12}
                        styleInput={styleInput}
                        messageError=""
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-start items-center gap-2">
                      <InputField
                        name="street"
                        namelabel="المنزل"
                        type="text"
                        maxLength={12}
                        styleInput={styleInput}
                        messageError=""
                      />
                    </div>
                    <div className="flex items-center py-4 mb-4">
                      <label
                        htmlFor="terms"
                        className="ml-2 text-sm text-gray-900"
                      >
                        بتسجيلك أنت توافق على
                        <Link href="/Privacy" className="text-[--foreground]">
                          &nbsp; الشروط والأحكام
                        </Link>
                      </label>
                    </div>
                    <div className="flex items-center mt-4">
                      <button
                        type="submit"
                        className="w-full text-white bg-[--foreground] hover:bg-purple-600 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mt-2"
                      >
                        إنشئ حساب
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowAdditionalFields(false)}
                      className="w-full text-white bg-gray-500 hover:bg-gray-600 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 text-center mt-2"
                    >
                      رجوع
                    </button>
                  </div>
                )}
              </form>
            </FormProvider>
          </div>
        </div>
      </section>
    </MainLayout>
  </Suspense>
  );
};
export default Page;