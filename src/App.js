import React, { Component } from 'react';
import Router from './router.js';
import NavBar from './comps/nav/Nav.js';
import Footer from './comps/footer/Footer';
import './App.css';

class App extends Component {
  constructor(){
    super()

      this.state = {
        navScroll: 0,
        headerP: true
      }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  };

  
  handleScroll(event){

    var scrollProp = document.getElementById('ScrollProp');
    
      if(this.state.navScroll < scrollProp.scrollTop){
        this.setState({ headerP: false})
      }else if(this.state.navScroll > scrollProp.scrollTop){
        this.setState({headerP: true})
      }
      this.setState({navScroll: scrollProp.scrollTop});
  }
  
  render() {
    return (
      <div className="App">
        <header event='scroll' className={this.state.headerP ? 'theHead' : 'theHead theHead2'} style={{zIndex: "3"}}>
          <NavBar/>
        </header>
        <body id="theBod" style={{zIndex: "2"}}>
          <Router id="theBod" />
        </body>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
