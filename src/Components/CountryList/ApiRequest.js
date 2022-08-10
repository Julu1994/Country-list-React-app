import React, { useState, useEffect } from 'react';
import CountryList from './CountryList';
import NavBar from '../NavBar/NavBar';
const ApiRequest = () => {
  const [apiData, setApiData] = useState([]);
  const [keyWord, setKeyWord] = useState(apiData);

  const getRequest = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');

    const data = await response.json();
    console.log(data);
    const recevedData = data.map((item) => {
      return {
        id: Math.floor(Math.random() * 1000000),
        flag: item.flags.png,
        name: item.name.common,
        capital: item.capital,
        region: item.region,
        population: item.population,
        area: item.area,
      };
    });
    setApiData(recevedData);
  };

  useEffect(() => {
    getRequest();
  }, []);

  const filter = (searchWord) => {
    console.log(searchWord);
    setKeyWord(searchWord);
    const filterData = apiData.filter((item) => {
      return item.name.toLowerCase().search(keyWord.toLowerCase()) !== -1;
    });
    setApiData(filterData);
    console.log(filterData);
  };

  return (
    <>
      <NavBar onSearch={filter} />
      <CountryList country={apiData} />
    </>
  );
};

export default ApiRequest;
