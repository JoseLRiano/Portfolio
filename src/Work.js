import React from 'react';
import adoption from './images/adoption.png';
import sebas from './images/sebas.png';
import game from './images/game.png';
import list from './images/list.png';
import poke from './images/poke.png';
import jokes from './images/jokes.png';
import './Work.css';

export default function Work(){
    let pics = [
        {name: 'sebastian website image', image: sebas }, 
        {name: 'adoption app image', image: adoption}, 
        {name: 'Lights Out game image', image: game}, 
        {name: 'list image App', image: list}, 
        {name: 'pokemon image App', image: poke},
        {name: 'Joke list image App', image: jokes}];
    const projects =
        pics.map((project, i) => 
                <div className="Work-box" key={i}>      
                    <img className="Box-image" src={project.image}  alt={project.name} />
                    <div className="Box-hide">
                        <h1 className="Box-project-title">
                            React App that consumes API and displays relevant Data
                        </h1>
                        <button className="Box-btn">
                            <span>Visit Website</span>
                            <span className="Box-arrow"><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>
                        </button>
                    </div>
                </div>
        );
    return (
        <div className="Work">
            <div className="Work-title">
                <h1>My Recent Work</h1>
                <p>These are some of my projects I've worked on recently.</p>
            </div>
            <div className="Work-examples">
                {projects}
            </div>
            <a className="Work-btn" href="https://github.com/JoseLRiano" target="_blank"><i className="fa fa-github" aria-hidden="true"></i> See more on GitHub</a>
        </div> 
    );
}