import React from 'react';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Experience from './Experience';
import Work from './Work';
import './App.css';


function App() {
  
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Experience />
      <Work />
    </div>
  );
}

export default App;
