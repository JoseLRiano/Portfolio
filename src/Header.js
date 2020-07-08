import React from 'react';
import Avatar from './images/avatar.png';
import './Header.css';

const Header = () => {
    const handleClick = () => {
        let work = document.querySelector('#Experience');
        work.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return(
        <div className="Header">
            <div className="Header-Text">
                <h1>Hello, I am Jose Riano.</h1>
                <h2>I'm a Front End Web developer.</h2>
            </div>
            <img className="Header-Avatar" src={Avatar} alt="Avatar" />
            <button onClick={handleClick} className="Header-Button">View my work <i className="Header-Icon fa fa-arrow-right" aria-hidden="true"></i></button>
        </div>
    );
}
export default Header;