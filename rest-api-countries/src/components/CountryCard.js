import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="w-full bg-LIGHTEBONYCLAY rounded-lg text-white shadow dark:bg-gray-800 ">
      <img className="rounded-t-lg w-full h-48 object-cover" src={country.flag} alt={country.name} />
      <div className="p-4">
        <p className="text-2xl font-bold mb-4">{country.name}</p>
        <div>
          <p>
            <span className="text-lg">Population:</span> <span className="text-gray-300">{country.population}</span>
          </p>
          <p>
            <span className="text-lg">Region:</span> <span className="text-gray-300">{country.region}</span>
          </p>
          <p>
            <span className="text-lg">Capital:</span> <span className="text-gray-300">{country.capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
