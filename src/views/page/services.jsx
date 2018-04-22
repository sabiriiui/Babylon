import React from "react";
import ReactDOM from "react-dom";
import 'react-day-picker/lib/style.css';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import OffersPage from "./offers";


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

    let languageLocale = getLocale(DataStore.getLocale());
    let sent = (this.state.emailSent)?<span className="sentemail">{languageLocale["MAILSENTMESSAGE"]}</span>:"";

    return <div className="service_div">

      <div className="imageConatiner">
        <div className="bannerText">
          <span style={{display:"flex"}}>
            <div className="flexColumn">
              <span className="babylon"> {languageLocale["SERVICESLABEL"]} </span>

            </div>
          </span>

        </div>
        <img src={process.env.PUBLIC_URL + '/images/attractions/attraction13.jpg'} width="100%" height="100%"/>
      </div>

      <div className="services_body main_container">
        <div className="container"  style={{display:"none"}}>
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
        <div className="container" style={{display:"none"}}>
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

        <div className="container offers_container">
        <OffersPage/>
          <div className="container">
            <div className="heading_underline">{languageLocale["HOTEL"]}
            </div>
            <div className="hotelCauroselDiv">
              <Carousel showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} stopOnHover={false}>
                <div>
                  <img src={process.env.PUBLIC_URL + '/images/hotel/hotel1.jpg'}/>
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + '/images/hotel/hotel2.jpg'}/>
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + '/images/hotel/hotel3.jpg'}/>
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + '/images/hotel/hotel4.jpg'}/>
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + '/images/hotel/hotel5.jpg'}/>
                </div>
              </Carousel>
            </div>
          </div>
          <div className="container" style={{display:"none"}}>
            <div className="heading_underline">{languageLocale["TRANSPORT"]}
            </div>

            <div className="transportCauroselDiv">
              <Carousel
                style={{width:"40%"}}
                showStatus={false}
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                stopOnHover={false}>
                <div>
                  <img src={process.env.PUBLIC_URL + '/images/car/car1.png'}/>
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + '/images/car/car2.png'}/>
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + '/images/car/car3.png'}/>
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + '/images/car/car4.png'}/>
                </div>
              </Carousel>
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
                      <ReactPhoneInput ref={(ph)=>this.phone = ph} />
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
    </div>
  }

}
