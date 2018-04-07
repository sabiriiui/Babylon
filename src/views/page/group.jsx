import React from "react";
import ReactDOM from "react-dom";
import GroupImage from '../../images/group.jpg';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { DataStore } from '../../stores/DataStore';
import {getLocale} from '../../Utils/commonUtilities.react';
import ReactPhoneInput from 'react-phone-input-2';


export default class GroupPage extends React.Component {

  constructor() {

    super();
    this.phone = "";
    this.fromDate = "";
    this.toDate = "";
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

  hanldeSubmit(e){
    e.preventDefault();
    let form = document.getElementById("groupForm").firstElementChild;
    let ph = document.createElement("input");
    let fDate = document.createElement("input");
    let toDate = document.createElement("input");
    ph.type = fDate.type = toDate.type ="hidden";
    ph.name = "phone";
    ph.value = this.phone.state.formattedNumber;

    fDate.name = "From Date";
    fDate.value = this.fromDate.state.value;

    toDate.name = "To Date";
    toDate.value = this.toDate.state.value;

    form.appendChild(ph);
    form.appendChild(fDate);
    form.appendChild(toDate);
    this.setState({emailSent: true});
    return true;
  }


  render() {

    let languageLocale = getLocale(DataStore.getLocale());
    let sent = (this.state.emailSent)?<span className="sentemail">{languageLocale["MAILSENTMESSAGE"]}</span>:"";

    return <div className="group_div">
      <div className="imageConatiner">
        <div className="bannerText">
          <span className="discover"> {languageLocale["GROUPTOURS"]}</span>
        </div>
        <img src={GroupImage} width="100%" height="100%" />
      </div>
      <div className="formContainer"  id="groupForm">
        <Form onSubmit={this.hanldeSubmit.bind(this)} action="http://babylonholidays.com/cgi-bin/bluemail" enctype="multipart/form-data" method="POST">

        <FormGroup tag="fieldset">
          <legend>{languageLocale["WHEREDOYOUWANTTOSTAY"]}</legend>
          <div className="flexRow">
            <FormGroup>
              <Label>
                <Input type="radio" name="stayAt" value="hotel"/>{' '}
                <span style={{paddingLeft:"20px"}}>{languageLocale["HOTEL"]}</span>
              </Label>
            </FormGroup>
            <FormGroup>
              <Label>
                <Input type="radio" name="stayAt" value="villa"/>{' '}
                <span style={{paddingLeft:"20px"}}>{languageLocale["VILLA"]}</span>
              </Label>
            </FormGroup>
          </div>
        </FormGroup>


        <FormGroup tag="fieldset">
          <div className="flexRow">
          <FormGroup>
            <Label>
              <Input type="radio" name="venu" value="5 Star"/>{' '}
              <span style={{paddingLeft:"20px"}}>{languageLocale["FIVESTAR"]}</span>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              <Input type="radio" name="venu"  value="4 Star"/>{' '}
              <span style={{paddingLeft:"20px"}}>{languageLocale["FOURSTAR"]}</span>
            </Label>
          </FormGroup>

          <FormGroup>
            <Label>
              <Input type="radio" name="venu"  value="3 Star"/>{' '}
              <span style={{paddingLeft:"20px"}}>{languageLocale["THREESTAR"]}</span>
            </Label>
          </FormGroup>
        </div>
        </FormGroup>

        <FormGroup tag="fieldset">

          <FormGroup>
            <Label className="marginR7" for="daysField">{languageLocale["NOOFDAYS"]}</Label>
            <Input type="text" name="days" id="daysField" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label className="marginR7" for="personsField">{languageLocale["NOOFPERSONS"]}</Label>
            <Input type="text" name="Persons" id="personsField" placeholder="" />
          </FormGroup>

          </FormGroup>

        <FormGroup tag="fieldset">
          <legend>{languageLocale["WHENDOYOUWANTTOTRAVEL"]}</legend>
          <FormGroup>
            <Label for="fromDate">{languageLocale["FROM"]}</Label>
              <DayPickerInput ref = {(value)=>this.fromDate = value}/>
          </FormGroup>
          <FormGroup>
            <Label for="toDate">{languageLocale["TO"]}</Label>
            <DayPickerInput ref = {(value)=>this.toDate = value}/>
          </FormGroup>
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>{languageLocale["CONACTINFORMATION"]}</legend>
          <FormGroup>
            <Label for="nameField">{languageLocale["FORMNAME"]}</Label>
            <Input type="text" name="name" id="nameField" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="phoneField">{languageLocale["PHONENUMBER"]}</Label>
              <ReactPhoneInput
                ref = {(ph)=>this.phone = ph}
                defaultCountry={'pk'}
                regions={['america', 'europe', 'asia', 'oceania', 'africa']}
              />
          </FormGroup>
          <FormGroup>
            <Label for="emailField">{languageLocale["FORMEMAIL"]}</Label>
            <Input type="email" name="email" id="emailField" placeholder="" />
          </FormGroup>
        </FormGroup>
        {sent}
        <input type="Submit"
          className="btn btn-lg product-button"
          value={languageLocale["ENQUIRENOW"]}>
        </input>

      </Form>
    </div>
    </div>
  }


}
