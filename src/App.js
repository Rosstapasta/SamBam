import React, { Component } from 'react';
import Router from './router.js';
import NavBar from './comps/nav/Nav.js';
import Footer from './comps/footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{zIndex: "3"}}>
          <NavBar/>
        </header>
        <body id="theBod" style={{zIndex: "2"}}>
          <Router />
        </body>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
