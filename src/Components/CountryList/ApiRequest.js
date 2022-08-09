import React, { useState, useEffect } from 'react';
import CountryList from './CountryList';
const ApiRequest = () => {
  const [country, setCountry] = useState([]);
  const getRequest = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        {
          const recevedData = data.map((item) => {
            console.log(item);
            return {
              id: item.id,
              flag: item.flags.png,
              name: item.name.common,
              capital: item.capital,
              region: item.region,
              population: item.population,
              area: item.area,
            };
          });
          setCountry(recevedData);
        }
      });
  };
  useEffect(() => {
    getRequest();
  }, []);
  return (
    <>
      <CountryList country={country} />
    </>
  );
};

export default ApiRequest;
