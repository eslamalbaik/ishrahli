import React from 'react';
import { useFormContext } from 'react-hook-form';

const InputField = ({
  name,
  namelabel,
  type,
  styleInput,
  messageError,
  maxLength,
  pattern,
}) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="w-[500px]">
      <label
        htmlFor={name} // تغيير من namelabel إلى name
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {namelabel}
      </label>
      <div className="flex flex-col items-start ">
        <input
          type={type}
          {...register(name, { // استخدام name هنا
            required: "هذا الحقل مطلوب",
            pattern: {
              value: pattern ? new RegExp(pattern) : undefined, // تحقق إذا كان pattern موجود
              message: messageError,
            },
            maxLength: {
              value: maxLength,
              message: `يجب ألا يتجاوز ${maxLength} حرفًا`,
            },
          })}
          id={name} // التأكد من أن id يطابق name
          placeholder={namelabel}
          className={`${styleInput} ${errors[name] ? 'border-red-500' : ''}`} // استخدام errors[name]
          aria-invalid={!!errors[name]} // استخدام errors[name]
        />
      </div>
      {errors[name] && ( // استخدام errors[name]
        <span className="mt-1 text-sm text-red-400">
          {errors[name].message} 
        </span>
      )}
    </div>
  );
};

export default InputField;
