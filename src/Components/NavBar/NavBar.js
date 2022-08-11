import React, { useState } from "react";
import "./NavBar.css";
import { FaGlobeAsia } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";

const NavBar = ({ props }) => {
    return (
        <div className="nav">
            <div className="nav__Logo">
                <FaGlobeAsia className="globe-__icon" />
            </div>
            <div className="search">
                <BiSearchAlt className="search__icon" />
                <form>
                    <input
                        type="text"
                        placeholder="Where to?"
                        onChange={props}
                    />
                </form>
            </div>
            <div className="wish__list">
                <p>Favourite country</p>
                <div className="wish__list-count">
                    <BsFillHeartFill className="heart__icon" />
                </div>
                <p>2</p>
            </div>
        </div>
    );
};

export default NavBar;
