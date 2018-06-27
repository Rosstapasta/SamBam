import React, {Component} from 'react';
import './Nav.css';
import Logo from './navMedia/samsLogoThree.png';
import Profile from './navMedia/profile.png';
import Cart from './navMedia/cart.png';
import Search from './navMedia/search.png';

export default class Nav extends Component{
    render(){
        return (
            <div className="navBody">

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