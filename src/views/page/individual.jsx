import React from "react";
import ReactDOM from "react-dom";
import PakageTile from "../tile/pakageTile";
import Individual from '../../images/individual.jpg';
import { DataStore } from '../../stores/DataStore';
import { getLocale } from '../../Utils/commonUtilities.react';

import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';

import Attraction1 from '../../images/attractions/attraction10.jpg';
import Attraction2 from '../../images/attractions/attraction13.jpg';
import Attraction3 from '../../images/attractions/attraction14.jpg';

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


export default class IndividualPage extends React.Component {

  constructor() {

    super();

    this.state = this.getState();
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

  getState() {
 
    let languageLocale = getLocale(DataStore.getLocale()); 
    return {
      fixedMenu: false,
      title: languageLocale["INDIVIDUAL_TITLE"],
      stayTime: languageLocale["INDIVIDUAL_STAY_TIME"],
      categoryText: languageLocale["INIDVIDUAL_CAEGORY_TEXT"],
      descriptionText1: languageLocale["INIDIVIDUAL_DESCRIPTION_TEXT_1"],
      descriptionText2: languageLocale["INIDIVIDUAL_DESCRIPTION_TEXT_2"],
      descriptionText3: languageLocale["INIDIVIDUAL_DESCRIPTION_TEXT_3"],
      descriptionText4: languageLocale["INIDIVIDUAL_DESCRIPTION_TEXT_4"],
      day1departure1: languageLocale["INDIVIDUAL_DAY_1_DEP_1"],
      day1departure2: languageLocale["INDIVIDUAL_DAY_1_DEP_2"],
      day1departurep1:languageLocale["INDIVIDUAL_DAY_1_DEP_P1"],
      day1departurep2:languageLocale["INDIVIDUAL_DAY_1_DEP_P2"],
      day1departurep3:languageLocale["INDIVIDUAL_DAY_1_DEP_P3"],
      day1departurep4:languageLocale["INDIVIDUAL_DAY_1_DEP_P4"],
      day2departure:  languageLocale["INDIVIDUAL_DAY_2_DEP_1"],
      day3departure:  languageLocale["INDIVIDUAL_DAY_3_DEP_1"],
      day4departure:  languageLocale["INDIVIDUAL_DAY_4_DEP_1"],
      day5departure:  languageLocale["INDIVIDUAL_DAY_5_DEP_1"],
      tableh1: languageLocale["INDIVIDUAL_TABLE_H1"],
      tableh2: languageLocale["INDIVIDUAL_TABLE_H2"],
      tableh3: languageLocale["INDIVIDUAL_TABLE_H3"],
      tableh4: languageLocale["INDIVIDUAL_TABLE_H4"],
      tableh1d:  languageLocale["INDIVIDUAL_TABLE_H1D"],
      tableh2d:  languageLocale["INDIVIDUAL_TABLE_H2D"],
      tableh3d1: languageLocale["INDIVIDUAL_TABLE_H3D1"],
      tableh3d2: languageLocale["INDIVIDUAL_TABLE_H3D2"],
      tableh3d3: languageLocale["INDIVIDUAL_TABLE_H3D3"],
      tableh3d4: languageLocale["INDIVIDUAL_TABLE_H3D4"],
      tableh4d1: languageLocale["INDIVIDUAL_TABLE_H4D1"],
      tableh4d2: languageLocale["INDIVIDUAL_TABLE_H4D2"]

    }
  }


  renderDetails(tourType, stayAt, stayType) {
    let pakageDetails = "";
    if (stayAt == "hotel") {
      if (stayType == "standard") {
        pakageDetails = <span>
          > 3 star hotel <br /><br /><br /><br />


          "100$"

        </span>;
      } else if (stayType == "premium") {
        pakageDetails = <span>
          > 4 star hotel <br />
          > Car<br /><br /><br /><br />

          "200$"

          </span>;;
      } else if (stayType == "luxury") {
        pakageDetails = <span>
          > 5 star hotel <br />
          > Car with driver <br />
          > Swiming pool <br /><br /><br /><br />


          "700$"
        </span>;
      }
    } else if (stayAt == "villa") {
      if (stayType == "premium") {
        pakageDetails = <span>
          > 5 star hotel <br />
          > Car with driver <br />
          > Swiming pool <br /><br /><br /><br />


          "700$"
        </span>;
      } else if (stayType == "luxury") {
        pakageDetails = <span>
          > 5 star hotel <br />
          > Car with driver <br />
          > Swiming pool <br /><br /><br /><br />


          "700$"
        </span>;
      }
    }
    if (tourType) {
      return (
        <div>
          <div className="list">
            {pakageDetails}
          </div>
          <div className="rate">
          </div>
        </div>
      );
    }
  }

  seeDetails(tourType, stayAt, stayType) {
    this.props.history.push({
      pathname: '/services',
      state: { tourType, stayAt, stayType }
    });
  }

  render() {

    let languageLocale = getLocale(DataStore.getLocale());

    let menuStyle = (this.state.fixedMenu) ? {position:"fixed",top:"0px",paddingLeft:"7%",width:"100%"} : {};
    let extraDiv = (this.state.fixedMenu) ? <div style={{height:"53px",display:"inline-block",width:"100%",marginBottom: "30px"}}></div> : "";

    return <div className="individual_div">
      {/*<div className="imageConatiner">
        <div className="bannerText">
          <span className="discover"> {languageLocale["INDIVIDUALTOURS"]}</span>
        </div>
        <img src={Attraction2} width="100%" height="100%" />
      </div>*/}

      <div className="main_container">
        <div className="left_container floatLeft bordered">
          <div className>
            <h1>{this.state.title}</h1>
          </div>
          <hr style={{ marginBottom: "30px", marginTop: "10px" }} />
          <div className="tour_carousel">
            <div className="stay_time_category_socail">
              <div className="stay_details_div">
                <i class="fa fa-alarm-clock"></i>
                <span>{this.state.stayTime}</span>
              </div>
              <div className="stay_details_div textAlignLeft">
                <span><i class="fa fa-tag" style={{ color: "#ffb300", fontSize: "18px" }}></i></span>
                <span>{languageLocale["CATEGORY"]}</span>
                <span style={{ display: "block" }}>{this.state.categoryText}</span>
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
            >
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
            <p>{this.state.descriptionText1}</p>
            <p>{this.state.descriptionText2}</p>
          </div>
          <table class="tours-tabs_table mb30">
            <tbody>
              <tr>
                <td><strong>{this.state.tableh1}</strong></td>
                <td>{this.state.tableh1d}</td>
              </tr>
              <tr>
                <td><strong>{this.state.tableh2}</strong></td>
                <td>{this.state.tableh2d}</td>
              </tr>
              <tr>
                <td><strong>{this.state.tableh3}</strong></td>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td className="noBorder"><i class="fa fa-check icon-tick icon-tick--on"></i>{this.state.tableh3d1}</td>
                        <td className="noBorder"><i class="fa fa-check icon-tick icon-tick--on"></i>{this.state.tableh3d2}</td>
                      </tr>
                      <tr>
                        <td className="noBorder"><i class="fa fa-check icon-tick icon-tick--on"></i>{this.state.tableh3d3}</td>
                        <td className="noBorder"><i class="fa fa-check icon-tick icon-tick--on"></i>{this.state.tableh3d4}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td><b>{this.state.tableh4}</b></td>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td className="noBorder"><i class="fa fa-times icon-tick icon-tick--off"></i>{this.state.tableh4d1}</td>
                      </tr>
                      <tr>
                        <td className="noBorder"><i class="fa fa-times icon-tick icon-tick--off"></i>{this.state.tableh4d2}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="floatLeft fullWidth">
            <p>{this.state.descriptionText3}</p>
            <p>{this.state.descriptionText4}</p>
          </div>
          <div id="itinerary" className="fullWidth floatLeft">
            <h2 className="title-list-content">{languageLocale["ITINERARY"]}</h2>
          </div>
          <div className="fullWidth floatLeft mb30">
            <div content="content-inner"><div class="interary-item">
              <p><span class="icon-left">1</span></p>
              <div class="item_content">
                <h2><strong>{languageLocale["DAY"]} 1: {languageLocale["DEPARTURE"]}</strong></h2>
                <p>{this.state.day1departure1}.<br />
                  {this.state.day1departure2}</p>
                <ul>
                  <li>{this.state.day1departurep1}</li>
                  <li>{this.state.day1departurep2}</li>
                  <li>{this.state.day1departurep3}</li>
                  <li>{this.state.day1departurep4}</li>
                </ul>
              </div>
            </div>
              <div class="interary-item">
                <p><span class="icon-left">2</span></p>
                <div class="item_content">
                  <h2><strong>{languageLocale["DAY"]} 2</strong></h2>
                  <p>{this.state.day2departure}</p>
                </div>
              </div>
              <div class="interary-item">
                <p><span class="icon-left">3</span></p>
                <div class="item_content">
                  <h2><strong>{languageLocale["DAY"]} 3</strong></h2>
                  <p>{this.state.day3departure}</p>
                </div>
              </div>
              <div class="interary-item">
                <p><span class="icon-left">4</span></p>
                <div class="item_content">
                  <h2><strong>{languageLocale["DAY"]} 4</strong></h2>
                  <p>{this.state.day4departure}</p>
                </div>
              </div>
              <div class="interary-item">
                <p><span class="icon-left">5</span></p>
                <div class="item_content">
                  <h2><strong>{languageLocale["DAY"]} 5</strong></h2>
                  <p>{this.state.day5departure}</p></div>
              </div>
              <div class="interary-item">
                <p><span class="icon-left">6</span></p>
                <div class="item_content">
                  <h2><strong>{languageLocale["DAY"]} 6: {languageLocale["RETURN"]}</strong></h2>
                </div>
              </div>
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


      {/* <div className="pakagesContainer">
        <div className="ourtours">
          <span className="heading">{languageLocale["STAYATHOTEL"]}</span>
          <span className="tiles">
            <PakageTile header="standard"
              cssName="clayTile"
              renderDetails={()=>this.renderDetails("individual","hotel","standard")}
              handleSeeDetails={()=>this.seeDetails("individual","hotel","standard")}/>
            <PakageTile header="premium"
              cssName="greenTile"
              renderDetails={()=>this.renderDetails("individual","hotel","premium")}
              handleSeeDetails={()=>this.seeDetails("individual","hotel","premium")}/>
            <PakageTile header="luxury"
              cssName="pinkTile"
              renderDetails={()=>this.renderDetails("individual","hotel","luxury")}
              handleSeeDetails={()=>this.seeDetails("individual","hotel","luxury")}/>

          </span>
        </div>
        <div className="attractions">
          <span className="heading">{languageLocale["STAYATVILLA"]}</span>
          <span className="tiles">
            <PakageTile header="premium"
              cssName="greenTile"
              renderDetails={()=>this.renderDetails("individual","villa","premium")}
              handleSeeDetails={()=>this.seeDetails("individual","villa","premium")}/>
            <PakageTile header="luxury"
              cssName="pinkTile"
              renderDetails={()=>this.renderDetails("individual","villa","luxury")}
              handleSeeDetails={()=>this.seeDetails("individual","villa","luxury")}/>
          </span>
        </div>
      </div> */}
    </div>

  }


}
