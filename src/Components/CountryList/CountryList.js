import React from 'react';
import AllCountry from './AllCountry';
import './CountryList.css';
const CountryList = (props) => {
  return (
    <div className='body__container'>
      {props.country.map((country) => {
        return (
          <AllCountry
            key={country.id}
            flag={country.flag}
            name={country.name}
            capital={country.capital}
            region={country.region}
            population={country.population}
            area={country.area}
          />
        );
      })}
    </div>
  );
};

export default CountryList;
