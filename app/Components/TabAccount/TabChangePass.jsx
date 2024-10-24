import React from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import InputField from "../InputField"; // تأكد من أن لديك مكون إدخال

const TabChangePass = () => {
  const methods = useForm();
  const { register, handleSubmit, formState: { errors } } = methods;

  const onSubmit = async (data) => {
    try {
      // هنا يمكنك إجراء الطلب إلى API لتغيير كلمة المرور
      console.log('Password Change Data:', data);
      // إذا كان الطلب ناجحًا، يمكنك عرض رسالة نجاح للمستخدم
    } catch (error) {
      console.error('Error changing password:', error);
      // هنا يمكنك عرض رسالة خطأ للمستخدم
    }
  };

  return (
    <div className="px-24 ">
      {/* <h2 className="font-[900]  text-slate-400 mt-6 py-2">تغيير كلمة السر</h2> */}
      <h3 className="font-[900] w-32 self-start text-[--background] border-b-[3px] border-[--foreground] text-xl my-8 py-2">
      تغيير كلمة السر
            </h3>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">

          <InputField
            name="currentPassword"
            namelabel="كلمة السر الحالية"
            type="password"
            register={register}
             styleInput ="h-[45px] w-full bg-[#7786f97a]  border border-gray-300 text-gray-900 text-base rounded-lg block  p-2.5 placeholder-gray-600"
            messageError="يرجى إدخال كلمة السر الحالية."
            required
          />

          <InputField
            name="newPassword"
            namelabel="كلمة السر الجديدة"
            type="password"
            register={register}
            styleInput ="h-[45px] w-full bg-[#7786f97a]  border border-gray-300 text-gray-900 text-base rounded-lg block  p-2.5  placeholder-gray-600"
            messageError="يرجى إدخال كلمة السر الجديدة."
            required
          />

          <InputField
            name="confirmPassword"
            namelabel="تأكيد كلمة السر الجديدة"
            type="password"
            register={register}
            styleInput ="h-[45px] w-full bg-[#7786f97a]  border border-gray-300 text-gray-900 text-base rounded-lg block  p-2.5 placeholder-gray-600"
            messageError="يرجى تأكيد كلمة السر الجديدة."
            required
          />
          {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
          <br />
          <div className="flex items-center mt-8">
            <button
              type="submit"
              className="w-[95%]  text-white bg-[--foreground] hover:bg-[--background] focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 text-center" >
              تغيير كلمة السر
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default TabChangePass;
