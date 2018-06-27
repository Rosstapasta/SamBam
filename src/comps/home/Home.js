import React, {Component} from 'react';
import './Home.css';
import Slider from "react-slick-16";
import SlideOne from './homeMedia/slideOne.jpeg';

export default class Home extends Component{
    render(){
        var settings = {
            // dots: true,
            infinite: false,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: false,
            fade: true
          };
        return (
            <div id="ScrollProp" className="homeBody">
                <div className='parallax'>
                    <img src={SlideOne} alt='slideOne' className="slides"/>
                </div>

                <div id="ContentCon2" className="ContentCon">

                </div>
            </div>
        )
    }
}