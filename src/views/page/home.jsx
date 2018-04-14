import React from "react";
import ReactDOM from "react-dom";
import ImageTile from "../tile/imageTile";
import Main from '../../images/main.jpg';
import Single from '../../images/single.jpg';
import Honeymoon from '../../images/honeymoon.jpg';
import Group from '../../images/group.jpg';
import Carousel from "./caurosel";
import { DataStore } from '../../stores/DataStore';
import {getLocale} from '../../Utils/commonUtilities.react';
import { Link } from "react-router-dom";

import WHYUS1 from '../../images/chooseus1.png';
import WHYUS2 from '../../images/chooseus2.png';
import WHYUS3 from '../../images/chooseus3.png';
import Attraction1 from '../../images/attractions/attraction16.jpg';
import Attraction2 from '../../images/attractions/attraction2.jpg';
import Attraction3 from '../../images/attractions/attraction3.jpg';
import Attraction4 from '../../images/attractions/attraction5.jpg';
import Attraction5 from '../../images/attractions/attraction4.jpg';
import Attraction6 from '../../images/attractions/attraction6.jpg';
import Attraction7 from '../../images/attractions/attraction7.jpg';
import Attraction8 from '../../images/attractions/attraction8.jpg';
import Attraction9 from '../../images/attractions/attraction9.jpg';

import Attraction10 from '../../images/attractions/attraction10.jpg';
import Attraction11 from '../../images/attractions/attraction11.jpg';
import Attraction12 from '../../images/attractions/attraction12.jpg';

import Attraction13 from '../../images/attractions/attraction13.jpg';
import Attraction14 from '../../images/attractions/attraction14.jpg';
import Attraction15 from '../../images/attractions/attraction15.jpg';
import Attraction16 from '../../images/attractions/attraction1.jpg';


export default class HomePage extends React.Component {

  constructor() {

    super();
    this.scrollDiv = null;
  }

  gotoTours() {

    document.getElementById("root").scrollTop = (window.innerHeight - 70);
  }

  goLeft(){
    let tStyle = this.scrollDiv.style.transform;
    let tx  = tStyle.replace('translateX(','')
    tx = Number(tx.replace('px)',''));
    if(tx-250 >= -250){ //right side -250 will be updated if more images added
      tx -= 250;
      this.scrollDiv.style.webkitTransform =  "translateX("+tx+"px)";
    }

  }

  goRight(){
    let tStyle = this.scrollDiv.style.transform;
    let tx  = tStyle.replace('translateX(','')
    tx = Number(tx.replace('px)',''));
    if(tx+250 <= 0){
      tx += 250;
      this.scrollDiv.style.webkitTransform =  "translateX("+tx+"px)";
    }
  }

  getDestinations(){
    let dests = ["Gilis","Lombok","Bali","Jakarta","Puncak"];
    return dests.map((dest,index)=>{
      let sc = require("../../images/attractions/attraction"+(index+1)+".jpg");
      return <Link className="dest_img_cont" to = {"/"+dest.toLowerCase()}>
        <span className="destName">{dest}</span>
        <img width="220px" height="220px" src={sc}/>
      </Link>;
    })
  }

  render() {

    let languageLocale = getLocale(DataStore.getLocale());

    let marqueeDirection = (DataStore.getLocale() == "English") ? "left" : "right";

    return <div className="home_div">
      <div className="imageConatiner">

        <div className="bannerText">
          <marquee scrollamount="10" direction={marqueeDirection} style={{display:"flex"}}>
            <div className="flexColumn">
              <span className="discover"> {languageLocale["DISCOVERTHEBEAUTY"]}</span>
              <span className="of"> {languageLocale["OF"]} </span>
              <span className="bali"> {languageLocale["BALI"]} </span>
            </div>
          </marquee>
          <div className="bookTourBtn">
            <button type="button" class="btn btn-secondary btn-lg" onClick={this.gotoTours.bind(this)}>{languageLocale["BOOKATOUR"]}</button>
          </div>
        </div>
        <Carousel/>


      </div>

      <div className="pakagesContainer">

        <div className="destinationContainer">
          <span className="heading">{languageLocale["DESTINATIONS"]}</span>

          <div className="imgSliderCon">
            <div className="goLeft" onClick={this.goLeft.bind(this)}>{'<'}</div>
            <div className="circleImgs" >
              <div className="dest_imgs_cont" ref={(scrollDiv)=>{this.scrollDiv = scrollDiv}}>
                {this.getDestinations()}
              </div>
            </div>
            <div className="goRight" onClick={this.goRight.bind(this)}>{'>'}</div>

          </div>
        </div>

        <div className="ourtours">
          <span className="heading">{languageLocale["OURTOUR"]}</span>
          <span className="tiles">
            <ImageTile src={Single} info={languageLocale["INDIVIDUAL"]} link="individual"/>
            <ImageTile src={Honeymoon} info={languageLocale["HONEYMOON"]} link="honeymoon"/>
            <ImageTile src={Group} info={languageLocale["GROUP"]} link="group"/>
          </span>
        </div>

        <div className="whyChooseContainer">
            <span className="heading">{languageLocale["WHYCHOOSEUS"]}</span>
            <div className="whyChoose flexRow">
              <div className="chooseUsItem flexColumn">
                <img width="200px" height="200px" src={WHYUS1}></img>
                <h3>{languageLocale["HANDPICKHOTEL"]}</h3>
                <div style={{textAlign:"center"}}>Lorem ipsum dolor sit amet,
                   consectetur adipisicing elit,
                    sed do eiusmod.
                </div>
              </div>

              <div className="chooseUsItem flexColumn">
                <img width="200px" height="200px" src={WHYUS2}></img>
                <h3>{languageLocale["WORLDCLASSSERVICE"]}</h3>
                <div style={{textAlign:"center"}}>Lorem ipsum dolor sit amet,
                   consectetur adipisicing elit,
                    sed do eiusmod.
                </div>
              </div>

              <div className="chooseUsItem flexColumn">
                <img width="200px" height="200px" src={WHYUS3}></img>
                <h3>{languageLocale["BESTPRICEGURANTEE"]}</h3>
                <div style={{textAlign:"center"}}>Lorem ipsum dolor sit amet,
                   consectetur adipisicing elit,
                    sed do eiusmod.
                </div>
              </div>
            </div>
        </div>


        <div className="attractions">
          <span className="heading">{languageLocale["ATTRACTIONSINBALI"]}</span>

          <span className="tiles">
            <ImageTile src={Attraction12} />
            <ImageTile src={Attraction13} />
              <ImageTile src={Attraction9} />
          </span>
          <span className="tiles">
            <ImageTile src={Attraction4} />
            <ImageTile src={Attraction7} />
            <ImageTile src={Attraction16} />
          </span>
          <span className="tiles">
            <ImageTile src={Attraction10} />
            <ImageTile src={Attraction11} />
            <ImageTile src={Attraction14} />
          </span>
          <span className="tiles">

            <ImageTile src={Attraction15} />
            <ImageTile src={Attraction2} />
            <ImageTile src={Attraction3} />
          </span>
          <span className="tiles">
            <ImageTile src={Attraction5} />
            <ImageTile src={Attraction6} />
            <ImageTile src={Attraction8} />
          </span>



        </div>
      </div>
    </div>
  }
}
