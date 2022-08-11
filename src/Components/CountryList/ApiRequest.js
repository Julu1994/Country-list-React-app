import React, { useState, useEffect } from "react";
import CountryList from "./CountryList";
import NavBar from "../NavBar/NavBar";
const ApiRequest = () => {
    const [countries, setCountries] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [keyWord, setKeyWord] = useState("");

    const getRequest = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");

        const data = await response.json();

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
        setCountries(recevedData);
        setFilteredData(recevedData);
    };
    const handleChange = (event) => {
        setKeyWord(event.target.value);

        let filteredData = countries.filter((country) => {
            return (
                country.name.toLowerCase().search(keyWord.toLowerCase()) !== -1
            );
        });
        setFilteredData(filteredData);
    };

    useEffect(() => {
        getRequest();
    }, []);
    console.log(countries);

    return (
        <>
            <NavBar props={handleChange} />
            <CountryList props={filteredData} />
        </>
    );
};

export default ApiRequest;
