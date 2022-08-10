import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetails.css';

const CountryDetails = () => {
  const { id } = useParams();
  const [countryData, setCountryData] = useState([]);
  const getRequest = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${id}`);

    const data = await response.json();
    console.log(data);
    const recevedData = data.map((item) => {
      return {
        id: Math.floor(Math.random() * 1000000),
        flag: item.flags.png,
        // maps: item.maps,
        name: item.name.common,
        capital: item.capital,
        region: item.region,
        population: item.population,
        area: item.area,
      };
    }, []);
    setCountryData(recevedData);
  };
  useEffect(() => {
    getRequest();
  });
  return (
    <div className='details__page'>
      {countryData.map((item) => {
        return (
          <div key={item.id}>
            <div className='page__img'>
              <img src={item.flag} alt='' />
              {/* <img src={item.maps} alt='' /> */}
            </div>
            <div className='page__text'>
              <h1>{item.name}</h1>
              <h3>{item.capital}</h3>
              <h3>{item.region}</h3>
              <h3>{item.languages}</h3>
              <p>languages</p>
              <p>currency</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountryDetails;
