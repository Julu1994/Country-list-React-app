import './App.css';
import HomePage from './Pages/HomePage';
import CountryDetails from './Pages/CountryDetails';
// import HomePage from './Pages/HomePage';
import AllCountry from './Components/CountryList/AllCountry';
import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/home' repalce />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/country-details' element={<CountryDetails />}>
          <Route path=':id' element={<CountryDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
