import "./App.css";
import HomePage from "./Pages/HomePage";
import CountryDetails from "./Pages/CountryDetails";
// import HomePage from './Pages/HomePage';
import AllCountry from "./Components/CountryList/AllCountry";
import { Route, Routes, Navigate, BrowserRouter, Link } from "react-router-dom";
import React from "react";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>

            {/* <Route path="/home" element={<HomePage />} />
            <Route path="/country-details" element={<CountryDetails />}>
                <Link path=":id" element={<CountryDetails />} /> */}
            {/* </Route> */}
        </BrowserRouter>
    );
}

export default App;
