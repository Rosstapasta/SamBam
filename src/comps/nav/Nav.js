import React, {Component} from 'react';
import './Nav.css';
import Logo from './navMedia/samsLogoThree.png';
import Profile from './navMedia/profile.png';
import Cart from './navMedia/cart.png';
import Search from './navMedia/search.png';

export default class Nav extends Component{
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
          console.log(scrollProp.scrollTop, "scrollTop")
      }

    render(){
        return (
            <div  event='scroll' className={this.state.headerP ? 'navBody' : 'navBody theHead2'}>

                <img className="LogoOne" src={Logo} alt="LogoOne"/>

                <div className='elements'>
                    <h2 className="text">Home</h2>
                    <h2 className='text'>Contact</h2>
                    <img className='iconNav' src={Profile} alt='profile'/>
                    <img className='iconNav' src={Search} alt='search'/>
                    <img className='iconNav' src={Cart} alt='cart'/>
                </div>

            </div>

        )
    }
}