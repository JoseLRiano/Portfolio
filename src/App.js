import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Experience from './Experience';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';


function App() {
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Nav />
            <Header />
            <About />
            <Experience />
            <Work />
            <Footer />
          </Route>
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
