import React from "react";
import { Link } from "react-router-dom";
export default class ImageInfoTile extends React.Component{

    constructor(){
        super();
    }


    render(){
        let footer = (this.props.info && this.props.link)?<div className="footer">
          <Link to={"/"+this.props.link}> <span>{this.props.info}</span> </Link>
        </div>:"";
        return <div className="tile_infoContainer"><div className="image_tileContainer">
                <div className="image">
                  <img width="100%" height="100%" src={this.props.src} />
                </div>
                {footer}
            </div>
            <div className="infoDetailContainer">
            <div className="infoTileHead">
              <div className="infoTileCaption">Hello to the fairy World.</div>
              <div className="infoTilePriceLabel">From</div>

            </div>
            <div className="infoTilePrice">$2700</div>
            <div className="infoTileBody">to the vast place where no one can detect the benifit of this economy</div>
            <div className="lineSeparator"></div>
            <div className="infoDetails">
              <div className="infoDays">6DAYS-6NIGHTS</div>
              <div className="infoMore">More info</div>
            </div>

            </div>
          </div>

    }

}
