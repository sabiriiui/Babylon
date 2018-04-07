import React from "react";
import ReactDOM from "react-dom";
import PakageTile from "../tile/pakageTile";
import Individual from '../../images/individual.jpg';
import { DataStore } from '../../stores/DataStore';
import {getLocale} from '../../Utils/commonUtilities.react';

export default class IndividualPage extends React.Component{

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

    return <div className = "individual_div">
      <div className="imageConatiner">
        <div className="bannerText">
          <span className="discover"> {languageLocale["INDIVIDUALTOURS"]}</span>
        </div>
        <img src={Individual} width="100%" height="100%"/>
      </div>

      <div className="pakagesContainer">
        <div className="ourtours">
          <span className="heading">{languageLocale["STAYATHOTEL"]}</span>
          <span className="tiles">
            <PakageTile header="standard"
              cssName="clayTile"
              renderDetails={()=>this.renderDetails("individual","hotel","standard")}
              handleSeeDetails={()=>this.seeDetails("individual","hotel","standard")}/>
            <PakageTile header="premium"
              cssName="greenTile"
              renderDetails={()=>this.renderDetails("individual","hotel","premium")}
              handleSeeDetails={()=>this.seeDetails("individual","hotel","premium")}/>
            <PakageTile header="luxury"
              cssName="pinkTile"
              renderDetails={()=>this.renderDetails("individual","hotel","luxury")}
              handleSeeDetails={()=>this.seeDetails("individual","hotel","luxury")}/>

          </span>
        </div>
        <div className="attractions">
          <span className="heading">{languageLocale["STAYATVILLA"]}</span>
          <span className="tiles">
            <PakageTile header="premium"
              cssName="greenTile"
              renderDetails={()=>this.renderDetails("individual","villa","premium")}
              handleSeeDetails={()=>this.seeDetails("individual","villa","premium")}/>
            <PakageTile header="luxury"
              cssName="pinkTile"
              renderDetails={()=>this.renderDetails("individual","villa","luxury")}
              handleSeeDetails={()=>this.seeDetails("individual","villa","luxury")}/>
          </span>
        </div>
      </div>
    </div>
    
  }


}
