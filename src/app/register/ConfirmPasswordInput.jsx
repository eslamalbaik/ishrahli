import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEyeSlashMini, FaRegEye1Mini } from "../lib/@react-icons";
import { setConfirmPassword, toggleShowPassword } from "../lib/@redux-toolkit/passwordSlice";

const ConfirmPasswordInput = ({ register,styleInput }) => {
  const dispatch = useDispatch();
  const { confirmPassword, isMatch, showPassword } = useSelector(
    (state) => state.password
  );

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setConfirmPassword(value));
  };

  const togglePasswordVisibility = () => {
    dispatch(toggleShowPassword());
  };

  return (
    <div className="w-[473px] ">
   <div>
   <label
        htmlFor="confirmPassword"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        تأكيد كلمة السر
      </label>
      <div className="relative flex   justify-between items-center">
        <input
          type={showPassword ? "text" : "password"}
          id="confirmPassword"
          placeholder="أدخل تأكيد كلمة السر"
          {...register("confirmPassword", {
            required: "تأكيد كلمة السر مطلوب",
            validate: () => {
              if (!isMatch) {
                return "كلمات السر غير متطابقة";
              }
            },
          })}
          value={confirmPassword}
          onChange={handleChange}
          className={`${styleInput} ${!isMatch ? 'border-red-500' : ''}`}
          aria-invalid={!isMatch}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 left-0 flex items-center pr-3"
        >
          {showPassword ? (
            <FaEyeSlashMini className="ml-2 text-[--background]" />
          ) : (
            <FaRegEye1Mini className="ml-2 text-[--foreground]" />
          )}
        </button>
      </div>
   </div>
      {!isMatch && (
        <span className=" text-sm text-red-500">كلمات السر غير متطابقة</span>
      )}
    </div>
  );
};

export default ConfirmPasswordInput;
