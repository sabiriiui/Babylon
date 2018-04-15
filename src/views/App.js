import React from "react";
import ReactDOM from "react-dom";
import MenuItem from './menu/menuitem';
import MenuBar from './menu/menubar';
import Logo from '../images/logo.png';

import HomePage from "./page/home.jsx";
import IndividualPage from "./page/individual.jsx";
import HoneymoonPage from "./page/honeymoon.jsx";
import GroupPage from "./page/group.jsx";
import ServicesPage from "./page/services.jsx";
import ContactusPage from "./page/contactus.jsx";

import TourPakagesPage from "./page/pakages.jsx";
import TourDetailPage from "./page/pakageDetails.jsx";

import { DataStore } from '../stores/DataStore';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as Locale from '../constants/LanguageConstants';
import AppActions from "../actions/AppActions";
import {getLocale} from '../Utils/commonUtilities.react';
import Footer from './footer.react';



import Main from '../images/main.jpg';
import Single from '../images/single.jpg';
import Honeymoon from '../images/honeymoon.jpg';
import Group from '../images/group.jpg';

import WHYUS1 from '../images/chooseus1.png';
import WHYUS2 from '../images/chooseus2.png';
import WHYUS3 from '../images/chooseus3.png';
import Attraction1 from '../images/attractions/attraction16.jpg';
import Attraction2 from '../images/attractions/attraction2.jpg';
import Attraction3 from '../images/attractions/attraction3.jpg';
import Attraction4 from '../images/attractions/attraction5.jpg';
import Attraction5 from '../images/attractions/attraction4.jpg';
import Attraction6 from '../images/attractions/attraction6.jpg';
import Attraction7 from '../images/attractions/attraction7.jpg';
import Attraction8 from '../images/attractions/attraction8.jpg';
import Attraction9 from '../images/attractions/attraction9.jpg';

import Attraction10 from '../images/attractions/attraction10.jpg';
import Attraction11 from '../images/attractions/attraction11.jpg';
import Attraction12 from '../images/attractions/attraction12.jpg';

import Attraction13 from '../images/attractions/attraction13.jpg';
import Attraction14 from '../images/attractions/attraction14.jpg';
import Attraction15 from '../images/attractions/attraction15.jpg';
import Attraction16 from '../images/attractions/attraction1.jpg';


import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class App extends React.Component {

  constructor() {

    super();
    this.state = {
      renderSplashscreen: false,
      backgroundColor: "",
      dropdownOpen: false,
      displayLanguageMenu: false
    }

  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  componentDidMount() {
    setTimeout(() => this.setState({ backgroundColor: "#fafafa" }), 1000);
    setTimeout(() => this.setState({ renderSplashscreen: false }), 5000);

    document.addEventListener('click', this.handleClickOutside, true);
  }

  _onChange() {
    this.setState({});
  }

  handleClickOutside = (event) => {
    // const domNode = ReactDOM.findDOMNode(this);

    if (!(event.target.className.indexOf("languageMenuDiv") != -1) &&
        !(event.target.className.indexOf("language-menu-item") != -1)) {
      this.setState({
        displayLanguageMenu: false
      });
    }
  }

  componentWillMount() {
    DataStore.addChangeListener(this._onChange.bind(this));
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  getStyle() {
    let style={};
    if (this.state.backgroundColor != "") {
      style = { background: "#000" };
    }
    return style;
  }

  changeLanguage(language, event) {
    event.preventDefault();
    this.setState({
      displayLanguageMenu: false
    });
    let b = document.getElementById("bali");
    if (language.toUpperCase() == "ENGLISH") {
      b.classList.remove("arabic");
      AppActions.changeLocale("English");
    } else {
      b.classList.add("arabic");
      AppActions.changeLocale("Arabic");
    }
    // this.forceUpdate();
  }

  onLanguageMenuClicked() {
    this.setState({
      displayLanguageMenu: true
    });
  }

  render() {
    let languageLocale = getLocale(DataStore.getLocale());
    let developerInfo = ""
    let result = "";
    let tours = DataStore.getTours();
    let toursRouts = [];
    tours.map(t => {
      let p = t.id;
      toursRouts.push(<Route exact path={p} component={TourPakagesPage} />);
      t.pakages.map((pkg)=>{
        let p_det = t.id+":"+pkg.id;
        toursRouts.push(<Route exact path={p_det} component={TourDetailPage} />);

      });


    });

    if (this.state.renderSplashscreen)
      return <div className="colorChangeAnimation" style={this.getStyle()}>
        <span className="splashlogo">
          <img className="logoImg" src={Logo} width="300px" />
        </span>
      </div>
    else
      return (
        <Router>
          <div className="" id="bali" style={{ width: "100%", height: "100%" }}>


            <div className="container-fluid navigation-container">
              <Link to="/">
                <span className="logo">
                  <img className="logoImg" src={Logo} width="180px" height="90px" />
                  {/*<span className="appNameSpan">{languageLocale['BABYLONHOLIDAYS']}</span>*/}
                </span>
              </Link>
              <span className="menubarContainer"><MenuBar /></span>

              <span className="displayMenuSmall">

                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle.bind(this)}>
                  <DropdownToggle caret>
                    <div class="fa fa-bars"></div>
                  </DropdownToggle>
                  <DropdownMenu>
                    <Link to={"/home"} onClick={this.toggle.bind(this)}> <div className="dropdownMenuButton">Home </div> </Link>
                    <Link to={"/individual"} onClick={this.toggle.bind(this)}><div className="dropdownMenuButton"> Individual </div> </Link>
                    <Link to={"/honeymoon"} onClick={this.toggle.bind(this)}><div className="dropdownMenuButton"> Honeymoon </div> </Link>
                    <Link to={"/group"} onClick={this.toggle.bind(this)}><div className="dropdownMenuButton"> Group </div> </Link>
                    <Link to={"/services"} onClick={this.toggle.bind(this)}><div className="dropdownMenuButton"> Services</div> </Link>
                    <Link to={"/contactus"} onClick={this.toggle.bind(this)}><div className="dropdownMenuButton"> Contact Us   </div> </Link>
                  </DropdownMenu>
                </Dropdown>

              </span>
              <span className="floatRight flexRow" style={{ color: "#fff", fontSize: "10pt", fontWeight: "500" }}>
                <span onClick={this.onLanguageMenuClicked.bind(this)}  className="floatLeft language-display-div" ref="languageMenu">
                  {languageLocale['LANGUAGE']}
                  <i style={{marginLeft:"5px",marginRight:"5px"}} class="fa fa-caret-down"></i>
                </span>
              </span>

              {(this.state.displayLanguageMenu) ? <span style={{left:this.refs.languageMenu.offsetLeft+'px'}} className="language-dropdown">
                <span className="language-menu-item" style={{ paddingTop: "5px" }} onClick={this.changeLanguage.bind(this, "English")}> English </span>
                <span className="language-menu-item" style={{ paddingBottom: "5px" }} onClick={this.changeLanguage.bind(this, "Arabic")}> عربى </span>
              </span> : ""
              }
            </div>

            <div className="app_body_div">
              <Route exact path="/" component={HomePage} />
              <Route exact path="/home" component={HomePage} />
              <Route path="/individual" component={IndividualPage} />
              <Route path="/group" component={GroupPage} />
              <Route path="/honeymoon" component={HoneymoonPage} />
              <Route path="/contactus" component={ContactusPage} />
              <Route path="/services" component={ServicesPage} />

              {toursRouts}

            </div>

            <Footer />

          </div>
        </Router>);
  }


}
