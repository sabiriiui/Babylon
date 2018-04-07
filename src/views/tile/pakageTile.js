import React from "react";
import { DataStore } from '../../stores/DataStore';
import {getLocale} from '../../Utils/commonUtilities.react';

export default class PakageTile extends React.Component{

    constructor(){
        super();
    }


    render(){
        let languageLocale = getLocale(DataStore.getLocale());
        
        return <div className={"pakage_tileContainer "+this.props.cssName}>
                <div className="pkg_header">
                  <span>{languageLocale[this.props.header.toUpperCase()]}</span>
                </div>
                <div className="pkg_body">
                  {this.props.renderDetails()}
                </div>
                <div className="pkg_footer" onClick={this.props.handleSeeDetails.bind(this)}>
                  <span>{languageLocale["SEEDETAILS"]}</span>
                </div>
            </div>
    }

}
