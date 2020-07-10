import React from 'react';
import './Footer.css';
import whiteLogo from './images/whiteLogo.png';

export default function Footer(){
    return(
        <div className="Footer">
            <img className="logo" src={whiteLogo} alt="Logo" />
            <div className="Footer-media">
                <a className="Footer-item" href="https://twitter.com/joselriano"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a className="Footer-item" href="https://github.com/JoseLRiano"><i className="fa fa-github-alt" aria-hidden="true"></i></a>
                <a className="Footer-item" href="https://www.linkedin.com/in/jose-l-riano-15801795/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                <a className="Footer-item" href="https://github.com/JoseLRiano"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
        </div>
        </div>
    );
}