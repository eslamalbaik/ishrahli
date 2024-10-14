import React from 'react';
import { Controller } from 'react-hook-form';
import cities from '../data/cities.json'; // تأكد من ضبط المسار بناءً على مكان حفظ ملف JSON الخاص بك

const CitySelector = ({ control,styleInput }) => {
  return (
    <div className="w-[500px]">
      <label
        htmlFor="city"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        اختر المدينة
      </label>
      <Controller
        name="city"
        control={control}
        defaultValue="" // قيمة افتراضية فارغة
        render={({ field }) => (
          <select
            id="city"
            className={styleInput}
            {...field}
          >
            <option value="">اختر مدينة...</option>
            {cities.cities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
};

export default CitySelector;
