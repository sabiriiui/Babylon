import React from "react";
import ReactDOM from "react-dom";
import PakageTile from "../tile/pakageTile";
import {getLocale} from '../../Utils/commonUtilities.react';
import { DataStore } from '../../stores/DataStore';
import ImageTile from "../tile/imageInfoTile";



export default class PakagesPage extends React.Component {

  seeDetails(tourId,pakageId) {
    this.props.history.push({
      pathname: tourId+'/'+pakageId,
    });
  }

  render() {
    let tourId = this.props.location.pathname;
    let languageLocale = getLocale(DataStore.getLocale());
    let tour = DataStore.getTourById(tourId);
    let pakages = tour.pakages.map((pkg,i)=>{
      return  <ImageTile
                  info={pkg}
                  moreInfo={()=>this.seeDetails(tourId,pkg.id)}/>;
              });

    return (
      <div className="siteInfo">
        <div className="headingInfo">{languageLocale[tour.locale_title]}</div>
        <span className="infoTiles">
          {pakages}
        </span>
      </div>
    );

  }

//hello hhh
}
