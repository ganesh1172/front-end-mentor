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
    <div>
      {countries.map((country, id) => (
        <div key={id}>
          <div>{country.name}</div>
          <div>{country.population}</div>
          <div>{country.subregion}</div>
        </div>
      ))}
      <CountryCard />
    </div>
  );
};

export default CountryLists;
