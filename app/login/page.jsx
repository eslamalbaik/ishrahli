"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../Components/Logo";
import Breadcrumbs from "../Components/Breadcrumbs";
import InputField from "../Components/InputField";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import SelectField from "../Components/SelectField";
import countries from "../data/countries.json";

const Page = () => {
  const router = useRouter();
  const methods = useForm(); // Create methods for useForm
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  useEffect(() => {
    sessionStorage.clear(); // Clear session storage on load
  }, []);

  //   const onSubmit = async (data) => {
  //     try {
  //         const response = await fetch(`http://localhost:3001/user?${data.phoneNumber}`);
  //         console.log('Response:', response);
  //         if (!response.ok) {
  //             const errorText = await response.text(); // Get the response body as text
  //             throw new Error(`Error ${response.status}: ${response.statusText} - ${errorText}`);
  //         }
  //         const resp = await response.json(); // Parse the response as JSON

  //         // Check if resp is an array
  //         if (!Array.isArray(resp) || resp.length === 0) {
  //             toast.error('No users found with this phone number');
  //             return;
  //         }
  //         const user = resp.find(user => user.phoneNumber === data.phoneNumber);
  //         if (user) {
  //           const isPasswordValid = user.password === data.password; // Check password
  //           const isCountryValid = user.country.trim() === data.country.trim(); // Check country

  //           if (isPasswordValid && isCountryValid) {
  //               toast.success('Success');
  //               sessionStorage.setItem('id', user.id);
  //               sessionStorage.setItem('FirstName', user.FirstName);
  //               router.push('/MyAccount');
  //           } else {
  //               toast.error('Please Enter valid credentials');
  //           }
  //       } else {
  //           toast.error('Please Enter valid phone number');
  //       }
  //         // console.log(user)
  //         // if (!user) {
  //         //     toast.error('Please Enter valid phone number');
  //         // } else {
  //         //     // Now you can access user.password and user.country directly
  //         //     if (user.password === data.password && user.country === data.country) {
  //         //         toast.success('Success');
  //         //         sessionStorage.setItem('id', user.id); // Adjust this if needed
  //         //         sessionStorage.setItem('FirstName', user.FirstName); // Adjust this if user.role exists
  //         //         router.push('/MyAccount');
  //         //     } else {
  //         //         toast.error('Please Enter valid credentials');
  //         //     }
  //         // }
  //     } catch (err) {
  //         console.error('Error Details:', err); // Log error details
  //         toast.error('Login Failed due to: ' + err.message);
  //     }
  // };
  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `http://localhost:3001/user?phoneNumber=${data.phoneNumber}`
      );
      const resp = await response.json(); // Parse the response as JSON
      console.log("Response Body:", resp); // Log the response

      // Check if resp is an array or object
      const user = Array.isArray(resp)
        ? resp.find((user) => user.phoneNumber === data.phoneNumber)
        : resp;

      console.log("Fetched User:", user); // Log user object

      if (user) {
        const isPasswordValid = user.password === data.password; // Check password
        const isCountryValid = user.country.trim() === data.country.trim(); // Check country

        if (isPasswordValid && isCountryValid) {
          toast.success("Success");
          sessionStorage.setItem("id", user.id);
          sessionStorage.setItem("FirstName", user.FirstName);
          router.push("/MyAccount");
        } else {
          toast.error("Please Enter valid credentials");
        }
      } else {
        toast.error("No user found with this phone number");
      }
    } catch (err) {
      console.error("Error Details:", err);
      toast.error("Login Failed due to: " + err.message);
    }
  };

  const styleInput =
    "h-[45px]  bg-[#7786f97a]  border border-gray-300 text-gray-900 text-base rounded-lg block  p-2.5 placeholder-gray-600";
  const linksLogin = [
    { href: "/", label: "الصفحة الرئيسية" },
    { href: "/login", label: "تسجيل الدخول" },
  ];
  return (
    <section className=" py-12 px-24 font-[family-name:var(--font-Cairo-Medium)] bg-[#f3f3f3ec]  ">
      <Breadcrumbs links={linksLogin} />
      <div className="flex  flex-col items-center py-10 sm:justify-center ">
        <Logo classNameAdd="w-[350px] mr-44 mb-0 pb-0" />
        <div className="px-6 py-6 bg-white  shadow-md rounded-md sm:rounded-lg ">
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
          <FormProvider {...methods}>
            <form
              action=""
              onSubmit={handleSubmit(onSubmit)}
              className="group space-y-4"
            >
              <div className="w-[500px] ">
                <SelectField
                  name="country"
                  control={control}
                  defaultValue="الكويت" // Default value is the country name
                  label="اختر الدولة"
                  options={countries} // Array of country objects
                  placeholder="اختر دولة..."
                  valueKey="name"
                  labelKey="name"
                  styleInput={`${styleInput} w-[500px] p-0 m-0 text-sm`} // Custom styles
                />
              </div>
              <InputField
                name="phoneNumber"
                namelabel="رقم الهاتف"
                type="tel"
                maxLength={12}
                register={register}
                // pattern="^(?!.*[A-Za-z])([4-69][0-9]{7,11})$"
                styleInput={`${styleInput} w-[500px] `} // Custom styles
                messageError="يجب أن يتكون رقم الهاتف من 8 إلى 12 رقمًا ويكون بمقدمة احدى ارقام الكويت."
              />
              <InputField
                name="password"
                namelabel="كلمة السر"
                type="password"
                maxLength={12}
                register={register}
                // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                styleInput={`${styleInput} w-[500px] `} // Custom styles
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
                  <label htmlFor="terms" className="mr-2 text-sm text-gray-900">
                    تذكرني
                  </label>
                </div>
                <Link href="lostpassword" className="hover:text-[--foreground]">
                  نسيت كلمة السر ؟
                </Link>
              </div>
              <div className="flex items-center mt-4">
                <button
                  type="submit"
                  className="w-full text-white bg-[--foreground] hover:bg-purple-600 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mt-2  group-invalid:bg-gradient-to-br  "
                >
                  دخول
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </section>
  );
};
export default Page;
