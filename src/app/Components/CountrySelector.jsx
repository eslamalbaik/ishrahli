import countries from '../data/countries.json'; // Adjust the path based on where you save your JSON file

const CountrySelector = ({country,setData,data}) => {

  return (
    <div className="w-[500px]">
      <label
        htmlFor="country"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        اختر الدولة
      </label>
      <select
        name="country"
        id="country"
        className="w-full mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
        value={country}
        onChange={(e) => {
            setData({
              ...data,
              country: e.target.value,
            });
          }}
      >
        <option value="">اختر الدولة</option>
        {countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelector;
