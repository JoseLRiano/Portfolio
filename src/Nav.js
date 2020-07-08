import React from 'react';
import logo from './images/logo.png'
import './Nav.css';

function Nav(){
    return(
        <div className="Nav">
            <img className="Nav-logo" src={logo} alt="logo" />
            <ul className="Nav-bar">
                <li className="Nav-item">Home</li>
                <li className="Nav-item">About</li>
                <li className="Nav-item">Work</li>
            </ul>
        </div>
    );
}
export default Nav;