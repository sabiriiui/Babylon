import React from "react";
import ReactDOM from "react-dom";
import PakageTile from "../tile/pakageTile";
import Honeymoon from '../../images/honeymoon.jpg';
import { DataStore } from '../../stores/DataStore';
import {getLocale} from '../../Utils/commonUtilities.react';

export default class HoneymoonPage extends React.Component{

  constructor() {

      super();

  }


  renderDetails(tourType,stayAt,stayType){
    let pakageDetails =  "";
    if(stayAt =="hotel"){
      if(stayType =="standard"){
        pakageDetails = <span>
          > 3 star hotel <br/><br/><br/><br/>


          "100$"

        </span>;
      }else if(stayType =="premium"){
        pakageDetails = <span>
            > 4 star hotel <br/>
            > Car<br/><br/><br/><br/>

            "200$"

          </span>;;
      } else if(stayType =="luxury"){
        pakageDetails = <span>
          > 5 star hotel <br/>
          > Car with driver <br/>
          > Swiming pool <br/><br/><br/><br/>


          "700$"
        </span>;
      }
    }else if(stayAt =="villa"){
      if(stayType =="premium"){
        pakageDetails = <span>
          > 5 star hotel <br/>
          > Car with driver <br/>
          > Swiming pool <br/><br/><br/><br/>


          "700$"
        </span>;
      } else if(stayType =="luxury"){
        pakageDetails = <span>
          > 5 star hotel <br/>
          > Car with driver <br/>
          > Swiming pool <br/><br/><br/><br/>


          "700$"
        </span>;
      }
    }
    if(tourType){
      return (
        <div>
          <div className="list">
            {pakageDetails}
          </div>
          <div className="rate">
          </div>
        </div>
      );
    }
  }

  seeDetails(tourType,stayAt,stayType){
    this.props.history.push({
     pathname: '/services',
     state: {tourType,stayAt,stayType}
   });
  }

  render(){

    let languageLocale = getLocale(DataStore.getLocale());

    return <div className = "honeymoon_div">
      <div className="imageConatiner">
        <div className="bannerText">
          <span className="discover"> {languageLocale["HONEYMOONTOURS"]}</span>
        </div>
        <img src={Honeymoon} width="100%" height="100%"/>
      </div>

      <div className="pakagesContainer">
        <div className="ourtours">
          <span className="heading">{languageLocale["STAYATHOTEL"]}</span>
          <span className="tiles">
            <PakageTile header="standard"
              cssName="clayTile"
              renderDetails={()=>this.renderDetails("honeymoon","hotel","standard")}
              handleSeeDetails={()=>this.seeDetails("honeymoon","hotel","standard")}/>
            <PakageTile header="premium"
              cssName="greenTile"
              renderDetails={()=>this.renderDetails("honeymoon","hotel","premium")}
              handleSeeDetails={()=>this.seeDetails("honeymoon","hotel","premium")}/>
            <PakageTile header="luxury"
              cssName="pinkTile"
              renderDetails={()=>this.renderDetails("honeymoon","hotel","luxury")}
              handleSeeDetails={()=>this.seeDetails("honeymoon","hotel","luxury")}/>

          </span>
        </div>
        <div className="attractions">
          <span className="heading">{languageLocale["STAYATVILLA"]}</span>
          <span className="tiles">
            <PakageTile header="premium"
              cssName="greenTile"
              renderDetails={()=>this.renderDetails("honeymoon","villa","premium")}
              handleSeeDetails={()=>this.seeDetails("honeymoon","villa","premium")}/>
            <PakageTile header="luxury"
              cssName="pinkTile"
              renderDetails={()=>this.renderDetails("honeymoon","villa","luxury")}
              handleSeeDetails={()=>this.seeDetails("honeymoon","villa","luxury")}/>
          </span>
        </div>
      </div>
    </div>
  }


}
