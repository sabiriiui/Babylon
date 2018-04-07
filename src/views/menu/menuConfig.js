import React from "react";
import ReactDOM from "react-dom";
const MenuConfig = {

  getMenuJSON: function () {
    return {
      "data": {
        "items": [
          {
            id: "home",
            link: "home",
            navigationItem: "Home",
            menu: []
          },
          {
            id: "distinction",
            link: "distinction",
            navigationItem: "Distinction",
            menu: [
              {
                name: "Indonesia",
                link: "indonesia",
                shortDescription: "",
                iconClass: "",
                menu: [
                  {
                    name: "Gilis",
                    link: "gilis",
                    shortDescription: "",
                    iconClass: ""
                  },
                  {
                    name: "Lombok",
                    link: "lombok",
                    shortDescription: "",
                    iconClass: ""
                  },
                  {
                    name: "Bali",
                    link: "bali",
                    shortDescription: "",
                    iconClass: ""
                  },
                  {
                    name: "Jakarta",
                    link: "jakarta",
                    shortDescription: "",
                    iconClass: ""
                  },
                  {
                    name: "Puncak",
                    link: "puncak",
                    shortDescription: "",
                    iconClass: ""
                  }
                ]
              } 
            ]
          },
          {
            id: "tours",
            navigationItem: "Tours",
            menu: [
              {
                name: "Individual",
                link: "individual",
                shortDescription: "",
                iconClass: ""
              },
              {
                name: "Honeymoon",
                link: "honeymoon",
                shortDescription: "",
                iconClass: ""
              },
              {
                name: "Group",
                link: "group",
                shortDescription: "",
                iconClass: ""
              }
            ]
          },
          {
            id: "services",
            link: "services",
            navigationItem: "Services",
            menu: []
          },
          {
            id: "contactus",
            link: "contactus",
            navigationItem: "Contact US",
            menu: []
          },
        ]
      }
    }
  }
}

export default MenuConfig;
