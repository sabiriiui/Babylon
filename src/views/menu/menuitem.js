import React from "react";
import { Link } from "react-router-dom";

export default class MenuItem extends React.Component {

    constructor() {
        super();
        this.state = {
            menuToDisplay: false
        }
    }

    mouseEnter(menuToDisplay) {
        this.setState({
            menuToDisplay: menuToDisplay
        });
    }

    mouseLeave(menuToDisplay) {
        // this.setState({
        //     menuToDisplay: ""
        // });
    }


    render() {

        let item = <div className="navigation-sub-item" >

            <div className="navigation-sub-item-icon" >
                <div style={{ marginTop: "50%" }}>
                    <span className={this.props.className}></span>
                </div>
            </div>

            <div className="navigation-sub-item-text" id={this.props.name} onMouseEnter={() => this.mouseEnter(this.props.name)} onMouseLeave={() => this.mouseLeave()}>
                <div className="navigation-sub-item-name" id={this.props.name}>
                    {this.props.name}
                    {(this.props.innerMenu) ? <i   class="fa fa-caret-right floatRight"></i> : ""}
                </div>
                <div className="navigation-sub-item-description" id={this.props.name}  >
                    {this.props.shortDescription}

                </div>

                {this.state.menuToDisplay == this.props.name ? (this.props.innerMenu) ?
                    <div style={{ position: "absolute",marginTop:"-28px", zIndex: "5", marginLeft: "180px" }}>
                        {this.props.innerMenu}
                    </div>
                    : ""
                    : ""
                }
            </div>



        </div>;
        return (this.props.link != undefined) ? (<Link to={"/" + this.props.link}> {item} </Link>) : item;
    }

}
