import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import Avatar from './images/avatar.png';
import './Contact.css';

export default function Contact(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    function handleSubmit(e){
        e.preventDefault();  
    };
    return (
        <div className="Contact">
            <div className="Contact-nav">
                <img className="Nav-logo" src={logo} alt="logo" />
                <Link className="Contact-back" to="/"><i className="fa fa-times" aria-hidden="true"></i></Link>
            </div>
            <div className="Contact-main">
                <img className="Contact-Avatar" src={Avatar} alt="Avatar" />
                <div>
                    <form className="Contact-form" onSubmit={handleSubmit}>
                        
                        <div className="Form-item">
                            <label htmlFor="name">Name
                                <input 
                                    name="name" 
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </label>
                            
                        </div>
                        <div className="Form-item">
                            <label htmlFor="email">Email
                                <input 
                                    name="email" 
                                    type="text"
                                    id="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </label>
                            
                        </div>
                        <div className="Form-item message">
                            <label htmlFor="message">Message
                                <textarea 
                                    name="message" 
                                    type="text"
                                    id="message"
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                />
                            </label>
                            
                        </div>
                        <input className="Work-btn" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
}

{/* <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="task">New Todo: </label>
                    <input 
                        type="text"
                        name="task"
                        id="task"
                        placeholder="Add ToDo"
                        value={this.state.task}
                        onChange={this.handleChange}
                    />
                    <button>Add Todo!</button>
                </form> */}