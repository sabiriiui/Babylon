import React from "react";
// import ScaleUnitStepper

export default class ComponentIndex {

    getComponents(){

                return { 
                RadioButton: React.createFactory( require('./RadioButton.react') )                 
                };

    }

    getComponentByType(cType){
      return React.createFactory( require("./"+cType+".react") );
    }

};
