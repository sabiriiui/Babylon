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
            locale_title:"BALI",
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
                ],
                

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
                locale_title: "BALI_3_TITLE",
                locale_stay: "BALI_3_STAY",
                locale_Description: "BALI_3_DESCRIPTION",
                locale_Detail: "BALI_3_DETAIL",
                src: "../../images/main.jpg",
                images : [
                  "src/images/attractions/attraction11.jpg",
                  "src/images/attractions/attraction12.jpg",
                  "src/images/attractions/attraction13.jpg",
                ]

              },{
                id:'4',
                price: "200$",
                locale_title: "BALI_4_TITLE",
                locale_stay: "BALI_4_STAY",
                locale_Description: "BALI_4_DESCRIPTION",
                locale_Detail: "BALI_4_DETAIL",
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
            locale_title:"GILIS",
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
              },{
                id:'3',
                price: "200$",
                locale_title: "GILIS_3_TITLE",
                locale_stay: "GILIS_3_STAY",
                locale_Description: "GILIS_3_DESCRIPTION",
                locale_Detail: "GILIS_3_DETAIL",
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
            id: '/lombok',
            type:"lombok",
            locale_title:"LOMBOK",
            pakages:[
              {
                id:'1',
                price: "200$",
                locale_title: "LOMBOK_1_TITLE",
                locale_stay: "LOMBOK_1_STAY",
                locale_Description: "LOMBOK_1_DESCRIPTION",
                locale_Detail: "LOMBOK_1_DETAIL",
                src: "../../images/main.jpg",
                images : [
                  "src/images/attractions/attraction11.jpg",
                  "src/images/attractions/attraction12.jpg",
                  "src/images/attractions/attraction13.jpg",
                ]

              },{
                id:'2',
                price: "200$",
                locale_title: "LOMBOK_2_TITLE",
                locale_stay: "LOMBOK_2_STAY",
                locale_Description: "LOMBOK_2_DESCRIPTION",
                locale_Detail: "LOMBOK_2_DETAIL",
                src: "../../images/main.jpg",
                images : [
                  "src/images/attractions/attraction11.jpg",
                  "src/images/attractions/attraction12.jpg",
                  "src/images/attractions/attraction13.jpg",
                ]
              },{
                id:'3',
                price: "200$",
                locale_title: "LOMBOK_3_TITLE",
                locale_stay: "LOMBOK_3_STAY",
                locale_Description: "LOMBOK_3_DESCRIPTION",
                locale_Detail: "LOMBOK_3_DETAIL",
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
            id: '/jakarta',
            type:"jakarta",
            locale_title:"JAKARTA",
            pakages:[
              {
                id:'1',
                price: "200$",
                locale_title: "JAKARTA_1_TITLE",
                locale_stay: "JAKARTA_1_STAY",
                locale_Description: "JAKARTA_1_DESCRIPTION",
                locale_Detail: "JAKARTA_1_DETAIL",
                src: "../../images/main.jpg",
                images : [
                  "src/images/attractions/attraction11.jpg",
                  "src/images/attractions/attraction12.jpg",
                  "src/images/attractions/attraction13.jpg",
                ]

              },{
                id:'2',
                price: "200$",
                locale_title: "JAKARTA_2_TITLE",
                locale_stay: "JAKARTA_2_STAY",
                locale_Description: "JAKARTA_2_DESCRIPTION",
                locale_Detail: "JAKARTA_2_DETAIL",
                src: "../../images/main.jpg",
                images : [
                  "src/images/attractions/attraction11.jpg",
                  "src/images/attractions/attraction12.jpg",
                  "src/images/attractions/attraction13.jpg",
                ]
              },{
                id:'3',
                price: "200$",
                locale_title: "JAKARTA_3_TITLE",
                locale_stay: "JAKARTA_3_STAY",
                locale_Description: "JAKARTA_3_DESCRIPTION",
                locale_Detail: "JAKARTA_3_DETAIL",
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
            id: '/puncak',
            type:"puncak",
            locale_title:"PUNCAK",
            pakages:[
              {
                id:'1',
                price: "200$",
                locale_title: "PUNCAK_1_TITLE",
                locale_stay: "PUNCAK_1_STAY",
                locale_Description: "PUNCAK_1_DESCRIPTION",
                locale_Detail: "PUNCAK_1_DETAIL",
                src: "../../images/main.jpg",
                images : [
                  "src/images/attractions/attraction11.jpg",
                  "src/images/attractions/attraction12.jpg",
                  "src/images/attractions/attraction13.jpg",
                ]

              },{
                id:'2',
                price: "200$",
                locale_title: "PUNCAK_2_TITLE",
                locale_stay: "PUNCAK_2_STAY",
                locale_Description: "PUNCAK_2_DESCRIPTION",
                locale_Detail: "PUNCAK_2_DETAIL",
                src: "../../images/main.jpg",
                images : [
                  "src/images/attractions/attraction11.jpg",
                  "src/images/attractions/attraction12.jpg",
                  "src/images/attractions/attraction13.jpg",
                ]
              },{
                id:'3',
                price: "200$",
                locale_title: "PUNCAK_3_TITLE",
                locale_stay: "PUNCAK_3_STAY",
                locale_Description: "PUNCAK_3_DESCRIPTION",
                locale_Detail: "PUNCAK_3_DETAIL",
                src: "../../images/main.jpg",
                images : [
                  "src/images/attractions/attraction11.jpg",
                  "src/images/attractions/attraction12.jpg",
                  "src/images/attractions/attraction13.jpg",
                ]
              }
            ]
          },  {
              id: '/bandung',
              type:"bandung",
              locale_title:"BANDUNG",
              pakages:[
                {
                  id:'1',
                  price: "200$",
                  locale_title: "BANDUNG_1_TITLE",
                  locale_stay: "BANDUNG_1_STAY",
                  locale_Description: "BANDUNG_1_DESCRIPTION",
                  locale_Detail: "BANDUNG_1_DETAIL",
                  src: "../../images/main.jpg",
                  images : [
                    "src/images/attractions/attraction11.jpg",
                    "src/images/attractions/attraction12.jpg",
                    "src/images/attractions/attraction13.jpg",
                  ]

                },{
                  id:'2',
                  price: "200$",
                  locale_title: "BANDUNG_2_TITLE",
                  locale_stay: "BANDUNG_2_STAY",
                  locale_Description: "BANDUNG_2_DESCRIPTION",
                  locale_Detail: "BANDUNG_2_DETAIL",
                  src: "../../images/main.jpg",
                  images : [
                    "src/images/attractions/attraction11.jpg",
                    "src/images/attractions/attraction12.jpg",
                    "src/images/attractions/attraction13.jpg",
                  ]
                },{
                  id:'3',
                  price: "200$",
                  locale_title: "BANDUNG_3_TITLE",
                  locale_stay: "BANDUNG_3_STAY",
                  locale_Description: "BANDUNG_3_DESCRIPTION",
                  locale_Detail: "BANDUNG_3_DETAIL",
                  src: "../../images/main.jpg",
                  images : [
                    "src/images/attractions/attraction11.jpg",
                    "src/images/attractions/attraction12.jpg",
                    "src/images/attractions/attraction13.jpg",
                  ]
                }
              ]
            },{
                id: '/komodo',
                type:"komodo",
                locale_title:"KOMODO",
                pakages:[
                  {
                    id:'1',
                    price: "200$",
                    locale_title: "KOMODO_1_TITLE",
                    locale_stay: "KOMODO_1_STAY",
                    locale_Description: "KOMODO_1_DESCRIPTION",
                    locale_Detail: "KOMODO_1_DETAIL",
                    src: "../../images/main.jpg",
                    images : [
                      "src/images/attractions/attraction11.jpg",
                      "src/images/attractions/attraction12.jpg",
                      "src/images/attractions/attraction13.jpg",
                    ]

                  },{
                    id:'2',
                    price: "200$",
                    locale_title: "KOMODO_2_TITLE",
                    locale_stay: "KOMODO_2_STAY",
                    locale_Description: "KOMODO_2_DESCRIPTION",
                    locale_Detail: "KOMODO_2_DETAIL",
                    src: "../../images/main.jpg",
                    images : [
                      "src/images/attractions/attraction11.jpg",
                      "src/images/attractions/attraction12.jpg",
                      "src/images/attractions/attraction13.jpg",
                    ]
                  },{
                    id:'3',
                    price: "200$",
                    locale_title: "KOMODO_3_TITLE",
                    locale_stay: "KOMODO_3_STAY",
                    locale_Description: "KOMODO_3_DESCRIPTION",
                    locale_Detail: "KOMODO_3_DETAIL",
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
