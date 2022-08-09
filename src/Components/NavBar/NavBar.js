import React from 'react';
import Search from '../Search/Search';
import './NavBar.css';
import { FaGlobeAsia } from 'react-icons/fa';

import { BsFillHeartFill } from 'react-icons/bs';
const NavBar = () => {
  return (
    <div className='nav'>
      <div className='nav__Logo'>
        <FaGlobeAsia className='globe-__icon' />
      </div>
      <Search />
      <div className='wish__list'>
        <p>Favourite country</p>
        <div className='wish__list-count'>
          <BsFillHeartFill className='heart__icon' />
        </div>
        <p>2</p>
      </div>
    </div>
  );
};

export default NavBar;
