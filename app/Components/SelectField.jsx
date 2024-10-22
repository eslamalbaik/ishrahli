import { Controller } from "react-hook-form";
const SelectField = ({
  name,
  control,
  defaultValue,
  label,
  options,
  placeholder,
  valueKey = "", 
  labelKey = "",
  styleInput,
}) => {
  return (
    <div className="w-[500px] sm:w-1/2">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <select {...field} className={`${styleInput}  w-[500px]`}>
            <option value="">{placeholder}</option>
            {options.map((option, index) => (
              <option
                key={index}
                value={typeof option === "object" ? option[valueKey] : option}
              >
                {typeof option === "object"
                  ? option.dialCode !== undefined
                    ? `${option[labelKey]} ${option.dialCode}`
                    : option[labelKey]
                  : option}
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
};

export default SelectField;
