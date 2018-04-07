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
  }

  hanldeSubmit(e){
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
    return true;
  }


  render() {

    let languageLocale = getLocale(DataStore.getLocale());

    return <div className="group_div">
      <div className="imageConatiner">
        <div className="bannerText">
          <span className="discover"> {languageLocale["GROUPTOURS"]}</span>
        </div>
        <img src={GroupImage} width="100%" height="100%" />
      </div>
      <div className="formContainer"  id="groupForm">
      <Form method="POST" action="https://formspree.io/info@babylonholidays.com">

        <FormGroup tag="fieldset">
          <legend>{languageLocale["WHEREDOYOUWANTTOSTAY"]}</legend>
          <div className="flexRow">
            <FormGroup Hotel>
              <Label Hotel>
                <Input type="radio" name="stayAt" />{' '}
                <span style={{paddingLeft:"20px"}}>{languageLocale["HOTEL"]}</span>
              </Label>
            </FormGroup>
            <FormGroup Villa>
              <Label Villa>
                <Input type="radio" name="stayAt" />{' '}
                <span style={{paddingLeft:"20px"}}>{languageLocale["VILLA"]}</span>
              </Label>
            </FormGroup>
          </div>
        </FormGroup>


        <FormGroup tag="fieldset">
          <div className="flexRow">
          <FormGroup check>
            <Label check>
              <Input type="radio" name="venu" />{' '}
              <span style={{paddingLeft:"20px"}}>{languageLocale["FIVESTAR"]}</span>
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="venu" />{' '}
              <span style={{paddingLeft:"20px"}}>{languageLocale["FOURSTAR"]}</span>
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input type="radio" name="venu" />{' '}
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

        <input type="Submit"
          className="btn btn-lg product-button"
          value={languageLocale["ENQUIRENOW"]}
          onClick={this.hanldeSubmit.bind(this)}>
        </input>

      </Form>
    </div>
    </div>
  }


}
