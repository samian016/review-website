import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            
            <h4 className="line-two"> EDUCATION PLATFORM </h4>
            <nav className="nav-bar">
                <NavLink to="/home">Home </NavLink>
                <NavLink to="/platform">Platform </NavLink>
                <NavLink to="/teacher">Expert </NavLink>
                <NavLink to="/about">About US </NavLink>

            </nav>
            

        </div>
    );
};

export default Header;