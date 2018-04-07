import React from "react";
import ReactDOM from "react-dom";
import ServicesImage from '../../images/services.jpg';
import 'react-day-picker/lib/style.css';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

import Hotel1 from '../../images/hotel/hotel1.jpg';
import Hotel2 from '../../images/hotel/hotel2.jpg';
import Hotel3 from '../../images/hotel/hotel3.jpg';
import Hotel4 from '../../images/hotel/hotel4.jpg';
import Hotel5 from '../../images/hotel/hotel5.jpg';

import Car1 from '../../images/car/car1.jpg';
import Car2 from '../../images/car/car2.jpg';
import Car3 from '../../images/car/car3.jpg';
import Car4 from '../../images/car/car4.jpg';
import Car5 from '../../images/car/car5.png';

import {DataStore} from '../../stores/DataStore';
import {getLocale} from '../../Utils/commonUtilities.react';

import ReactPhoneInput from 'react-phone-input-2';

var Carousel = require('react-responsive-carousel').Carousel;
export default class ServicesPage extends React.Component {

  constructor() {

    super();
    this.phone = "";
    this.state = {
      emailSent: false
    };

  }

  componentDidMount() {
    if (this.state.emailSent) {
      setTimeout(() => {
        this.setState({emailSent: false});
      }, 5000);
    }
  }

  componentDidUpdate() {
    if (this.state.emailSent) {
      setTimeout(() => {
        this.setState({emailSent: false});
      }, 5000);
    }
  }

  onSubmit(e) {
    e.preventDefault();
    let form = document.getElementById("servicesForm").firstElementChild;
    let el = document.createElement("input");
    el.type = "hidden";
    el.name = "phone";
    el.value = this.phone.state.formattedNumber;
    form.appendChild(el);
    this.setState({emailSent: true});
    return true;
  }

  render() {
    let {tourType, stayAt, stayType} = {
      tourType: "honeymoon",
      stayAt: "hotel",
      stayType: "luxury"
    };
    if (this.props.location && this.props.location.state) {
      tourType = this.props.location.state.tourType;
      stayAt = this.props.location.state.stayAt;
      stayType = this.props.location.state.stayType;

    }

    let bcrumb = <div className="breadcrumb">
      <span>home</span>
      <span className="reverse">></span>
      <span>tours</span>
      <span className="reverse">></span>
      <span>{tourType + " tours"}</span>
      <span className="reverse">></span>
      <span>{"stay at " + stayAt}</span>
      <span className="reverse">></span>
      <span>{stayType}</span>
    </div>;

    let title = stayType + " " + tourType + " tours";

    let languageLocale = getLocale(DataStore.getLocale());
    let sent = (this.state.emailSent)?<span className="sentemail">{languageLocale["MAILSENTMESSAGE"]}</span>:"";

    return <div className="service_div">
      <div className="imageConatiner">
        <div className="bannerText">
          <span className="discover">
            {title}
          </span>
        </div>
        <img src={ServicesImage} width="100%" height="100%"/>
      </div>
      <div className="services_body">
        {bcrumb}

        <div className="container">
          <div className="heading_underline">{languageLocale["HIGHLIGHTS"]}
          </div>
          <div className="highlightsDiv flexColumn children_marginD10">
            <div className="flexRow">
              <span className="icon"></span>
              <span>{languageLocale["HONEYMOONSUITAT5STARHOTEL"]}</span>
            </div>
            <div className="flexRow">
              <span className="icon"></span>
              <span>{languageLocale["DAYS7NIGHTS6"]}</span>
            </div>
            <div className="flexRow">
              <span className="icon"></span>
              <span>{languageLocale["BREAKFASTDINNER"]}</span>
            </div>
            <div className="flexRow">
              <span className="icon"></span>
              <span>{languageLocale["COMFORTABLECARWITHDRIVER"]}</span>
            </div>

          </div>
        </div>

        <div className="container">
          <div className="heading_underline">{languageLocale["HOTEL"]}
          </div>
          <div className="hotelCauroselDiv">
            <Carousel showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} stopOnHover={false}>
              <div>
                <img src={Hotel1}/>
              </div>
              <div>
                <img src={Hotel2}/>
              </div>
              <div>
                <img src={Hotel3}/>
              </div>
              <div>
                <img src={Hotel4}/>
              </div>
              <div>
                <img src={Hotel5}/>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="container">
          <div className="heading_underline">{languageLocale["TRANSPORT"]}
          </div>

          <div className="transportCauroselDiv">
            <Carousel
              showStatus={false}
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              stopOnHover={false}>
              <div>
                <img src={Car1}/>
                <img src={Car2}/>
              </div>
              <div>
                <img src={Car2}/>
              </div>
              <div>
                <img src={Car3}/>
              </div>
              <div>
                <img src={Car4}/>
              </div>
              <div>
                <img src={Car5}/>
              </div>
            </Carousel>
          </div>

        </div>

        <div className="container">
          <div className="heading_underline">itinerary
          </div>

          <div className="itineraryDiv children_marginD10">

            <div className="flexRow">
              <span className="day_count">Day 1:
              </span>
              <span>
                Jakarta - City Tour</span>
            </div>
            <div className="flexRow">
              <span className="day_count">Day 2:
              </span>
              <span>
                Pangandaran - Green Canyon and local industries tour
              </span>
            </div>
            <div className="flexRow">
              <span className="day_count">Day 3:
              </span>
              <span>
                Boat Tour</span>
            </div>
            <div className="flexRow">
              <span className="day_count">Day 4:
              </span>
              <span>
                Yogakarta - Borobudur temple complex tour
              </span>
            </div>
            <div className="flexRow">
              <span className="day_count">Day 5:
              </span>
              <span>
                Yogakarta - cycling tour</span>
            </div>
            <div className="flexRow">
              <span className="day_count">Day 6:
              </span>
              <span>
                Seloliman - PPLH Guided village and rice terrace walk
              </span>
            </div>
            <div className="flexRow">
              <span className="day_count">Day 7:
              </span>
              <span>
                Mt Bromo - Sunrise climb, Coffee, cocoa and rubber plantation tour
              </span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="heading_underline">book your tour now
          </div>
          <div className="formContainer" id="servicesForm">
            <Form onSubmit={this.onSubmit.bind(this)} action="http://babylonholidays.com/cgi-bin/bluemail" enctype="multipart/form-data" method="POST">
              <FormGroup tag="fieldset">
                <FormGroup>
                  <Label for="nameField">{languageLocale["FORMNAME"]}</Label>
                  <Input type="text" name="name" id="nameField" placeholder="" required="required"/>
                </FormGroup>
                <FormGroup>
                  <Label for="phoneField">{languageLocale["PHONENUMBER"]}</Label>
                  <ReactPhoneInput ref={(ph)=>this.phone = ph} defaultCountry={'pk'} regions={['america', 'europe', 'asia', 'oceania', 'africa']}/>
                </FormGroup>
                <FormGroup>
                  <Label for="emailField">{languageLocale["FORMEMAIL"]}</Label>
                  <Input type="email" name="email" id="emailField" placeholder="" required="required"/>
                </FormGroup>
              </FormGroup>
              {sent}
              <input type="Submit" className="btn btn-lg product-button" value={languageLocale["BOOKNOW"]}></input>

            </Form>
          </div>
        </div>
      </div>
    </div>
  }

}
