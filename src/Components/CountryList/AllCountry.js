import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AllCountry.css';
import Card from '../Layout/Card';
import { BsFillHeartFill } from 'react-icons/bs';
const AllCountry = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <div
          className='country__card'
          onClick={() => {
            navigate(`/country-details/${props.id}`);
          }}
        >
          <img src={props.flag} alt='flag.png' />
          <button>
            <BsFillHeartFill className='heart__icon' />
          </button>
          <h2> {props.name}</h2>
          <h3>Capital: {props.capital}</h3>
          <h3>Region: {props.region}</h3>
          <p>Population: {props.population} Million people</p>
          <p>
            Area: {props.area}
            <sup>2</sup> Km
          </p>
        </div>
      </Card>
    </>
  );
};

export default AllCountry;
