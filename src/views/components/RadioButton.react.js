import React from "react";
import ReactDOM from "react-dom";  

/**
 *
 * This class is simple checkbox control.
 *
 * @class Checkbox
 *
 */
export default class RadioButton extends React.Component {

  constructor() {

      super();
      this.id="";
      this.rName = "radio";
      this.state = { value: undefined };
  }

 handleRadioButtonChange(event){

        let radiobuttons = document.getElementsByName(this.rName);
        let ids = Object.keys(radiobuttons);
        let rValue = false;
        let rChecked = false;
        for(let i = 0; i < ids.length; i++){

            if(radiobuttons[i].checked){

                rValue = radiobuttons[i].value;
                if(this.state.value == rValue) return;

                if(this.props.onChange){
                    this.props.onChange(radiobuttons[i].value);
                }
            }

        }
        this.state.value = rValue;
        this.setState(this.state);

  }

  componentWillMount() {

    this.state = {value:this.props.value};

  }

  componentWillReceiveProps(nextProps) {

    this.state = {value:nextProps.value};

  }

  getLabelComponent(index){ 
    return this.props.displayItems[index];
  }

   addRadioButton(){

    let radiobuttons=[];
    let displayItems=this.props.displayItems;
    let values=this.props.values;
    let displayComps = this.props.childComponents;
    

    this.rName = this.props.rName? this.props.rName: "radio";
    let numItems = displayComps?Object.keys(displayComps):Object.keys(displayItems);

    for(let i =0; i < numItems.length; i++){
        let disabled = false;
        let disableRCssClass = "";
        let disableRadioLblCssClass = "";

        let cssClass = "radiobuttonInput " + (this.props.rCssClass? this.props.rCssClass: "");

        if(this.props.disabledValues){
            let itm = this.props.disabledValues.filter(item=>item.itemName == values[numItems[i]])
            if(itm.length>0){
                disabled = itm[0].disabled;
                if(disabled){
                    disableRCssClass = "disableRCssClass";
                    disableRadioLblCssClass = "disableRadioLblCssClass";
                }
            }
        }
        this.id = ("radioButton" + parseInt(Math.random() * 10000) + new Date().toISOString()).replace(/(-|\.|:)/g,"");
        let checked = false;
        if(this.state.value == values[numItems[i]] ) {
            checked = true;
        }
        let buttonComp;
        let buttonLabel
        
        if(displayItems){
            buttonLabel = <label
            className={"radiobuttonLabel " + disableRadioLblCssClass}
            value = {displayItems[numItems[i]]} >
            </label>;
        }
        if(displayComps){
            buttonComp = this.getLabelComponent(i);
        }
        
        
        radiobuttons.push(
                  <div className= {cssClass}>
                    <input
                      id = {this.id}
                      className= {"hidden-radioButton " + disableRCssClass}
                      type="radio"
                      name ={this.rName}
                      value={values[numItems[i]]}
                      onChange={this.handleRadioButtonChange.bind(this)}
                      checked= {checked}
                      disabled = {disabled}
                    />
                    <label for={this.id}
                           id={this.id}/>
                  {buttonLabel}
                   {buttonComp} 
                </div>);
    }

    return radiobuttons;
  }

  render() {
    let styles ={};
    if(this.props.visible!= undefined && !this.props.visible){
          styles = {"display": "none"};
    }
      let radiobuttons= this.addRadioButton();
      let cssClass = "radiobutton ";
       cssClass+= this.props.cssClass ? this.props.cssClass :"";
       let disable = null;
      if(this.props.disable){
         let overlayCssClass = "dropDownOverlay " + this.props.overlayCss;
          disable = <div className = {overlayCssClass}/>;
      }
      return (
          <div className = { cssClass }  style={styles}>
          <div className="overlayContainer">
              {disable}
              {radiobuttons}
          </div>
          </div>
      );

  }

}
