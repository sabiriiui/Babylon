import DataConstants from "../constants/AppConstants";
import EventEmitter from "events";
import AppDispatcher from "../dispatcher/AppDispatcher";
let CHANGE_EVENT = "change";

export default class DataStoreClass extends  EventEmitter{

    constructor() {
        super();
        this.locale = "English";
        console.log("Selected language : " + this.locale);
        this.tours = [
          {
            id: '/bali',
            type:"bali",
            pakages:[
              {
                id:'1',
                price: "200$",
                locale_title: "BALI_1_TITLE",
                locale_stay: "BALI_1_STAY",
                locale_Description: "BALI_1_DESCRIPTION",
                locale_Detail: "BALI_1_DETAIL",
                src: "../../images/main.jpg",
                images : [
                  "src/images/attractions/attraction11.jpg",
                  "src/images/attractions/attraction12.jpg",
                  "src/images/attractions/attraction13.jpg",
                ]

              },{
                id:'2',
                price: "200$",
                locale_title: "BALI_2_TITLE",
                locale_stay: "BALI_2_STAY",
                locale_Description: "BALI_2_DESCRIPTION",
                locale_Detail: "BALI_2_DETAIL",
                src: "../../images/main.jpg",
                images : [
                  "src/images/attractions/attraction11.jpg",
                  "src/images/attractions/attraction12.jpg",
                  "src/images/attractions/attraction13.jpg",
                ]
              },
              {
                id:'3',
                price: "200$",
                locale_title: "BALI_1_TITLE",
                locale_stay: "BALI_1_STAY",
                locale_Description: "BALI_1_DESCRIPTION",
                locale_Detail: "BALI_1_DETAIL",
                src: "../../images/main.jpg",
                images : [
                  "src/images/attractions/attraction11.jpg",
                  "src/images/attractions/attraction12.jpg",
                  "src/images/attractions/attraction13.jpg",
                ]

              },{
                id:'4',
                price: "200$",
                locale_title: "BALI_2_TITLE",
                locale_stay: "BALI_2_STAY",
                locale_Description: "BALI_2_DESCRIPTION",
                locale_Detail: "BALI_2_DETAIL",
                src: "../../images/main.jpg",
                images : [
                  "src/images/attractions/attraction11.jpg",
                  "src/images/attractions/attraction12.jpg",
                  "src/images/attractions/attraction13.jpg",
                ]
              }
            ]
          },
          {
            id: '/gilis',
            type:"gilis",
            pakages:[
              {
                id:'1',
                price: "200$",
                locale_title: "GILIS_1_TITLE",
                locale_stay: "GILIS_1_STAY",
                locale_Description: "GILIS_1_DESCRIPTION",
                locale_Detail: "GILIS_1_DETAIL",
                src: "../../images/main.jpg",
                images : [
                  "src/images/attractions/attraction11.jpg",
                  "src/images/attractions/attraction12.jpg",
                  "src/images/attractions/attraction13.jpg",
                ]

              },{
                id:'2',
                price: "200$",
                locale_title: "GILIS_2_TITLE",
                locale_stay: "GILIS_2_STAY",
                locale_Description: "GILIS_2_DESCRIPTION",
                locale_Detail: "GILIS_2_DETAIL",
                src: "../../images/main.jpg",
                images : [
                  "src/images/attractions/attraction11.jpg",
                  "src/images/attractions/attraction12.jpg",
                  "src/images/attractions/attraction13.jpg",
                ]
              }
            ]
          },

        ]
    }


    getTours(){
      return this.tours;
    }

    getTourPakages(tourId){
      let t = this.getTourById(tourId);
      if(t){
        return t.pakages;
      }
      return [];
    }

    getTourPakageById(tourId, pakageId){
      let tourPakages = this.getTourPakages(tourId);
      let tpkg = tourPakages.filter(tp=>tp.id == pakageId);
      if(tpkg.length > 0){
        return tpkg[0];
      }
      else{
        return null;
      }
    }

    getTourById(id){
      let t =  this.tours.filter(t=> t.id == id);
      if(t.length > 0){
        return t[0];
      }
      else{
        return null;
      }
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
