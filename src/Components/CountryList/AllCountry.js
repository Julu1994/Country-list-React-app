import React from 'react';
import './AllCountry.css';
import Card from '../Layout/Card';
import { BsFillHeartFill } from 'react-icons/bs';
const AllCountry = (props) => {
  const nextPageHandler = () => {};
  return (
    <Card>
      <div className='country__card' onClick={nextPageHandler}>
        <img src={props.flag} alt='flag.png' />
        <button>
          <BsFillHeartFill className='heart__icon' />
        </button>
        <h2> {props.name}</h2>
        <h3>Capital: {props.capital}</h3>
        <h3>Region: {props.region}</h3>
        <p>Population: {props.population}</p>
        <p>
          Area: {props.area}
          <sup>2</sup> Km
        </p>
      </div>
    </Card>
  );
};

export default AllCountry;
