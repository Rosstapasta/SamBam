import React, {Component} from 'react';
import './Home.css';
import Slider from "react-slick-16";
import SlideOne from './homeMedia/slideOne.jpeg';
import SlideTwo from './homeMedia/catusInPot.jpeg';
import SlideThree from './homeMedia/tulipsYellowPink.jpeg';

export default class Home extends Component{
    render(){
        var settings = {
            // dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: false,
            fade: true
          };
        return (
            <div id="ScrollProp" className="homeBody">
                <div className='parallax'>
                    <Slider {...settings} className="carousel">
                        <img src={SlideOne} alt='slideOne' className="slides"/>
                        <img src={SlideTwo} alt='slideOne' className="slides"/>
                        <img src={SlideThree} alt='slideOne' className="slides"/>
                    </Slider>
                </div>

                <div id="ContentCon2" className="ContentCon">

                </div>
            </div>
        )
    }
}