import React from "react";
import MenuItem from './menuitem';
import MenuConfig from "./menuConfig";
import { Link } from "react-router-dom";
import * as Locale from '../../constants/LanguageConstants';
import AppActions from "../../actions/AppActions";
import { DataStore } from '../../stores/DataStore';
import { getLocale } from '../../Utils/commonUtilities.react';

export default class MenuBar extends React.Component {

    constructor() {
        super();
        this.state = {
            menuToDisplay: ""
        };

    }

    getMenu(menuItems) {
        if (menuItems.length == 0)
            return "";

        let languageLocale = getLocale(DataStore.getLocale());
        let menu = menuItems.map(item => {
            let menu = undefined;
            if (item.menu != undefined) {
                menu = this.getMenu(item.menu);
            }  
            return <MenuItem
                name={languageLocale[item.name.toUpperCase()]}
                shortDescription={item.shortDescription}
                className={item.iconClass}
                link={item.link} 
                innerMenu={menu}
            /> 
        });
        return menu;
    }

    mouseEnter(menuToDisplay) {
        this.setState({
            menuToDisplay: menuToDisplay
        });
    }

    mouseLeave(menuToDisplay) {
        this.setState({
            menuToDisplay: ""
        });
    }


    render() {
        let languageLocale = getLocale(DataStore.getLocale());

        let menuItems = MenuConfig.getMenuJSON().data.items;
        let menubar = menuItems.map((elem) => {
            let id = elem.id;
            let itemli = <li className="navigation-item dropdown-content" onMouseEnter={() => this.mouseEnter(id)} onMouseLeave={() => this.mouseLeave()} >
                <div style={{ display: "flex" }}>
                    <span>{languageLocale[elem.id.toUpperCase()]}</span>
                    {elem.menu.length == 0 ? "" : <span style={{ marginLeft: "3px" }} className="fa fa-caret-down"></span>}
                </div>
                {this.state.menuToDisplay == elem.id ? <span className="navigation-menu">{this.getMenu(elem.menu)} </span> : ""}
            </li>;
            let res = (elem.link != undefined) ? (<Link to={"/" + elem.link}> {itemli} </Link>) : itemli;
            return res;
        });


        return <ul className="menubar dropbtn"> {menubar} </ul>;
    }

}
