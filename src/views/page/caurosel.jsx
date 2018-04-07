import React, { Component } from 'react';

// import Main from '/src/images/main.jpg';
import Attraction1 from '../../images/attractions/attraction10.jpg';
import Attraction2 from '../../images/attractions/attraction13.jpg';
import Attraction3 from '../../images/attractions/attraction14.jpg';
var Carousel = require('react-responsive-carousel').Carousel;

class BaliCarousel extends Component {



  render() {
    return <Carousel showStatus ={false} showThumbs={false} autoPlay={true} infiniteLoop={true} stopOnHover={false}>
        <div>
            <img src={require('../../images/main.jpg')} />
        </div>
        <div>
            <img src={Attraction1} />
        </div>
        <div>
            <img src={Attraction2} />
        </div>
        <div>
            <img src={Attraction3} />
        </div>
    </Carousel>
      }

}


export default BaliCarousel;
