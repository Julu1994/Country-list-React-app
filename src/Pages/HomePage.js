import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import CountryList from '../Components/CountryList/CountryList';
import ApiRequest from '../Components/CountryList/ApiRequest';
const HomePage = () => {
  return (
    <div className='container__main'>
      <NavBar />
      <ApiRequest />
    </div>
  );
};

export default HomePage;
