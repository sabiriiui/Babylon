import DataConstants from "../constants/AppConstants";
import EventEmitter from "events";
import AppDispatcher from "../dispatcher/AppDispatcher";
let CHANGE_EVENT = "change";

export default class DataStoreClass extends  EventEmitter{

    constructor() {
        super();
        this.locale = "English";

    }

    getLocale(){
      return this.locale;
    }

    setLocale(lang){
      this.locale = lang;
      console.log(this.locale);
    }


    emitChange() {

      this.emit(CHANGE_EVENT);

  }

  addChangeListener(callback) {

      this.on(CHANGE_EVENT, callback);

  }

  removeChangeListener(callback) {

      this.removeListener(CHANGE_EVENT, callback);

  }
}
export const DataStore = new DataStoreClass();
DataStore.dispatchToken = AppDispatcher.register((action) => {

    switch (action.actionType) {

      case DataConstants.CHANGE_LOCALE:
        DataStore.setLocale(action.locale);
        DataStore.emitChange();
        break;
    }

});
