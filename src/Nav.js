import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png'
import './Nav.css';

function Nav(){
    const moveToWork = () => {
        let work = document.querySelector('#Work');
        work.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    const moveToAbout = () => {
        let about = document.querySelector('#About');
        about.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return(
        <div className="Nav">
            <img className="Nav-logo" src={logo} alt="logo" />
            <ul className="Nav-bar">
                <li className="Nav-item" onClick={moveToAbout}>About</li>
                <li className="Nav-item" onClick={moveToWork}>Work</li>
                <li><Link className="Nav-item" to="contact">Contact</Link></li>
            </ul>
        </div>
    );
}
export default Nav;