import React, { useEffect, useState } from "react";
import user from "../data.json";
import CountryCard from "./CountryCard";

const CountryLists = () => {
  const [countries, setCountries] = useState(user);

  useEffect(() => {
    fetch("user")
      .then((response) => response.json())
      .then((countries) => setCountries(countries));
  }, []);
  return (
    <div className="container mx-auto pb-16">
      <div className="grid grid-cols-1 place-items-center xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 mx-4 my-8 gap-10 xl:gap-4">
        {countries.map((country, id) => (
          <CountryCard key={id} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountryLists;
