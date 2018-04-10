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

import BaliPage from "./page/bali.jsx";
import BandungPage from "./page/bandung.jsx";
import GilisPage from "./page/gilis.jsx";
import JakartaPage from "./page/jakarta.jsx";
import KomodoPage from "./page/komodo.jsx";
import LombokPage from "./page/lombok.jsx";
import PuncakPage from "./page/puncak.jsx";

import { DataStore } from '../stores/DataStore';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as Locale from '../constants/LanguageConstants';
import AppActions from "../actions/AppActions";
import {getLocale} from '../Utils/commonUtilities.react';
import Footer from './footer.react';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class App extends React.Component {

  constructor() {

    super();
    this.state = {
      renderSplashscreen: true,
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
                  <span className="appNameSpan">{languageLocale['BABYLONHOLIDAYS']}</span>
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

              <Route path="/bali" component={BaliPage} />
              <Route path="/bandung" component={BandungPage} />
              <Route path="/gilis" component={GilisPage} />
              <Route path="/jakarta" component={JakartaPage} />
              <Route path="/komodo" component={KomodoPage} />
              <Route path="/lombok" component={LombokPage} />
              <Route path="/puncak" component={PuncakPage} />

            </div>

            <Footer />

          </div>
        </Router>);
  }


}
