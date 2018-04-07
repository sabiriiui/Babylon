import React from "react";
import { Link } from "react-router-dom";
export default class ImageTile extends React.Component{

    constructor(){
        super();
    }


    render(){
        let footer = (this.props.info && this.props.link)?<div className="footer">
          <Link to={"/"+this.props.link}> <span>{this.props.info}</span> </Link>
        </div>:"";
        return <div className="image_tileContainer">
                <div className="image">
                  <img width="100%" height="100%" src={this.props.src} />
                </div>
                {footer}
            </div>
    }

}
