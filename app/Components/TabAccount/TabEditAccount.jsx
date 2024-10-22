"use client";
import { useForm, FormProvider, Controller } from "react-hook-form";
import InputField from "../InputField";
import React, { useEffect, useState } from "react";
import SelectField from "../SelectField";
import cities from "../../data/cities.json";
import { toast } from "react-hot-toast";
import { ConfirmationModal, SuccessPopup } from "./ConfirmationModal";

const TabEditAccount = () => {
  const methods = useForm();
  const { register, handleSubmit, setValue, control } = methods; // Add control here
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
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
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const handleDelete = () => {
    console.log("Account deleted!");
    setIsSuccessOpen(true);
    setIsModalOpen(false);
  };

  const userId = sessionStorage.getItem('userId');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/user?id=${userId}`);
        if (!response.ok) {
          throw new Error("Error fetching user data");
        }
        const data = await response.json();
        const user = data[userId]; // Adjust based on the response structure
        setUserData(user);

        // Set form values
        setValue("FirstName", user.FirstName);
        setValue("LastName", user.LastName);
        setValue("phoneNumber", user.phoneNumber);
        setValue("city", user.city);
        setValue("grade", user.grade);
      } catch (error) {
        toast.error("Error loading user data");
      } finally {
        setLoading(false); // Set loading to false after the fetch
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [setValue, userId]);

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`http://localhost:3001/user/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Account updated successfully");
      } else {
        throw new Error("Failed to update account");
      }
    } catch (error) {
      toast.error("Error updating account: " + error.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>; // Show loading until data is fetched
  }

  if (!userData) {
    return <p>No user data available.</p>; // Handle case where no data is returned
  }

  const styleInput =
    "h-[45px] w-[500px] bg-[#7786f97a] border border-gray-300 text-gray-900 text-base rounded-lg block p-2.5 placeholder-gray-600";

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}> {/* Use handleSubmit here */}
          <div className="flex justify-center px-24 items-center flex-col">
            <h3 className="font-[900] self-start text-[--background] border-b-[3px] border-[--foreground] text-xl m-8 py-2">
              المعلومات الشخصية
            </h3>
            <div className="relative w-52 h-52 m-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg
                className="absolute w-52 h-52 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="flex flex-col max-w-full sm:flex-row items-center gap-8 py-2">
              <InputField
                name="FirstName"
                namelabel="الاسم الأول"
                type="text"
                maxLength={25}
                pattern="^(?=.*[\u0600-\u06FF]|(?=.*[A-Za-z]))[A-Za-z\u0600-\u06FF\s]{3,40}$"
                styleInput={`${styleInput} w-full`}
                messageError="الاسم الأول يجب أن يتكون من 6 أحرف على الأقل ولا يحتوي على أرقام"
              />

              <InputField
                name="LastName"
                namelabel="الاسم الأخير"
                type="text"
                maxLength={25}
                pattern="^(?=.*[\u0600-\u06FF]|(?=.*[A-Za-z]))[A-Za-z\u0600-\u06FF\s]{3,40}$"
                styleInput={`${styleInput} w-full`}
                messageError="الاسم الأخير يجب أن يتكون من 6 أحرف على الأقل ولا يحتوي على أرقام"
                register={register}
              />
            </div>
            <div className="flex flex-col max-w-full sm:flex-row items-center gap-8 py-2">
              <InputField
                name="email"
                namelabel="البريد الإلكتروني"
                type="email"
                register={register}
                maxLength={12}
                styleInput={`${styleInput}`}
                messageError="يجب أن يتكون رقم الهاتف من 8 إلى 12 رقمًا ويكون بمقدمة احدى ارقام الكويت."
              />
              <SelectField
                name="grade"
                control={control}
                defaultValue=""
                label="اختر الصف الدراسي"
                options={grades}
                placeholder="اختر الصف..."
                styleInput={`${styleInput}`}
              />
            </div>
            <h3 className="font-[900] self-start text-[--background] border-b-[3px] border-[--foreground] text-xl m-8 py-2">
              العنوان
            </h3>
            <div className="flex flex-col max-w-full sm:flex-row items-center gap-8 py-2">
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

            <div className="flex flex-col max-w-full sm:flex-row items-center gap-8 py-2">
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
            <div className="flex self-start sm:flex-row justify-start items-start mr-8 py-2">
              <InputField
                name="street"
                namelabel="المنزل"
                type="text"
                maxLength={12}
                styleInput={`${styleInput} w-[500px]`}
                messageError=""
              />
            </div>
            <button
              type="submit" // Ensure type is submit
              className="w-[95%] my-8 text-white bg-[--foreground] hover:bg-[--background] focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 text-center"
            >
              تعديل حساب
            </button>
          </div>
          <br />
          <hr />
          <br />
        </form>
      </FormProvider>
    </div>
  );
};

export default TabEditAccount;
