import React, {Component} from 'react';
import './Home.css';
import Carousel from './homeComps/Carousel';

export default class Home extends Component{

    // edited library instead
    // componentDidMount(){
    //     window.addEventListener('load', function () {
    //     var stuff = document.getElementsByClassName('classDots')[0];
    //     stuff.style.cssText = '';
    //     })
    // }

    render(){
        return (
            <div id="ScrollProp" className="homeBody">
                <div className='parallax'>
                    <Carousel/>
                </div>

                <div id="ContentCon2" className="ContentCon">

                </div>
            </div>
        )
    }
}