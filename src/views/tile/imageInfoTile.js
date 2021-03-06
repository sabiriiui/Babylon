import React from "react";
import { Link } from "react-router-dom";
export default class ImageInfoTile extends React.Component{

    constructor(){
        super();
    }


    render(){
        let {info,moreInfo} = this.props;
        return <div className="tile_infoContainer">
            <div className="image_tileContainer" onClick={moreInfo.bind(this)}>
                <div className="image">
                  <img width="100%" height="100%" src={process.env.PUBLIC_URL + '/images/'+info.src} />
                </div>
            </div>
            <div className="infoDetailContainer">
            <div className="infoTileHead">
              <div className="infoTileCaption">{info.locale_title}</div>
              <div className="infoTilePriceLabel">Price</div>

            </div>
            <div className="infoTilePrice">{info.price}</div>
            <div className="infoTileBody">{info.locale_Description}</div>
            <div className="lineSeparator"></div>
            <div className="infoDetails">
              <div className="infoDays">{info.locale_stay}</div>
              <div className="infoMore" onClick={moreInfo.bind(this)}>More info</div>
            </div>

            </div>
          </div>

    }

}
