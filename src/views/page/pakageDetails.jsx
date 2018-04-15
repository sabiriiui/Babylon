import React from "react";
import ReactDOM from "react-dom";
import { DataStore } from '../../stores/DataStore';
import { getLocale } from '../../Utils/commonUtilities.react';

export default class TourDetailPage extends React.Component {


  render() {
    let languageLocale = getLocale(DataStore.getLocale());

    let path = this.props.location.pathname; // /bali:1
    let pArr = path.split(":");
    let tourId = "";
    let pakageId = "";
    if(pArr.length == 2){
      tourId = pArr[0];
      pakageId = pArr[1];
    }else{
      return "";
    }
    let pakage = DataStore.getTourPakageById(tourId,pakageId);

    return <div> {languageLocale[pakage.locale_Detail]} </div>;
  }

}
