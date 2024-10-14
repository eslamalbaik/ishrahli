import { useDispatch, useSelector } from "react-redux";
import { FaEyeSlashMini, FaRegEye1Mini } from "../lib/@react-icons";
import { setPassword, toggleShowPassword } from "../lib/@redux-toolkit/passwordSlice";

const PasswordInput = ({ register ,styleInput}) => {
  const dispatch = useDispatch();
  const { password, strengthLevel, strengthClass, showPassword } = useSelector(
    (state) => state.password
  );

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setPassword(value)); 
  };

  const togglePasswordVisibility = () => {
    dispatch(toggleShowPassword());
  };

  return (
    <div className="w-[473px]">
      <label
        htmlFor="password"
        className="block mb-2 text-sm font-medium  "
      >
        كلمة السر
      </label>
      <div className="relative flex justify-between items-center">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="أدخل كلمة السر"
          {...register("password", {
            required: "كلمة السر مطلوبة",
            validate: () => strengthLevel !== "ضعيفة جدا",
          })}
          value={password}
          onChange={handleChange}
          className={styleInput}
          aria-invalid={strengthLevel === "ضعيفة جدا"}
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
      <div className="mt-2 h-2 rounded-lg overflow-hidden">
        <div
          className={`h-full ${strengthClass} transition-all`}
          style={{ width: `${(password.length / 10) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default PasswordInput;
