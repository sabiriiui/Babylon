import React, { Component } from 'react';
var Carousel = require('react-responsive-carousel').Carousel;

class BaliCarousel extends Component {



  render() {
    // return <Carousel showStatus ={false} showThumbs={false} autoPlay={true} infiniteLoop={true} stopOnHover={false}>
    //     <div>
    //         <img src={Main} />
    //     </div>
    //     <div>
    //         <img src={Attraction1} />
    //     </div>
    //     <div>
    //         <img src={Attraction2} />
    //     </div>
    //     <div>
    //         <img src={Attraction3} />
    //     </div>
    // </Carousel>

    return <div style={{height:"100vh"}}>
            <img src={process.env.PUBLIC_URL + '/images/main.jpg'}  width="100%" height="100%"/>
        </div>;
      }

}


export default BaliCarousel;
