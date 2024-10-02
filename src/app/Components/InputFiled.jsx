import React, { useState } from 'react';

const InputField = ({
  name,
  namelabel,
  type,
  styleInput,
  messageError,
  onChange,
  maxLength,
  pattern,
  classNameSpan = '',
  otherlabel = '',
}) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    onChange(e);
    setIsValid(e.target.validity.valid); // Update validity based on input
  };

  return (
    <div className="w-[500px]">
      <label
        htmlFor={namelabel}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {name}
      </label>
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-2 w-full">
          <span className={classNameSpan}>{otherlabel}</span>
          <input
            type={type}
            name={namelabel}
            id={namelabel} // Added id for accessibility
            placeholder={name}
            maxLength={maxLength}
            className={styleInput}
            pattern={pattern}
            required
            onChange={handleChange}
            aria-invalid={!isValid} // Accessibility improvement
          />
        </div>
        {!isValid && (
          <span className="mt-1 text-sm text-red-400">
            {messageError}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputField;
