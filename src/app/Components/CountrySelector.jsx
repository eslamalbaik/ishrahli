import React from 'react';
import { Controller } from 'react-hook-form';
import countries from '../data/countries.json'; // تأكد من ضبط المسار بناءً على مكان حفظ ملف JSON الخاص بك

const CountrySelector = ({ control,styleInput }) => {
  return (
    <div className="w-[500px]">
      <label
        htmlFor="country"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        اختر الدولة
      </label>
      <Controller
        name="country"
        control={control} 
        defaultValue="الكويت" // قيمة افتراضية هي اسم الدولة
        render={({ field }) => (
          <select
            id="country"
            className={`${styleInput} p-0 m-0 text-sm`}
            {...field}
          >
            <option value="">اختر دولة...</option> 
            {countries.map((country, index) => (
              <option key={index} value={country.name  }>
                {country.name +" " +country.dialCode}
                
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
};

export default CountrySelector;
