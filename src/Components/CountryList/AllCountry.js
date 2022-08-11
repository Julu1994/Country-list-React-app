import React from "react";
import { useNavigate } from "react-router-dom";
import "./AllCountry.css";
import Card from "../Layout/Card";
import { BsFillHeartFill } from "react-icons/bs";
const AllCountry = ({
    name,
    id,
    capital,
    region,
    population,
    area,
    flag,
    key,
}) => {
    const navigate = useNavigate();
    return (
        <>
            <Card>
                <div
                    className="country__card"
                    onClick={() => {
                        navigate(`/country-details/${id}`);
                    }}>
                    <img src={flag} alt="flag.png" />
                    <button>
                        <BsFillHeartFill className="heart__icon" />
                    </button>
                    <h2> {name}</h2>
                    <h3>Capital: {capital}</h3>
                    <h3>Region: {region}</h3>
                    <p>Population: {population} Million people</p>
                    <p>
                        Area: {area}
                        <sup>2</sup> Km
                    </p>
                </div>
            </Card>
        </>
    );
};

export default AllCountry;
