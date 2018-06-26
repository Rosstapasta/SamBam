import React, { Component } from 'react';
import Router from './router.js';
import NavBar from './comps/nav/Nav';
import Footer from './comps/footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <NavBar/>
        </header>

        <body>
          <Router/>
        </body>

        <footer>
          <Footer/>
        </footer>

      </div>
    );
  }
}

export default App;
