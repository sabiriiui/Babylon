import React from "react";
import ReactDOM from "react-dom";
import MenuItem from './menu/menuitem';
import MenuBar from './menu/menubar';
import Logo from '../images/logo.png';

import HomePage from "./page/home.jsx";
import IndividualPage from "./page/individual.jsx";
import HoneymoonPage from "./page/honeymoon.jsx";
import GroupPage from "./page/group.jsx"; 
// import ServicesPage from "./page/services.jsx";
import ContactusPage from "./page/contactus.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class App extends React.Component {

  constructor() {

    super();
    //selectedPage = home | tours/indevidual | tours/honeymoon | tours/group | contactus | services
    this.state = {
      renderSplashscreen: true,
      backgroundColor: ""
    }

  }

  componentDidMount() {
    setTimeout(() => this.setState({ backgroundColor: "#fafafa" }), 1000);
    setTimeout(() => this.setState({ renderSplashscreen: false }), 5000);
  }

  getStyle(){
    let style = { width: "100%", height: "100vh", position: "absolute", zIndex: "100" };
    if(this.state.backgroundColor != ""){
      style = { width: "100%", height: "100vh", position: "absolute", zIndex: "100", background:"#000" };
    }
    return  style ;
  }

  render() {
    let developerInfo = ""
    let result = "";

    if (this.state.renderSplashscreen)
      return <div className="colorChangeAnimation" style={this.getStyle()}>
        <span className="splashlogo">
          <img src={Logo} width="300px" />
        </span>
      </div>
    else
      return (
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <div id="bali" style={{ width: "100%", height: "100%" }}>

            <div className="container-fluid navigation-container">
              <span className="logo">
                <img src={Logo} width="140px" />
              </span>
              <span className="menubarContainer"><MenuBar /></span>
            </div>

            <div className="app_body_div">
              <Route exact path="/home" component={HomePage} />
              <Route path="/individual" component={IndividualPage} />
              <Route path="/group" component={GroupPage} />
              <Route path="/honeymoon" component={HoneymoonPage} />
              <Route path="/contactus" component={ContactusPage} />
            </div>
            <div className="app_footer">
              <span className="contactus"> Contact with us on</span>
              <span className="footer_icons">
                <span className="fa fa-facebook"></span>
                <span className="fa fa-twitter"></span>
                <span className="fa fa-google"></span>
                <span className="fa fa-skype"></span>
              </span>
              <span className="copyright"> Copyright @ 2018 Babylon holidays, All rights reserved</span>
            </div>

          </div>
        </Router>);
  }


}
