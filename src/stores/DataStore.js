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
            details:"BALI_DETAIL",
            pakages:[
              {
                id:'1',
                price: "200$",
                days: 6,
                locale_title: "BALI_1_TITLE",
                locale_stay: "BALI_1_STAY",
                locale_Description: "BALI_1_DESCRIPTION",
                locale_Detail: "BALI_1_DETAIL",
                locale_caegory_text: "BALI_1_CAEGORY_TEXT",
                locale_description_text_1 : "BALI_1_DESCRIPTION_TEXT_1",
                locale_description_text_2 : "BALI_1_DESCRIPTION_TEXT_2",
                locale_description_text_3 : "BALI_1_DESCRIPTION_TEXT_3",
                locale_description_text_4 : "BALI_1_DESCRIPTION_TEXT_4",
                locale_day_1_dep_1 : "BALI_1_DAY_1_DEP_1",
                locale_day_2_dep_1 : "BALI_1_DAY_2_DEP_1",
                locale_day_3_dep_1 : "BALI_1_DAY_3_DEP_1",
                locale_day_4_dep_1 : "BALI_1_DAY_4_DEP_1",
                locale_day_5_dep_1 : "BALI_1_DAY_5_DEP_1",
                locale_table_H1 : "BALI_1_TABLE_H1",
                locale_table_H2 : "BALI_1_TABLE_H2",
                locale_table_H3 : "BALI_1_TABLE_H3",
                locale_table_H4 : "BALI_1_TABLE_H4",
                locale_table_H1D : "BALI_1_TABLE_H1D",
                locale_table_H2D : "BALI_1_TABLE_H2D",
                locale_table_H3D1 : "BALI_1_TABLE_H3D1",
                locale_table_H3D2 : "BALI_1_TABLE_H3D2",
                locale_table_H3D3 : "BALI_1_TABLE_H3D3",
                locale_table_H3D4 : "BALI_1_TABLE_H3D4",
                locale_table_H4D1 : "BALI_1_TABLE_H4D1",
                locale_table_H4D2 : "BALI_1_TABLE_H4D2",
                src: "main.jpg",
                images : [
                  "attractions/attraction1.jpg",
                  "attractions/attraction12.jpg",
                  "attractions/attraction13.jpg",
                ],


              },{
                id:'2',
                price: "200$",
                days: 4,
                locale_title: "BALI_2_TITLE",
                locale_stay: "BALI_2_STAY",
                locale_Description: "BALI_2_DESCRIPTION",
                locale_Detail: "BALI_2_DETAIL",
                locale_caegory_text: "BALI_2_CAEGORY_TEXT",
                locale_description_text_1 : "BALI_2_DESCRIPTION_TEXT_1",
                locale_description_text_2 : "BALI_2_DESCRIPTION_TEXT_2",
                locale_description_text_3 : "BALI_2_DESCRIPTION_TEXT_3",
                locale_description_text_4 : "BALI_2_DESCRIPTION_TEXT_4",
                locale_day_1_dep_1 : "BALI_2_DAY_1_DEP_1",
                locale_day_2_dep_1 : "BALI_2_DAY_2_DEP_1",
                locale_day_3_dep_1 : "BALI_2_DAY_3_DEP_1",
                locale_day_4_dep_1 : "BALI_2_DAY_4_DEP_1",
                locale_day_5_dep_1 : "BALI_2_DAY_5_DEP_1",
                locale_table_H1 : "BALI_2_TABLE_H1",
                locale_table_H2 : "BALI_2_TABLE_H2",
                locale_table_H3 : "BALI_2_TABLE_H3",
                locale_table_H4 : "BALI_2_TABLE_H4",
                locale_table_H1D : "BALI_2_TABLE_H1D",
                locale_table_H2D : "BALI_2_TABLE_H2D",
                locale_table_H3D1 : "BALI_2_TABLE_H3D1",
                locale_table_H3D2 : "BALI_2_TABLE_H3D2",
                locale_table_H3D3 : "BALI_2_TABLE_H3D3",
                locale_table_H3D4 : "BALI_2_TABLE_H3D4",
                locale_table_H4D1 : "BALI_2_TABLE_H4D1",
                locale_table_H4D2 : "BALI_2_TABLE_H4D2",
                src: "main.jpg",
                images : [
                  "attractions/attraction1.jpg",
                  "attractions/attraction12.jpg",
                  "attractions/attraction13.jpg",
                ]
              },
              {
                id:'3',
                price: "200$",
                days: 6,
                locale_title: "BALI_3_TITLE",
                locale_stay: "BALI_3_STAY",
                locale_Description: "BALI_3_DESCRIPTION",
                locale_Detail: "BALI_3_DETAIL",
                locale_caegory_text: "BALI_3_CAEGORY_TEXT",
                locale_description_text_1 : "BALI_3_DESCRIPTION_TEXT_1",
                locale_description_text_2 : "BALI_3_DESCRIPTION_TEXT_2",
                locale_description_text_3 : "BALI_3_DESCRIPTION_TEXT_3",
                locale_description_text_4 : "BALI_3_DESCRIPTION_TEXT_4",
                locale_day_1_dep_1 : "BALI_3_DAY_1_DEP_1",
                locale_day_2_dep_1 : "BALI_3_DAY_2_DEP_1",
                locale_day_3_dep_1 : "BALI_3_DAY_3_DEP_1",
                locale_day_4_dep_1 : "BALI_3_DAY_4_DEP_1",
                locale_day_5_dep_1 : "BALI_3_DAY_5_DEP_1",
                locale_table_H1 : "BALI_3_TABLE_H1",
                locale_table_H2 : "BALI_3_TABLE_H2",
                locale_table_H3 : "BALI_3_TABLE_H3",
                locale_table_H4 : "BALI_3_TABLE_H4",
                locale_table_H1D : "BALI_3_TABLE_H1D",
                locale_table_H2D : "BALI_3_TABLE_H2D",
                locale_table_H3D1 : "BALI_3_TABLE_H3D1",
                locale_table_H3D2 : "BALI_3_TABLE_H3D2",
                locale_table_H3D3 : "BALI_3_TABLE_H3D3",
                locale_table_H3D4 : "BALI_3_TABLE_H3D4",
                locale_table_H4D1 : "BALI_3_TABLE_H4D1",
                locale_table_H4D2 : "BALI_3_TABLE_H4D2",
                src: "main.jpg",
                images : [
                  "attractions/attraction1.jpg",
                  "attractions/attraction12.jpg",
                  "attractions/attraction13.jpg",
                ]

              },{
                id:'4',
                price: "200$",
                days: 6,
                locale_title: "BALI_4_TITLE",
                locale_stay: "BALI_4_STAY",
                locale_Description: "BALI_4_DESCRIPTION",
                locale_Detail: "BALI_4_DETAIL",
                locale_caegory_text: "BALI_4_CAEGORY_TEXT",
                locale_description_text_1 : "BALI_4_DESCRIPTION_TEXT_1",
                locale_description_text_2 : "BALI_4_DESCRIPTION_TEXT_2",
                locale_description_text_3 : "BALI_4_DESCRIPTION_TEXT_3",
                locale_description_text_4 : "BALI_4_DESCRIPTION_TEXT_4",
                locale_day_1_dep_1 : "BALI_4_DAY_1_DEP_1",
                locale_day_2_dep_1 : "BALI_4_DAY_2_DEP_1",
                locale_day_3_dep_1 : "BALI_4_DAY_3_DEP_1",
                locale_day_4_dep_1 : "BALI_4_DAY_4_DEP_1",
                locale_day_5_dep_1 : "BALI_4_DAY_5_DEP_1",
                locale_table_H1 : "BALI_4_TABLE_H1",
                locale_table_H2 : "BALI_4_TABLE_H2",
                locale_table_H3 : "BALI_4_TABLE_H3",
                locale_table_H4 : "BALI_4_TABLE_H4",
                locale_table_H1D : "BALI_4_TABLE_H1D",
                locale_table_H2D : "BALI_4_TABLE_H2D",
                locale_table_H3D1 : "BALI_4_TABLE_H3D1",
                locale_table_H3D2 : "BALI_4_TABLE_H3D2",
                locale_table_H3D3 : "BALI_4_TABLE_H3D3",
                locale_table_H3D4 : "BALI_4_TABLE_H3D4",
                locale_table_H4D1 : "BALI_4_TABLE_H4D1",
                locale_table_H4D2 : "BALI_4_TABLE_H4D2",
                src: "main.jpg",
                images : [
                  "attractions/attraction1.jpg",
                  "attractions/attraction12.jpg",
                  "attractions/attraction13.jpg",
                ]
              }
            ]
          },
          {
            id: '/gilis',
            type:"gilis",
            locale_title:"GILIS",
            details:"GILIS_DETAIL",
            pakages:[
              {
                id:'1',
                price: "200$",
                days: 5,
                locale_title: "GILIS_1_TITLE",
                locale_stay: "GILIS_1_STAY",
                locale_Description: "GILIS_1_DESCRIPTION",
                locale_Detail: "GILIS_1_DETAIL",
                locale_caegory_text: "GILIS_1_CAEGORY_TEXT",
                locale_description_text_1 : "GILIS_1_DESCRIPTION_TEXT_1",
                locale_description_text_2 : "GILIS_1_DESCRIPTION_TEXT_2",
                locale_description_text_3 : "GILIS_1_DESCRIPTION_TEXT_3",
                locale_description_text_4 : "GILIS_1_DESCRIPTION_TEXT_4",
                locale_day_1_dep_1 : "GILIS_1_DAY_1_DEP_1",
                locale_day_2_dep_1 : "GILIS_1_DAY_2_DEP_1",
                locale_day_3_dep_1 : "GILIS_1_DAY_3_DEP_1",
                locale_day_4_dep_1 : "GILIS_1_DAY_4_DEP_1",
                locale_day_5_dep_1 : "GILIS_1_DAY_5_DEP_1",
                locale_table_H1 : "GILIS_1_TABLE_H1",
                locale_table_H2 : "GILIS_1_TABLE_H2",
                locale_table_H3 : "GILIS_1_TABLE_H3",
                locale_table_H4 : "GILIS_1_TABLE_H4",
                locale_table_H1D : "GILIS_1_TABLE_H1D",
                locale_table_H2D : "GILIS_1_TABLE_H2D",
                locale_table_H3D1 : "GILIS_1_TABLE_H3D1",
                locale_table_H3D2 : "GILIS_1_TABLE_H3D2",
                locale_table_H3D3 : "GILIS_1_TABLE_H3D3",
                locale_table_H3D4 : "GILIS_1_TABLE_H3D4",
                locale_table_H4D1 : "GILIS_1_TABLE_H4D1",
                locale_table_H4D2 : "GILIS_1_TABLE_H4D2",
                src: "services.jpg",
                images : [
                  "attractions/attraction1.jpg",
                  "attractions/attraction12.jpg",
                  "attractions/attraction13.jpg",
                ]

              },{
                id:'2',
                price: "200$",
                days: 6,
                locale_title: "GILIS_2_TITLE",
                locale_stay: "GILIS_2_STAY",
                locale_Description: "GILIS_2_DESCRIPTION",
                locale_Detail: "GILIS_2_DETAIL",
                locale_caegory_text: "GILIS_2_CAEGORY_TEXT",
                locale_description_text_1 : "GILIS_2_DESCRIPTION_TEXT_1",
                locale_description_text_2 : "GILIS_2_DESCRIPTION_TEXT_2",
                locale_description_text_3 : "GILIS_2_DESCRIPTION_TEXT_3",
                locale_description_text_4 : "GILIS_2_DESCRIPTION_TEXT_4",
                locale_day_1_dep_1 : "GILIS_2_DAY_1_DEP_1",
                locale_day_2_dep_1 : "GILIS_2_DAY_2_DEP_1",
                locale_day_3_dep_1 : "GILIS_2_DAY_3_DEP_1",
                locale_day_4_dep_1 : "GILIS_2_DAY_4_DEP_1",
                locale_day_5_dep_1 : "GILIS_2_DAY_5_DEP_1",
                locale_table_H1 : "GILIS_2_TABLE_H1",
                locale_table_H2 : "GILIS_2_TABLE_H2",
                locale_table_H3 : "GILIS_2_TABLE_H3",
                locale_table_H4 : "GILIS_2_TABLE_H4",
                locale_table_H1D : "GILIS_2_TABLE_H1D",
                locale_table_H2D : "GILIS_2_TABLE_H2D",
                locale_table_H3D1 : "GILIS_2_TABLE_H3D1",
                locale_table_H3D2 : "GILIS_2_TABLE_H3D2",
                locale_table_H3D3 : "GILIS_2_TABLE_H3D3",
                locale_table_H3D4 : "GILIS_2_TABLE_H3D4",
                locale_table_H4D1 : "GILIS_2_TABLE_H4D1",
                locale_table_H4D2 : "GILIS_2_TABLE_H4D2",
                src: "main.jpg",
                images : [
                  "attractions/attraction1.jpg",
                  "attractions/attraction12.jpg",
                  "attractions/attraction13.jpg",
                ]
              },{
                id:'3',
                price: "200$",
                days: 6,
                locale_title: "GILIS_3_TITLE",
                locale_stay: "GILIS_3_STAY",
                locale_Description: "GILIS_3_DESCRIPTION",
                locale_Detail: "GILIS_3_DETAIL",
                locale_caegory_text: "GILIS_3_CAEGORY_TEXT",
                locale_description_text_1 : "GILIS_3_DESCRIPTION_TEXT_1",
                locale_description_text_2 : "GILIS_3_DESCRIPTION_TEXT_2",
                locale_description_text_3 : "GILIS_3_DESCRIPTION_TEXT_3",
                locale_description_text_4 : "GILIS_3_DESCRIPTION_TEXT_4",
                locale_day_1_dep_1 : "GILIS_3_DAY_1_DEP_1",
                locale_day_2_dep_1 : "GILIS_3_DAY_2_DEP_1",
                locale_day_3_dep_1 : "GILIS_3_DAY_3_DEP_1",
                locale_day_4_dep_1 : "GILIS_3_DAY_4_DEP_1",
                locale_day_5_dep_1 : "GILIS_3_DAY_5_DEP_1",
                locale_table_H1 : "GILIS_3_TABLE_H1",
                locale_table_H2 : "GILIS_3_TABLE_H2",
                locale_table_H3 : "GILIS_3_TABLE_H3",
                locale_table_H4 : "GILIS_3_TABLE_H4",
                locale_table_H1D : "GILIS_3_TABLE_H1D",
                locale_table_H2D : "GILIS_3_TABLE_H2D",
                locale_table_H3D1 : "GILIS_3_TABLE_H3D1",
                locale_table_H3D2 : "GILIS_3_TABLE_H3D2",
                locale_table_H3D3 : "GILIS_3_TABLE_H3D3",
                locale_table_H3D4 : "GILIS_3_TABLE_H3D4",
                locale_table_H4D1 : "GILIS_3_TABLE_H4D1",
                locale_table_H4D2 : "GILIS_3_TABLE_H4D2",
                src: "main.jpg",
                images : [
                  "attractions/attraction1.jpg",
                  "attractions/attraction12.jpg",
                  "attractions/attraction13.jpg",
                ]
              }
            ]
          },
          {
            id: '/lombok',
            type:"lombok",
            locale_title:"LOMBOK",
            details:"LOMBOK_DETAIL",
            pakages:[
              {
                id:'1',
                price: "200$",
                days: 6,
                locale_title: "LOMBOK_1_TITLE",
                locale_stay: "LOMBOK_1_STAY",
                locale_Description: "LOMBOK_1_DESCRIPTION",
                locale_Detail: "LOMBOK_1_DETAIL",
                locale_caegory_text: "LOMBOK_1_CAEGORY_TEXT",
                locale_description_text_1 : "LOMBOK_1_DESCRIPTION_TEXT_1",
                locale_description_text_2 : "LOMBOK_1_DESCRIPTION_TEXT_2",
                locale_description_text_3 : "LOMBOK_1_DESCRIPTION_TEXT_3",
                locale_description_text_4 : "LOMBOK_1_DESCRIPTION_TEXT_4",
                locale_day_1_dep_1 : "LOMBOK_1_DAY_1_DEP_1",
                locale_day_2_dep_1 : "LOMBOK_1_DAY_2_DEP_1",
                locale_day_3_dep_1 : "LOMBOK_1_DAY_3_DEP_1",
                locale_day_4_dep_1 : "LOMBOK_1_DAY_4_DEP_1",
                locale_day_5_dep_1 : "LOMBOK_1_DAY_5_DEP_1",
                locale_table_H1 : "LOMBOK_1_TABLE_H1",
                locale_table_H2 : "LOMBOK_1_TABLE_H2",
                locale_table_H3 : "LOMBOK_1_TABLE_H3",
                locale_table_H4 : "LOMBOK_1_TABLE_H4",
                locale_table_H1D : "LOMBOK_1_TABLE_H1D",
                locale_table_H2D : "LOMBOK_1_TABLE_H2D",
                locale_table_H3D1 : "LOMBOK_1_TABLE_H3D1",
                locale_table_H3D2 : "LOMBOK_1_TABLE_H3D2",
                locale_table_H3D3 : "LOMBOK_1_TABLE_H3D3",
                locale_table_H3D4 : "LOMBOK_1_TABLE_H3D4",
                locale_table_H4D1 : "LOMBOK_1_TABLE_H4D1",
                locale_table_H4D2 : "LOMBOK_1_TABLE_H4D2",
                src: "main.jpg",
                images : [
                  "attractions/attraction1.jpg",
                  "attractions/attraction12.jpg",
                  "attractions/attraction13.jpg",
                ]

              },{
                id:'2',
                price: "200$",
                days: 6,
                locale_title: "LOMBOK_2_TITLE",
                locale_stay: "LOMBOK_2_STAY",
                locale_Description: "LOMBOK_2_DESCRIPTION",
                locale_Detail: "LOMBOK_2_DETAIL",
                locale_caegory_text: "LOMBOK_2_CAEGORY_TEXT",
                locale_description_text_1 : "LOMBOK_2_DESCRIPTION_TEXT_1",
                locale_description_text_2 : "LOMBOK_2_DESCRIPTION_TEXT_2",
                locale_description_text_3 : "LOMBOK_2_DESCRIPTION_TEXT_3",
                locale_description_text_4 : "LOMBOK_2_DESCRIPTION_TEXT_4",
                locale_day_1_dep_1 : "LOMBOK_2_DAY_1_DEP_1",
                locale_day_2_dep_1 : "LOMBOK_2_DAY_2_DEP_1",
                locale_day_3_dep_1 : "LOMBOK_2_DAY_3_DEP_1",
                locale_day_4_dep_1 : "LOMBOK_2_DAY_4_DEP_1",
                locale_day_5_dep_1 : "LOMBOK_2_DAY_5_DEP_1",
                locale_table_H1 : "LOMBOK_2_TABLE_H1",
                locale_table_H2 : "LOMBOK_2_TABLE_H2",
                locale_table_H3 : "LOMBOK_2_TABLE_H3",
                locale_table_H4 : "LOMBOK_2_TABLE_H4",
                locale_table_H1D : "LOMBOK_2_TABLE_H1D",
                locale_table_H2D : "LOMBOK_2_TABLE_H2D",
                locale_table_H3D1 : "LOMBOK_2_TABLE_H3D1",
                locale_table_H3D2 : "LOMBOK_2_TABLE_H3D2",
                locale_table_H3D3 : "LOMBOK_2_TABLE_H3D3",
                locale_table_H3D4 : "LOMBOK_2_TABLE_H3D4",
                locale_table_H4D1 : "LOMBOK_2_TABLE_H4D1",
                locale_table_H4D2 : "LOMBOK_2_TABLE_H4D2",
                src: "main.jpg",
                images : [
                  "attractions/attraction1.jpg",
                  "attractions/attraction12.jpg",
                  "attractions/attraction13.jpg",
                ]
              },{
                id:'3',
                price: "200$",
                days: 6,
                locale_title: "LOMBOK_3_TITLE",
                locale_stay: "LOMBOK_3_STAY",
                locale_Description: "LOMBOK_3_DESCRIPTION",
                locale_Detail: "LOMBOK_3_DETAIL",
                locale_caegory_text: "LOMBOK_3_CAEGORY_TEXT",
                locale_description_text_1 : "LOMBOK_3_DESCRIPTION_TEXT_1",
                locale_description_text_2 : "LOMBOK_3_DESCRIPTION_TEXT_2",
                locale_description_text_3 : "LOMBOK_3_DESCRIPTION_TEXT_3",
                locale_description_text_4 : "LOMBOK_3_DESCRIPTION_TEXT_4",
                locale_day_1_dep_1 : "LOMBOK_3_DAY_1_DEP_1",
                locale_day_2_dep_1 : "LOMBOK_3_DAY_2_DEP_1",
                locale_day_3_dep_1 : "LOMBOK_3_DAY_3_DEP_1",
                locale_day_4_dep_1 : "LOMBOK_3_DAY_4_DEP_1",
                locale_day_5_dep_1 : "LOMBOK_3_DAY_5_DEP_1",
                locale_table_H1 : "LOMBOK_3_TABLE_H1",
                locale_table_H2 : "LOMBOK_3_TABLE_H2",
                locale_table_H3 : "LOMBOK_3_TABLE_H3",
                locale_table_H4 : "LOMBOK_3_TABLE_H4",
                locale_table_H1D : "LOMBOK_3_TABLE_H1D",
                locale_table_H2D : "LOMBOK_3_TABLE_H2D",
                locale_table_H3D1 : "LOMBOK_3_TABLE_H3D1",
                locale_table_H3D2 : "LOMBOK_3_TABLE_H3D2",
                locale_table_H3D3 : "LOMBOK_3_TABLE_H3D3",
                locale_table_H3D4 : "LOMBOK_3_TABLE_H3D4",
                locale_table_H4D1 : "LOMBOK_3_TABLE_H4D1",
                locale_table_H4D2 : "LOMBOK_3_TABLE_H4D2",
                src: "main.jpg",
                images : [
                  "attractions/attraction1.jpg",
                  "attractions/attraction12.jpg",
                  "attractions/attraction13.jpg",
                ]
              }
            ]
          },
          {
            id: '/jakarta',
            type:"jakarta",
            locale_title:"JAKARTA",
            details:"JAKARTA_DETAIL",
            pakages:[
              {
                id:'1',
                price: "200$",
                days: 6,
                locale_title: "JAKARTA_1_TITLE",
                locale_stay: "JAKARTA_1_STAY",
                locale_Description: "JAKARTA_1_DESCRIPTION",
                locale_Detail: "JAKARTA_1_DETAIL",
                locale_caegory_text: "JAKARTA_1_CAEGORY_TEXT",
                locale_description_text_1 : "JAKARTA_1_DESCRIPTION_TEXT_1",
                locale_description_text_2 : "JAKARTA_1_DESCRIPTION_TEXT_2",
                locale_description_text_3 : "JAKARTA_1_DESCRIPTION_TEXT_3",
                locale_description_text_4 : "JAKARTA_1_DESCRIPTION_TEXT_4",
                locale_day_1_dep_1 : "JAKARTA_1_DAY_1_DEP_1",
                locale_day_2_dep_1 : "JAKARTA_1_DAY_2_DEP_1",
                locale_day_3_dep_1 : "JAKARTA_1_DAY_3_DEP_1",
                locale_day_4_dep_1 : "JAKARTA_1_DAY_4_DEP_1",
                locale_day_5_dep_1 : "JAKARTA_1_DAY_5_DEP_1",
                locale_table_H1 : "JAKARTA_1_TABLE_H1",
                locale_table_H2 : "JAKARTA_1_TABLE_H2",
                locale_table_H3 : "JAKARTA_1_TABLE_H3",
                locale_table_H4 : "JAKARTA_1_TABLE_H4",
                locale_table_H1D : "JAKARTA_1_TABLE_H1D",
                locale_table_H2D : "JAKARTA_1_TABLE_H2D",
                locale_table_H3D1 : "JAKARTA_1_TABLE_H3D1",
                locale_table_H3D2 : "JAKARTA_1_TABLE_H3D2",
                locale_table_H3D3 : "JAKARTA_1_TABLE_H3D3",
                locale_table_H3D4 : "JAKARTA_1_TABLE_H3D4",
                locale_table_H4D1 : "JAKARTA_1_TABLE_H4D1",
                locale_table_H4D2 : "JAKARTA_1_TABLE_H4D2",
                src: "main.jpg",
                images : [
                  "attractions/attraction1.jpg",
                  "attractions/attraction12.jpg",
                  "attractions/attraction13.jpg",
                ]

              },{
                id:'2',
                price: "200$",
                days: 6,
                locale_title: "JAKARTA_2_TITLE",
                locale_stay: "JAKARTA_2_STAY",
                locale_Description: "JAKARTA_2_DESCRIPTION",
                locale_Detail: "JAKARTA_2_DETAIL",
                locale_caegory_text: "JAKARTA_2_CAEGORY_TEXT",
                locale_description_text_1 : "JAKARTA_2_DESCRIPTION_TEXT_1",
                locale_description_text_2 : "JAKARTA_2_DESCRIPTION_TEXT_2",
                locale_description_text_3 : "JAKARTA_2_DESCRIPTION_TEXT_3",
                locale_description_text_4 : "JAKARTA_2_DESCRIPTION_TEXT_4",
                locale_day_1_dep_1 : "JAKARTA_2_DAY_1_DEP_1",
                locale_day_2_dep_1 : "JAKARTA_2_DAY_2_DEP_1",
                locale_day_3_dep_1 : "JAKARTA_2_DAY_3_DEP_1",
                locale_day_4_dep_1 : "JAKARTA_2_DAY_4_DEP_1",
                locale_day_5_dep_1 : "JAKARTA_2_DAY_5_DEP_1",
                locale_table_H1 : "JAKARTA_2_TABLE_H1",
                locale_table_H2 : "JAKARTA_2_TABLE_H2",
                locale_table_H3 : "JAKARTA_2_TABLE_H3",
                locale_table_H4 : "JAKARTA_2_TABLE_H4",
                locale_table_H1D : "JAKARTA_2_TABLE_H1D",
                locale_table_H2D : "JAKARTA_2_TABLE_H2D",
                locale_table_H3D1 : "JAKARTA_2_TABLE_H3D1",
                locale_table_H3D2 : "JAKARTA_2_TABLE_H3D2",
                locale_table_H3D3 : "JAKARTA_2_TABLE_H3D3",
                locale_table_H3D4 : "JAKARTA_2_TABLE_H3D4",
                locale_table_H4D1 : "JAKARTA_2_TABLE_H4D1",
                locale_table_H4D2 : "JAKARTA_2_TABLE_H4D2",
                src: "main.jpg",
                images : [
                  "attractions/attraction1.jpg",
                  "attractions/attraction12.jpg",
                  "attractions/attraction13.jpg",
                ]
              },{
                id:'3',
                price: "200$",
                days: 6,
                locale_title: "JAKARTA_3_TITLE",
                locale_stay: "JAKARTA_3_STAY",
                locale_Description: "JAKARTA_3_DESCRIPTION",
                locale_Detail: "JAKARTA_3_DETAIL",
                locale_caegory_text: "JAKARTA_3_CAEGORY_TEXT",
                locale_description_text_1 : "JAKARTA_3_DESCRIPTION_TEXT_1",
                locale_description_text_2 : "JAKARTA_3_DESCRIPTION_TEXT_2",
                locale_description_text_3 : "JAKARTA_3_DESCRIPTION_TEXT_3",
                locale_description_text_4 : "JAKARTA_3_DESCRIPTION_TEXT_4",
                locale_day_1_dep_1 : "JAKARTA_3_DAY_1_DEP_1",
                locale_day_2_dep_1 : "JAKARTA_3_DAY_2_DEP_1",
                locale_day_3_dep_1 : "JAKARTA_3_DAY_3_DEP_1",
                locale_day_4_dep_1 : "JAKARTA_3_DAY_4_DEP_1",
                locale_day_5_dep_1 : "JAKARTA_3_DAY_5_DEP_1",
                locale_table_H1 : "JAKARTA_3_TABLE_H1",
                locale_table_H2 : "JAKARTA_3_TABLE_H2",
                locale_table_H3 : "JAKARTA_3_TABLE_H3",
                locale_table_H4 : "JAKARTA_3_TABLE_H4",
                locale_table_H1D : "JAKARTA_3_TABLE_H1D",
                locale_table_H2D : "JAKARTA_3_TABLE_H2D",
                locale_table_H3D1 : "JAKARTA_3_TABLE_H3D1",
                locale_table_H3D2 : "JAKARTA_3_TABLE_H3D2",
                locale_table_H3D3 : "JAKARTA_3_TABLE_H3D3",
                locale_table_H3D4 : "JAKARTA_3_TABLE_H3D4",
                locale_table_H4D1 : "JAKARTA_3_TABLE_H4D1",
                locale_table_H4D2 : "JAKARTA_3_TABLE_H4D2",
                src: "main.jpg",
                images : [
                  "attractions/attraction1.jpg",
                  "attractions/attraction12.jpg",
                  "attractions/attraction13.jpg",
                ]
              }
            ]
          },
          {
            id: '/puncak',
            type:"puncak",
            locale_title:"PUNCAK",
            details:"PUNCAK_DETAIL",
            pakages:[
              {
                id:'1',
                price: "200$",
                days: 6,
                locale_title: "PUNCAK_1_TITLE",
                locale_stay: "PUNCAK_1_STAY",
                locale_Description: "PUNCAK_1_DESCRIPTION",
                locale_Detail: "PUNCAK_1_DETAIL",
                locale_caegory_text: "PUNCAK_1_CAEGORY_TEXT",
                locale_description_text_1 : "PUNCAK_1_DESCRIPTION_TEXT_1",
                locale_description_text_2 : "PUNCAK_1_DESCRIPTION_TEXT_2",
                locale_description_text_3 : "PUNCAK_1_DESCRIPTION_TEXT_3",
                locale_description_text_4 : "PUNCAK_1_DESCRIPTION_TEXT_4",
                locale_day_1_dep_1 : "PUNCAK_1_DAY_1_DEP_1",
                locale_day_2_dep_1 : "PUNCAK_1_DAY_2_DEP_1",
                locale_day_3_dep_1 : "PUNCAK_1_DAY_3_DEP_1",
                locale_day_4_dep_1 : "PUNCAK_1_DAY_4_DEP_1",
                locale_day_5_dep_1 : "PUNCAK_1_DAY_5_DEP_1",
                locale_table_H1 : "PUNCAK_1_TABLE_H1",
                locale_table_H2 : "PUNCAK_1_TABLE_H2",
                locale_table_H3 : "PUNCAK_1_TABLE_H3",
                locale_table_H4 : "PUNCAK_1_TABLE_H4",
                locale_table_H1D : "PUNCAK_1_TABLE_H1D",
                locale_table_H2D : "PUNCAK_1_TABLE_H2D",
                locale_table_H3D1 : "PUNCAK_1_TABLE_H3D1",
                locale_table_H3D2 : "PUNCAK_1_TABLE_H3D2",
                locale_table_H3D3 : "PUNCAK_1_TABLE_H3D3",
                locale_table_H3D4 : "PUNCAK_1_TABLE_H3D4",
                locale_table_H4D1 : "PUNCAK_1_TABLE_H4D1",
                locale_table_H4D2 : "PUNCAK_1_TABLE_H4D2",
                src: "main.jpg",
                images : [
                  "attractions/attraction1.jpg",
                  "attractions/attraction12.jpg",
                  "attractions/attraction13.jpg",
                ]

              },{
                id:'2',
                price: "200$",
                days: 6,
                locale_title: "PUNCAK_2_TITLE",
                locale_stay: "PUNCAK_2_STAY",
                locale_Description: "PUNCAK_2_DESCRIPTION",
                locale_Detail: "PUNCAK_2_DETAIL",
                locale_caegory_text: "PUNCAK_2_CAEGORY_TEXT",
                locale_description_text_1 : "PUNCAK_2_DESCRIPTION_TEXT_1",
                locale_description_text_2 : "PUNCAK_2_DESCRIPTION_TEXT_2",
                locale_description_text_3 : "PUNCAK_2_DESCRIPTION_TEXT_3",
                locale_description_text_4 : "PUNCAK_2_DESCRIPTION_TEXT_4",
                locale_day_1_dep_1 : "PUNCAK_2_DAY_1_DEP_1",
                locale_day_2_dep_1 : "PUNCAK_2_DAY_2_DEP_1",
                locale_day_3_dep_1 : "PUNCAK_2_DAY_3_DEP_1",
                locale_day_4_dep_1 : "PUNCAK_2_DAY_4_DEP_1",
                locale_day_5_dep_1 : "PUNCAK_2_DAY_5_DEP_1",
                locale_table_H1 : "PUNCAK_2_TABLE_H1",
                locale_table_H2 : "PUNCAK_2_TABLE_H2",
                locale_table_H3 : "PUNCAK_2_TABLE_H3",
                locale_table_H4 : "PUNCAK_2_TABLE_H4",
                locale_table_H1D : "PUNCAK_2_TABLE_H1D",
                locale_table_H2D : "PUNCAK_2_TABLE_H2D",
                locale_table_H3D1 : "PUNCAK_2_TABLE_H3D1",
                locale_table_H3D2 : "PUNCAK_2_TABLE_H3D2",
                locale_table_H3D3 : "PUNCAK_2_TABLE_H3D3",
                locale_table_H3D4 : "PUNCAK_2_TABLE_H3D4",
                locale_table_H4D1 : "PUNCAK_2_TABLE_H4D1",
                locale_table_H4D2 : "PUNCAK_2_TABLE_H4D2",
                src: "main.jpg",
                images : [
                  "attractions/attraction1.jpg",
                  "attractions/attraction12.jpg",
                  "attractions/attraction13.jpg",
                ]
              },{
                id:'3',
                price: "200$",
                days: 6,
                locale_title: "PUNCAK_3_TITLE",
                locale_stay: "PUNCAK_3_STAY",
                locale_Description: "PUNCAK_3_DESCRIPTION",
                locale_Detail: "PUNCAK_3_DETAIL",
                locale_caegory_text: "PUNCAK_3_CAEGORY_TEXT",
                locale_description_text_1 : "PUNCAK_3_DESCRIPTION_TEXT_1",
                locale_description_text_2 : "PUNCAK_3_DESCRIPTION_TEXT_2",
                locale_description_text_3 : "PUNCAK_3_DESCRIPTION_TEXT_3",
                locale_description_text_4 : "PUNCAK_3_DESCRIPTION_TEXT_4",
                locale_day_1_dep_1 : "PUNCAK_3_DAY_1_DEP_1",
                locale_day_2_dep_1 : "PUNCAK_3_DAY_2_DEP_1",
                locale_day_3_dep_1 : "PUNCAK_3_DAY_3_DEP_1",
                locale_day_4_dep_1 : "PUNCAK_3_DAY_4_DEP_1",
                locale_day_5_dep_1 : "PUNCAK_3_DAY_5_DEP_1",
                locale_table_H1 : "PUNCAK_3_TABLE_H1",
                locale_table_H2 : "PUNCAK_3_TABLE_H2",
                locale_table_H3 : "PUNCAK_3_TABLE_H3",
                locale_table_H4 : "PUNCAK_3_TABLE_H4",
                locale_table_H1D : "PUNCAK_3_TABLE_H1D",
                locale_table_H2D : "PUNCAK_3_TABLE_H2D",
                locale_table_H3D1 : "PUNCAK_3_TABLE_H3D1",
                locale_table_H3D2 : "PUNCAK_3_TABLE_H3D2",
                locale_table_H3D3 : "PUNCAK_3_TABLE_H3D3",
                locale_table_H3D4 : "PUNCAK_3_TABLE_H3D4",
                locale_table_H4D1 : "PUNCAK_3_TABLE_H4D1",
                locale_table_H4D2 : "PUNCAK_3_TABLE_H4D2",
                src: "main.jpg",
                images : [
                  "attractions/attraction1.jpg",
                  "attractions/attraction12.jpg",
                  "attractions/attraction13.jpg",
                ]
              }
            ]
          },  {
              id: '/bandung',
              type:"bandung",
              locale_title:"BANDUNG",
              details:"BANDUNG_DETAIL",
              pakages:[
                {
                  id:'1',
                  price: "200$",
                days: 6,
                  locale_title: "BANDUNG_1_TITLE",
                  locale_stay: "BANDUNG_1_STAY",
                  locale_Description: "BANDUNG_1_DESCRIPTION",
                  locale_Detail: "BANDUNG_1_DETAIL",
                  locale_caegory_text: "BANDUNG_1_CAEGORY_TEXT",
                  locale_description_text_1 : "BANDUNG_1_DESCRIPTION_TEXT_1",
                  locale_description_text_2 : "BANDUNG_1_DESCRIPTION_TEXT_2",
                  locale_description_text_3 : "BANDUNG_1_DESCRIPTION_TEXT_3",
                  locale_description_text_4 : "BANDUNG_1_DESCRIPTION_TEXT_4",
                  locale_day_1_dep_1 : "BANDUNG_1_DAY_1_DEP_1",
                  locale_day_2_dep_1 : "BANDUNG_1_DAY_2_DEP_1",
                  locale_day_3_dep_1 : "BANDUNG_1_DAY_3_DEP_1",
                  locale_day_4_dep_1 : "BANDUNG_1_DAY_4_DEP_1",
                  locale_day_5_dep_1 : "BANDUNG_1_DAY_5_DEP_1",
                  locale_table_H1 : "BANDUNG_1_TABLE_H1",
                  locale_table_H2 : "BANDUNG_1_TABLE_H2",
                  locale_table_H3 : "BANDUNG_1_TABLE_H3",
                  locale_table_H4 : "BANDUNG_1_TABLE_H4",
                  locale_table_H1D : "BANDUNG_1_TABLE_H1D",
                  locale_table_H2D : "BANDUNG_1_TABLE_H2D",
                  locale_table_H3D1 : "BANDUNG_1_TABLE_H3D1",
                  locale_table_H3D2 : "BANDUNG_1_TABLE_H3D2",
                  locale_table_H3D3 : "BANDUNG_1_TABLE_H3D3",
                  locale_table_H3D4 : "BANDUNG_1_TABLE_H3D4",
                  locale_table_H4D1 : "BANDUNG_1_TABLE_H4D1",
                  locale_table_H4D2 : "BANDUNG_1_TABLE_H4D2",
                  src: "main.jpg",
                  images : [
                    "attractions/attraction1.jpg",
                    "attractions/attraction12.jpg",
                    "attractions/attraction13.jpg",
                  ]

                },{
                  id:'2',
                  price: "200$",
                days: 6,
                  locale_title: "BANDUNG_2_TITLE",
                  locale_stay: "BANDUNG_2_STAY",
                  locale_Description: "BANDUNG_2_DESCRIPTION",
                  locale_Detail: "BANDUNG_2_DETAIL",
                  locale_caegory_text: "BANDUNG_2_CAEGORY_TEXT",
                  locale_description_text_1 : "BANDUNG_2_DESCRIPTION_TEXT_1",
                  locale_description_text_2 : "BANDUNG_2_DESCRIPTION_TEXT_2",
                  locale_description_text_3 : "BANDUNG_2_DESCRIPTION_TEXT_3",
                  locale_description_text_4 : "BANDUNG_2_DESCRIPTION_TEXT_4",
                  locale_day_1_dep_1 : "BANDUNG_2_DAY_1_DEP_1",
                  locale_day_2_dep_1 : "BANDUNG_2_DAY_2_DEP_1",
                  locale_day_3_dep_1 : "BANDUNG_2_DAY_3_DEP_1",
                  locale_day_4_dep_1 : "BANDUNG_2_DAY_4_DEP_1",
                  locale_day_5_dep_1 : "BANDUNG_2_DAY_5_DEP_1",
                  locale_table_H1 : "BANDUNG_2_TABLE_H1",
                  locale_table_H2 : "BANDUNG_2_TABLE_H2",
                  locale_table_H3 : "BANDUNG_2_TABLE_H3",
                  locale_table_H4 : "BANDUNG_2_TABLE_H4",
                  locale_table_H1D : "BANDUNG_2_TABLE_H1D",
                  locale_table_H2D : "BANDUNG_2_TABLE_H2D",
                  locale_table_H3D1 : "BANDUNG_2_TABLE_H3D1",
                  locale_table_H3D2 : "BANDUNG_2_TABLE_H3D2",
                  locale_table_H3D3 : "BANDUNG_2_TABLE_H3D3",
                  locale_table_H3D4 : "BANDUNG_2_TABLE_H3D4",
                  locale_table_H4D1 : "BANDUNG_2_TABLE_H4D1",
                  locale_table_H4D2 : "BANDUNG_2_TABLE_H4D2",
                  src: "main.jpg",
                  images : [
                    "attractions/attraction1.jpg",
                    "attractions/attraction12.jpg",
                    "attractions/attraction13.jpg",
                  ]
                },{
                  id:'3',
                  price: "200$",
                days: 6,
                  locale_title: "BANDUNG_3_TITLE",
                  locale_stay: "BANDUNG_3_STAY",
                  locale_Description: "BANDUNG_3_DESCRIPTION",
                  locale_Detail: "BANDUNG_3_DETAIL",
                  locale_caegory_text: "BANDUNG_3_CAEGORY_TEXT",
                  locale_description_text_1 : "BANDUNG_3_DESCRIPTION_TEXT_1",
                  locale_description_text_2 : "BANDUNG_3_DESCRIPTION_TEXT_2",
                  locale_description_text_3 : "BANDUNG_3_DESCRIPTION_TEXT_3",
                  locale_description_text_4 : "BANDUNG_3_DESCRIPTION_TEXT_4",
                  locale_day_1_dep_1 : "BANDUNG_3_DAY_1_DEP_1",
                  locale_day_2_dep_1 : "BANDUNG_3_DAY_2_DEP_1",
                  locale_day_3_dep_1 : "BANDUNG_3_DAY_3_DEP_1",
                  locale_day_4_dep_1 : "BANDUNG_3_DAY_4_DEP_1",
                  locale_day_5_dep_1 : "BANDUNG_3_DAY_5_DEP_1",
                  locale_table_H1 : "BANDUNG_3_TABLE_H1",
                  locale_table_H2 : "BANDUNG_3_TABLE_H2",
                  locale_table_H3 : "BANDUNG_3_TABLE_H3",
                  locale_table_H4 : "BANDUNG_3_TABLE_H4",
                  locale_table_H1D : "BANDUNG_3_TABLE_H1D",
                  locale_table_H2D : "BANDUNG_3_TABLE_H2D",
                  locale_table_H3D1 : "BANDUNG_3_TABLE_H3D1",
                  locale_table_H3D2 : "BANDUNG_3_TABLE_H3D2",
                  locale_table_H3D3 : "BANDUNG_3_TABLE_H3D3",
                  locale_table_H3D4 : "BANDUNG_3_TABLE_H3D4",
                  locale_table_H4D1 : "BANDUNG_3_TABLE_H4D1",
                  locale_table_H4D2 : "BANDUNG_3_TABLE_H4D2",
                  src: "main.jpg",
                  images : [
                    "attractions/attraction1.jpg",
                    "attractions/attraction12.jpg",
                    "attractions/attraction13.jpg",
                  ]
                }
              ]
            },{
                id: '/komodo',
                type:"komodo",
                locale_title:"KOMODO",
                details:"KOMODO_DETAIL",
                pakages:[
                  {
                    id:'1',
                    price: "200$",
                days: 6,
                    locale_title: "KOMODO_1_TITLE",
                    locale_stay: "KOMODO_1_STAY",
                    locale_Description: "KOMODO_1_DESCRIPTION",
                    locale_Detail: "KOMODO_1_DETAIL",
                    locale_caegory_text: "KOMODO_1_CAEGORY_TEXT",
                    locale_description_text_1 : "KOMODO_1_DESCRIPTION_TEXT_1",
                    locale_description_text_2 : "KOMODO_1_DESCRIPTION_TEXT_2",
                    locale_description_text_3 : "KOMODO_1_DESCRIPTION_TEXT_3",
                    locale_description_text_4 : "KOMODO_1_DESCRIPTION_TEXT_4",
                    locale_day_1_dep_1 : "KOMODO_1_DAY_1_DEP_1",
                    locale_day_2_dep_1 : "KOMODO_1_DAY_2_DEP_1",
                    locale_day_3_dep_1 : "KOMODO_1_DAY_3_DEP_1",
                    locale_day_4_dep_1 : "KOMODO_1_DAY_4_DEP_1",
                    locale_day_5_dep_1 : "KOMODO_1_DAY_5_DEP_1",
                    locale_table_H1 : "KOMODO_1_TABLE_H1",
                    locale_table_H2 : "KOMODO_1_TABLE_H2",
                    locale_table_H3 : "KOMODO_1_TABLE_H3",
                    locale_table_H4 : "KOMODO_1_TABLE_H4",
                    locale_table_H1D : "KOMODO_1_TABLE_H1D",
                    locale_table_H2D : "KOMODO_1_TABLE_H2D",
                    locale_table_H3D1 : "KOMODO_1_TABLE_H3D1",
                    locale_table_H3D2 : "KOMODO_1_TABLE_H3D2",
                    locale_table_H3D3 : "KOMODO_1_TABLE_H3D3",
                    locale_table_H3D4 : "KOMODO_1_TABLE_H3D4",
                    locale_table_H4D1 : "KOMODO_1_TABLE_H4D1",
                    locale_table_H4D2 : "KOMODO_1_TABLE_H4D2",
                    src: "main.jpg",
                    images : [
                      "attractions/attraction1.jpg",
                      "attractions/attraction12.jpg",
                      "attractions/attraction13.jpg",
                    ]

                  },{
                    id:'2',
                    price: "200$",
                days: 6,
                    locale_title: "KOMODO_2_TITLE",
                    locale_stay: "KOMODO_2_STAY",
                    locale_Description: "KOMODO_2_DESCRIPTION",
                    locale_Detail: "KOMODO_2_DETAIL",
                    locale_caegory_text: "KOMODO_2_CAEGORY_TEXT",
                    locale_description_text_1 : "KOMODO_2_DESCRIPTION_TEXT_1",
                    locale_description_text_2 : "KOMODO_2_DESCRIPTION_TEXT_2",
                    locale_description_text_3 : "KOMODO_2_DESCRIPTION_TEXT_3",
                    locale_description_text_4 : "KOMODO_2_DESCRIPTION_TEXT_4",
                    locale_day_1_dep_1 : "KOMODO_2_DAY_1_DEP_1",
                    locale_day_2_dep_1 : "KOMODO_2_DAY_2_DEP_1",
                    locale_day_3_dep_1 : "KOMODO_2_DAY_3_DEP_1",
                    locale_day_4_dep_1 : "KOMODO_2_DAY_4_DEP_1",
                    locale_day_5_dep_1 : "KOMODO_2_DAY_5_DEP_1",
                    locale_table_H1 : "KOMODO_2_TABLE_H1",
                    locale_table_H2 : "KOMODO_2_TABLE_H2",
                    locale_table_H3 : "KOMODO_2_TABLE_H3",
                    locale_table_H4 : "KOMODO_2_TABLE_H4",
                    locale_table_H1D : "KOMODO_2_TABLE_H1D",
                    locale_table_H2D : "KOMODO_2_TABLE_H2D",
                    locale_table_H3D1 : "KOMODO_2_TABLE_H3D1",
                    locale_table_H3D2 : "KOMODO_2_TABLE_H3D2",
                    locale_table_H3D3 : "KOMODO_2_TABLE_H3D3",
                    locale_table_H3D4 : "KOMODO_2_TABLE_H3D4",
                    locale_table_H4D1 : "KOMODO_2_TABLE_H4D1",
                    locale_table_H4D2 : "KOMODO_2_TABLE_H4D2",
                    src: "main.jpg",
                    images : [
                      "attractions/attraction1.jpg",
                      "attractions/attraction12.jpg",
                      "attractions/attraction13.jpg",
                    ]
                  },{
                    id:'3',
                    price: "200$",
                days: 6,
                    locale_title: "KOMODO_3_TITLE",
                    locale_stay: "KOMODO_3_STAY",
                    locale_Description: "KOMODO_3_DESCRIPTION",
                    locale_Detail: "KOMODO_3_DETAIL",
                    locale_caegory_text: "KOMODO_3_CAEGORY_TEXT",
                    locale_description_text_1 : "KOMODO_3_DESCRIPTION_TEXT_1",
                    locale_description_text_2 : "KOMODO_3_DESCRIPTION_TEXT_2",
                    locale_description_text_3 : "KOMODO_3_DESCRIPTION_TEXT_3",
                    locale_description_text_4 : "KOMODO_3_DESCRIPTION_TEXT_4",
                    locale_day_1_dep_1 : "KOMODO_3_DAY_1_DEP_1",
                    locale_day_2_dep_1 : "KOMODO_3_DAY_2_DEP_1",
                    locale_day_3_dep_1 : "KOMODO_3_DAY_3_DEP_1",
                    locale_day_4_dep_1 : "KOMODO_3_DAY_4_DEP_1",
                    locale_day_5_dep_1 : "KOMODO_3_DAY_5_DEP_1",
                    locale_table_H1 : "KOMODO_3_TABLE_H1",
                    locale_table_H2 : "KOMODO_3_TABLE_H2",
                    locale_table_H3 : "KOMODO_3_TABLE_H3",
                    locale_table_H4 : "KOMODO_3_TABLE_H4",
                    locale_table_H1D : "KOMODO_3_TABLE_H1D",
                    locale_table_H2D : "KOMODO_3_TABLE_H2D",
                    locale_table_H3D1 : "KOMODO_3_TABLE_H3D1",
                    locale_table_H3D2 : "KOMODO_3_TABLE_H3D2",
                    locale_table_H3D3 : "KOMODO_3_TABLE_H3D3",
                    locale_table_H3D4 : "KOMODO_3_TABLE_H3D4",
                    locale_table_H4D1 : "KOMODO_3_TABLE_H4D1",
                    locale_table_H4D2 : "KOMODO_3_TABLE_H4D2",

                    src: "main.jpg",
                    images : [
                      "attractions/attraction1.jpg",
                      "attractions/attraction12.jpg",
                      "attractions/attraction13.jpg",
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
