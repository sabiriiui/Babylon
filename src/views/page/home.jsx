import React from "react";
import ReactDOM from "react-dom";
import ImageTile from "../tile/imageTile";
import Carousel from "./caurosel";
import { DataStore } from '../../stores/DataStore';
import {getLocale} from '../../Utils/commonUtilities.react';
import { Link } from "react-router-dom";

import AnchorLink from 'react-anchor-link-smooth-scroll';


export default class HomePage extends React.Component {

  constructor() {

    super();
    this.scrollDiv = null;
  }

  gotoTours() {

    // document.getElementsByTagName("html")[0].scrollTop = (window.innerHeight);
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
      let sc = process.env.PUBLIC_URL + "/images/attractions/small/attraction"+(index+1)+".jpg";
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
          <span style={{display:"flex"}}>
            <div className="flexColumn">
              <span className="babylon"> {languageLocale["BABYLON"]} </span>
              <span className="holidays"> {languageLocale["HOLIDAYS"]} </span>
              <span className="discover"> {languageLocale["DISCOVERTHEBEAUTY"]}</span>

            </div>
          </span>
          <div className="bookTourBtn">


            <button type="button" class="btn btn-secondary btn-lg">
              <AnchorLink offset="0" href="#tours">
                {languageLocale["SCROLLDOWN"]}
              </AnchorLink>
            </button>
          </div>
        </div>
        <Carousel/>


      </div>

      <div className="pakagesContainer" id="tours">

        <div className="destinationContainer">
          <span className="heading">{languageLocale["DESTINATIONS"]}</span>
          <span className="destinationsDetail">{languageLocale["DESTINATIONSDETAIL"]}</span>
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
            <ImageTile src={process.env.PUBLIC_URL + '/images/single.jpg'} info={languageLocale["INDIVIDUAL"]} link="individual"/>
            <ImageTile src={process.env.PUBLIC_URL + '/images/honeymoon.jpg'} info={languageLocale["HONEYMOON"]} link="honeymoon"/>
            <ImageTile src={process.env.PUBLIC_URL + '/images/group.jpg'} info={languageLocale["GROUP"]} link="group"/>
          </span>
        </div>

        <div className="whyChooseContainer">
            <span className="heading">{languageLocale["WHYCHOOSEUS"]}</span>
            <span className="destinationsDetail">{languageLocale["WHYCHOOSEUSDETAIL"]}</span>
          <div className="whyChoose">
              <div className="chooseUsItem flexColumn">
                <img width="200px" height="200px" src={process.env.PUBLIC_URL + '/images/chooseus1.png'}></img>
                <h3>{languageLocale["HANDPICKHOTEL"]}</h3>
                <div className="whyChooseDetail">
                  {languageLocale["HANDPICKHOTELDETAIL"]}
                </div>
              </div>

              <div className="chooseUsItem flexColumn">
                <img width="200px" height="200px" src={process.env.PUBLIC_URL + '/images/chooseus2.png'}></img>
                <h3>{languageLocale["WORLDCLASSSERVICE"]}</h3>
                <div className="whyChooseDetail">
                  {languageLocale["WORLDCLASSSERVICEDETAIL"]}
                </div>
              </div>

              <div className="chooseUsItem flexColumn">
                <img width="200px" height="200px" src={process.env.PUBLIC_URL + '/images/chooseus3.png'}></img>
                <h3>{languageLocale["BESTPRICEGURANTEE"]}</h3>
                <div className="whyChooseDetail">
                  {languageLocale["BESTPRICEGURANTEEDETAIL"]}
                </div>
              </div>
            </div>
        </div>


        <div className="attractions">
          <span className="heading">{languageLocale["ATTRACTIONSINBALI"]}</span>

          <div className="destinationsDetail">
            {languageLocale["DISCOVERBEAUTIDETAIL"]}
          </div>
          <span className="tiles">
            <ImageTile src={process.env.PUBLIC_URL + '/images/attractions/small/attraction12.jpg'} />
            <ImageTile src={process.env.PUBLIC_URL + '/images/attractions/small/attraction13.jpg'} />
              <ImageTile src={process.env.PUBLIC_URL + '/images/attractions/small/attraction9.jpg'} />
          </span>
          <span className="tiles">
            <ImageTile src={process.env.PUBLIC_URL + '/images/attractions/small/attraction6.jpg'} />
            <ImageTile src={process.env.PUBLIC_URL + '/images/attractions/small/attraction7.jpg'} />
            <ImageTile src={process.env.PUBLIC_URL + '/images/attractions/small/attraction16.jpg'} />
          </span>
          <span className="tiles">
            <ImageTile src={process.env.PUBLIC_URL + '/images/attractions/small/attraction10.jpg'} />
            <ImageTile src={process.env.PUBLIC_URL + '/images/attractions/small/attraction11.jpg'} />
            <ImageTile src={process.env.PUBLIC_URL + '/images/attractions/small/attraction14.jpg'} />
          </span>
          <span className="tiles">

            <ImageTile src={process.env.PUBLIC_URL + '/images/attractions/small/attraction15.jpg'} />
            <ImageTile src={process.env.PUBLIC_URL + '/images/attractions/small/attraction2.jpg'} />
            <ImageTile src={process.env.PUBLIC_URL + '/images/attractions/small/attraction3.jpg'} />
          </span>
          <span className="tiles">
            <ImageTile src={process.env.PUBLIC_URL + '/images/attractions/small/attraction5.jpg'} />
            <ImageTile src={process.env.PUBLIC_URL + '/images/attractions/small/attraction6.jpg'} />
            <ImageTile src={process.env.PUBLIC_URL + '/images/attractions/small/attraction8.jpg'} />
          </span>



        </div>
      </div>
    </div>
  }
}
