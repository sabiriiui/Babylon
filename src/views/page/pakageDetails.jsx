import React from "react";
import ReactDOM from "react-dom";
import PakageTile from "../tile/pakageTile";
import { DataStore } from '../../stores/DataStore';
import { getLocale } from '../../Utils/commonUtilities.react';

import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';
import AnchorLink from 'react-anchor-link-smooth-scroll';

var Carousel = require('react-responsive-carousel').Carousel;

const coords = {

  lat: -8.790699,
  lng: 115.213319
};

const params = {
  v: '3.exp',
  key: 'AIzaSyCG8mbqdhbHdJ7PKg5p-gWoFsrqc2NbvrQ'
};


export default class TourDetailPage extends React.Component {


  constructor() {

    super();

    this.state = {fixedMenu: false}
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    let menuNode = document.getElementById('description-menu');
    if (menuNode && menuNode.getBoundingClientRect().top < 95) {
      this.setState({ fixedMenu: true });
    }
    let desc = document.getElementById('description')
    if (desc && desc.getBoundingClientRect().top > 150){
      this.setState({ fixedMenu: false });
    }
    console.log("Scrolling");

  }

  onMapCreated(map) {
    map.setOptions({ disableDefaultUI: false });
  }

  getData(pakage){

    let languageLocale = getLocale(DataStore.getLocale());
    return {
      title: languageLocale[pakage.locale_title],
      stayTime: languageLocale[pakage.locale_stay],
      categoryText: languageLocale[pakage.locale_caegory_text],
      descriptionText1: languageLocale[pakage.locale_description_text_1],
      descriptionText2: languageLocale[pakage.locale_description_text_2],
      descriptionText3: languageLocale[pakage.locale_description_text_3],
      descriptionText4: languageLocale[pakage.locale_description_text_4],
      day1: languageLocale[pakage.locale_day_1_dep_1],
      day2:  languageLocale[pakage.locale_day_2_dep_1],
      day3:  languageLocale[pakage.locale_day_3_dep_1],
      day4:  languageLocale[pakage.locale_day_4_dep_1],
      day5:  languageLocale[pakage.locale_day_5_dep_1],
      tableh1: languageLocale[pakage.locale_table_H1],
      tableh2: languageLocale[pakage.locale_table_H2],
      tableh3: languageLocale[pakage.locale_table_H3],
      tableh4: languageLocale[pakage.locale_table_H4],
      tableh1d:  languageLocale[pakage.locale_table_H1D],
      tableh2d:  languageLocale[pakage.locale_table_H2D],
      tableh3d1: languageLocale[pakage.locale_table_H3D1],
      tableh3d2: languageLocale[pakage.locale_table_H3D2],
      tableh3d3: languageLocale[pakage.locale_table_H3D3],
      tableh3d4: languageLocale[pakage.locale_table_H3D4],
      tableh4d1: languageLocale[pakage.locale_table_H4D1],
      tableh4d2: languageLocale[pakage.locale_table_H4D2]

    }
  }

  render() {

    let languageLocale = getLocale(DataStore.getLocale());

    let menuStyle = (this.state.fixedMenu) ? {position:"fixed",top:"0px",paddingLeft:"7%",width:"100%"} : {};
    let extraDiv = (this.state.fixedMenu) ? <div style={{height:"53px",display:"inline-block",width:"100%",marginBottom: "30px"}}></div> : "";

    let path = this.props.location.pathname; // /bali:1
    if(path.charAt(0) == "/"){
      path = path.substr(1)
    }
    let pArr = path.split("/");
    let tourId = "";
    let pakageId = "";
    if(pArr.length == 2){
      tourId = "/"+pArr[0];
      pakageId = pArr[1];
    }else{
      return "";
    }
    let pakage = DataStore.getTourPakageById(tourId,pakageId);
    let pakageInfo = this.getData(pakage);
    let carouselImgs = pakage.images.map(imgSrc=>{
      return (
        <div>
          <img src={process.env.PUBLIC_URL + '/images/'+imgSrc} />
        </div>
      );
    });


    let daysSchedual = [];
    for(let i=1;i<=pakage.days;i++){
      daysSchedual.push(
        <div class="interary-item">
          <p><span class="icon-left">{i}</span></p>
          <div class="item_content">
            <h2><strong>{languageLocale["DAY"]} {i}: {languageLocale["DEPARTURE"]}</strong></h2>
            <p>{pakageInfo["day"+i]}</p>
          </div>
        </div>
      );
    }
    return <div className="individual_div">

      <div className="main_container">
        <div className="left_container floatLeft bordered">
          <div className>
            {/*<h1>{pakageInfo.title}</h1>*/}
            <h1>{pakage.locale_title}</h1>
          </div>
          <hr style={{ marginBottom: "30px", marginTop: "10px" }} />
          <div className="tour_carousel">
            <div className="stay_time_category_socail">
              <div className="stay_details_div">
                <i class="fa fa-alarm-clock"></i>
                <span>{pakageInfo.stayTime}</span>
              </div>
              <div className="stay_details_div textAlignLeft">
                <span><i class="fa fa-tag" style={{ color: "#ffb300", fontSize: "18px" }}></i></span>
                <span>{languageLocale["CATEGORY"]}</span>
                <span style={{ display: "block" }}>{pakageInfo.categoryText}</span>
              </div>
              <div className="stay_details_div textAlignRight">

                <a target="_blank" className="social-buttons facebook"
                  href="https://www.facebook.com/babylonholidays" onclick="javascript:window.open(this.href, &quot;&quot;, &quot;menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600&quot;);return false;"><i class="fa fa-facebook"></i></a>
                <a target="_blank" className="social-buttons twitter"
                  href="https://twitter.com/Babylonholidays" onclick="javascript:window.open(this.href, &quot;&quot;, &quot;menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600&quot;);return false;"><i class="fa fa-twitter"></i></a>
                <a target="_blank" className="social-buttons instagram"
                    href="https://www.instagram.com/babylonholidays" onclick="javascript:window.open(this.href, &quot;&quot;, &quot;menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600&quot;);return false;"><i class="fa fa-instagram"></i></a>

            </div>
            </div>
          </div>
          <div className="bordered fullWidth floatLeft" style={{ marginTop: "30px" }}>
            <Carousel showThumbs={true} showArrows={true}
            >{carouselImgs}
            </Carousel>
          </div>

          <div id="description-menu" style={menuStyle} className="details-navigation fullWidth floatLeft mb30 fixed-menu" ref="detailNavigation">
            <span><AnchorLink offset="180" href="#description">{languageLocale["DESCRIPTION"]}</AnchorLink></span>
            <span><AnchorLink offset="140" href="#itinerary">{languageLocale["ITINERARY"]}</AnchorLink></span>
            <span><AnchorLink offset="180" href="#location">{languageLocale["LOCATION"]}</AnchorLink></span>
          </div>
          {extraDiv}
          <div id="description" className="floatLeft fullWidth">
            <h2 className="title-list-content">{languageLocale["DESCRIPTION"]}</h2>
          </div>
          <div  className="floatLeft fullWidth" style={{ marginBottom: "30px" }}>
            <p>{pakageInfo.descriptionText1}</p>
            <p>{pakageInfo.descriptionText2}</p>
          </div>
          <table class="tours-tabs_table mb30">
            <tbody>
              <tr>
                <td><strong>{pakageInfo.tableh1}</strong></td>
                <td>{pakageInfo.tableh1d}</td>
              </tr>
              <tr>
                <td><strong>{pakageInfo.tableh2}</strong></td>
                <td>{pakageInfo.tableh2d}</td>
              </tr>
              <tr>
                <td><strong>{pakageInfo.tableh3}</strong></td>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td className="noBorder"><i class="fa fa-check icon-tick icon-tick--on"></i>{pakageInfo.tableh3d1}</td>
                        <td className="noBorder"><i class="fa fa-check icon-tick icon-tick--on"></i>{pakageInfo.tableh3d2}</td>
                      </tr>
                      <tr>
                        <td className="noBorder"><i class="fa fa-check icon-tick icon-tick--on"></i>{pakageInfo.tableh3d3}</td>
                        <td className="noBorder"><i class="fa fa-check icon-tick icon-tick--on"></i>{pakageInfo.tableh3d4}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td><b>{pakageInfo.tableh4}</b></td>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td className="noBorder"><i class="fa fa-times icon-tick icon-tick--off"></i>{pakageInfo.tableh4d1}</td>
                      </tr>
                      <tr>
                        <td className="noBorder"><i class="fa fa-times icon-tick icon-tick--off"></i>{pakageInfo.tableh4d2}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="floatLeft fullWidth">
            <p>{pakageInfo.descriptionText3}</p>
            <p>{pakageInfo.descriptionText4}</p>
          </div>
          <div id="itinerary" className="fullWidth floatLeft">
            <h2 className="title-list-content">{languageLocale["ITINERARY"]}</h2>
          </div>
          <div className="fullWidth floatLeft mb30">
            <div content="content-inner">
              {daysSchedual}
            {/*  <div class="interary-item">
                <p><span class="icon-left">1</span></p>
                <div class="item_content">
                  <h2><strong>{languageLocale["DAY"]} 1: {languageLocale["DEPARTURE"]}</strong></h2>
                  <p>{pakageInfo.day1}</p>
                </div>
              </div>
              <div class="interary-item">
                <p><span class="icon-left">2</span></p>
                <div class="item_content">
                  <h2><strong>{languageLocale["DAY"]} 2</strong></h2>
                  <p>{pakageInfo.day2}</p>
                </div>
              </div>
              <div class="interary-item">
                <p><span class="icon-left">3</span></p>
                <div class="item_content">
                  <h2><strong>{languageLocale["DAY"]} 3</strong></h2>
                  <p>{pakageInfo.day3}</p>
                </div>
              </div>
              <div class="interary-item">
                <p><span class="icon-left">4</span></p>
                <div class="item_content">
                  <h2><strong>{languageLocale["DAY"]} 4</strong></h2>
                  <p>{pakageInfo.day4}</p>
                </div>
              </div>
              <div class="interary-item">
                <p><span class="icon-left">5</span></p>
                <div class="item_content">
                  <h2><strong>{languageLocale["DAY"]} 5</strong></h2>
                  <p>{pakageInfo.day5}</p></div>
              </div>
              <div class="interary-item">
                <p><span class="icon-left">6</span></p>
                <div class="item_content">
                  <h2><strong>{languageLocale["DAY"]} 6: {languageLocale["RETURN"]}</strong></h2>
                </div>
              </div>
              */}

            </div>
          </div>
          <div id="location" className="fullWidth floatLeft">
            <h2 className="title-list-content">{languageLocale["LOCATION"]}</h2>
          </div>
          <div className="fullWidth floatLeft">
            <Gmaps width={'100%'} height={'60vh'} lat={coords.lat} lng={coords.lng} zoom={17} loadingMessage={'loading...'} params={params} onMapCreated={this.onMapCreated}>
              <Marker lat={coords.lat} lng={coords.lng} draggable={true} onDragEnd={this.onDragEnd} />
            </Gmaps>
          </div>
        </div>
        <div className="right_container floatLeft bordered">

        </div>
      </div>

    </div>

  }


}
