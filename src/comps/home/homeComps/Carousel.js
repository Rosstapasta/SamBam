import React, {Component} from 'react';
import Slider from "react-slick-16";
import SlideOne from '../homeMedia/slideOne.jpeg';
import SlideTwo from '../homeMedia/catusInPot.jpeg';
import SlideThree from '../homeMedia/tulipsYellowPink.jpeg';

export default class Carousel extends Component{
    constructor(){
        super()

        this.changeDots = this.changeDots.bind(this);
    }


    componentDidMount(){
        window.addEventListener('load', this.changeDots)
    }

    changeDots(){
        var stuff = document.getElementsByClassName('classDots')[0];
        stuff.style.cssText = '';
    }

    render(){
        
        var settings = {
            dots: true,
            dotsClass: 'classDots',
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: false,
            fade: true
          };
        return(
            <Slider {...settings} className="carousel">
                <img 
                    src={SlideOne} 
                    alt='slideOne' 
                    className="slides"
                />
                <img 
                    src={SlideTwo} 
                    alt='slideOne' 
                    className="slides"
                />
                <img 
                    src={SlideThree} 
                    alt='slideOne' 
                    className="slides"
                />
            </Slider>
        )
    }
}