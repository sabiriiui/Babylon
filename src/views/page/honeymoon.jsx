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


export default class HoneymoonPage extends React.Component {

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

    let language = DataStore.getLocale();
    let isEnglish = (language == "English")
    return {
      fixedMenu: false,
      title: (isEnglish) ? "Discover Bali" : "",
      stayTime: (isEnglish) ? "5 DAYS - 4 NIGHTS" : "",
      categoryText: (isEnglish) ? "ESCORTED TOUR, RAIL TOUR" : "",
      descriptionText1: (isEnglish) ? "Mattis interdum nunc massa. Velit. Nonummy penatibus luctus. Aliquam. Massa aptent senectus elementum taciti.Id sodales morbi felis eu mus auctor ullamcorper. Litora. In nostra tempus, habitant. Nam tristique." : "",
      descriptionText2: (isEnglish) ? "Felis venenatis metus placerat taciti malesuada ultricies bibendum nunc hymenaeos orci erat mollis pretium ligula ligulamus pellentesque urna. Sagittis bibendum justo congue facilisi. Aliquam potenti sagittis etiam facilisis vehicula. Id." : "",
      descriptionText3: (isEnglish) ? "Ridiculus sociis dui eu vivamus tempor justo diam aliquam. Ipsum nunc purus, pede sed placerat sit habitasse potenti eleifend magna mus sociosqu hymenaeos cras metus mi donec tortor nisi leo dignissim turpis sit torquent." : "",
      descriptionText4: (isEnglish) ? "Potenti mattis ad mollis eleifend Phasellus adipiscing ullamcorper interdum faucibus orci litora ornare aliquam. Ligula feugiat scelerisque. Molestie. Facilisi hac." : "",
      day1departure1: (isEnglish) ? "Ornare proin neque tempus cubilia cubilia blandit netus." : "",
      day1departure2: (isEnglish) ? "Maecenas massa. Fermentum." : "",
      day1departurep1: (isEnglish) ? "Pretium vitae tempus sem enim enim." : "",
      day1departurep2: (isEnglish) ? "Tempus, leo, taciti augue aliquam hendrerit." : "",
      day1departurep3: (isEnglish) ? "Accumsan pharetra eros justo augue posuere felis elit cras montes fames." : "",
      day1departurep4: (isEnglish) ? "Vulputate dictumst egestas etiam dictum varius." : "",
      day2departure: (isEnglish) ? "Tortor elementum egestas metus potenti habitasse tempus natoque senectus commodo rutrum quisque fermentum. Nisi velit primis dapibus odio consequat facilisi sollicitudin porta nulla tellus sagittis platea tempor sed parturient convallis consectetuer Vulputate curae; pharetra." : "",
      day3departure: (isEnglish) ? "Fusce sagittis viverra lorem proin porttitor conubia risus vivamus. Mollis. Luctus curabitur porta nibh penatibus aliquet nec conubia magnis semper, sem feugiat scelerisque molestie. Nibh proin dapibus phasellus lacus. Facilisi." : "",
      day4departure: (isEnglish) ? "Pretium consequat, facilisis sem in malesuada sodales et ipsum proin eleifend tincidunt, urna morbi metus quisque. Lacinia habitasse ridiculus sapien platea a cursus hendrerit tempor facilisi orci at tempor, senectus." : "",
      day5departure: (isEnglish) ? "Egestas maecenas hac nullam integer at. Lacinia habitasse ridiculus sapien platea a cursus hendrerit tempor facilisi orci at tempor, senectus." : "",
      tableh1: (isEnglish) ? "DEPARTURE/RETURN LOCATION" : "",
      tableh2: (isEnglish) ? "DEPARTURE TIME" : "",
      tableh3: (isEnglish) ? "INCLUDED" : "",
      tableh4: (isEnglish) ? "NOT INCLUDED" : "",
      tableh1d: (isEnglish) ? "San Francisco International Airport" : "",
      tableh2d: (isEnglish) ? "Please arrive at least 2 hours before the flight." : "",
      tableh3d1: (isEnglish) ? "Airfare" : "",
      tableh3d2: (isEnglish) ? "Accommodations" : "",
      tableh3d3: (isEnglish) ? "2 days cruise	" : "",
      tableh3d4: (isEnglish) ? "Professional guide" : "",
      tableh4d1: (isEnglish) ? "Entrance fees" : "",
      tableh4d2: (isEnglish) ? "Professional guide" : ""

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

    return <div className="honeymoon_div">
      {/*<div className="imageConatiner">
        <div className="bannerText">
          <span className="discover"> {languageLocale["HONEYMOONTOURS"]}</span>
        </div>
        <img src={Honeymoon} width="100%" height="100%" />
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
              <img src={process.env.PUBLIC_URL + '/images/main.jpg'} />
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + '/images/attractions/attraction10.jpg'} />
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + '/images/attractions/attraction13.jpg'} />
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + '/images/attractions/attraction14.jpg'} />
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
              renderDetails={()=>this.renderDetails("honeymoon","hotel","standard")}
              handleSeeDetails={()=>this.seeDetails("honeymoon","hotel","standard")}/>
            <PakageTile header="premium"
              cssName="greenTile"
              renderDetails={()=>this.renderDetails("honeymoon","hotel","premium")}
              handleSeeDetails={()=>this.seeDetails("honeymoon","hotel","premium")}/>
            <PakageTile header="luxury"
              cssName="pinkTile"
              renderDetails={()=>this.renderDetails("honeymoon","hotel","luxury")}
              handleSeeDetails={()=>this.seeDetails("honeymoon","hotel","luxury")}/>

          </span>
        </div>
        <div className="attractions">
          <span className="heading">{languageLocale["STAYATVILLA"]}</span>
          <span className="tiles">
            <PakageTile header="premium"
              cssName="greenTile"
              renderDetails={()=>this.renderDetails("honeymoon","villa","premium")}
              handleSeeDetails={()=>this.seeDetails("honeymoon","villa","premium")}/>
            <PakageTile header="luxury"
              cssName="pinkTile"
              renderDetails={()=>this.renderDetails("honeymoon","villa","luxury")}
              handleSeeDetails={()=>this.seeDetails("honeymoon","villa","luxury")}/>
          </span>
        </div>
      </div> */}
    </div>

  }


}
