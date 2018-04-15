import React from "react";
import ReactDOM from "react-dom";
import PakageTile from "../tile/pakageTile";
import Bali from '../../images/attractions/attraction2.jpg';
import {getLocale} from '../../Utils/commonUtilities.react';
import Attraction1 from '../../images/attractions/attraction10.jpg';
import Attraction2 from '../../images/attractions/attraction13.jpg';
import Attraction3 from '../../images/attractions/attraction14.jpg';
import { DataStore } from '../../stores/DataStore';
import ImageTile from "../tile/imageInfoTile";



export default class PakagesPage extends React.Component {

  seeDetails(tourId,pakageId) {
    this.props.history.push({
      pathname: tourId+':'+pakageId,
    });
  }

  render() {
    let tourId = this.props.location.pathname;
    let languageLocale = getLocale(DataStore.getLocale());
    let Tours = DataStore.getTourPakages(tourId).map((pkg,i)=>{
      return  <ImageTile
                  info={pkg}
                  moreInfo={()=>this.seeDetails(tourId,pkg.id)}/>;
              });

    return (
      <div className="siteInfo">
        <div className="headingInfo">Site Info</div>
        <span className="infoTiles">
          {Tours}
        </span>
      </div>
    );

  }

//hello hhh
}
