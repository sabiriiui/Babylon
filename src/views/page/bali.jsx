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



export default class BaliPage extends React.Component {



  render() {
    let languageLocale = getLocale(DataStore.getLocale());
    return (
      <div className="siteInfo">
        <div className="headingInfo">Site Info</div>
        <span className="infoTiles">
          <ImageTile src={Attraction1} info="individual"/>
          <ImageTile src={Attraction1} info="individual"/>
          <ImageTile src={Attraction1} info="individual"/>
          <ImageTile src={Attraction1} info="individual"/>
          <ImageTile src={Attraction1} info="individual"/>

        </span>
      </div>
    );

  }

//hello hhh
}
