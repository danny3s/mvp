import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IService } from '../../services/IService';

@IonicPage()
@Component({
  templateUrl: 'item-details-search-bar.html'
})
export class ItemDetailsPageSearchBar {

  page:any;
  service: IService;
  params: any = {};

  data:any = {};


  constructor(public navCtrl: NavController, navParams: NavParams){
 
    this.params.data = {
 
            "headerTitle": "Field + header 2",
            "title": "Search Friends",
            "headerImage": "assets/images/background/39.jpg",
            "items": [
                {
                    "id": 1,
                    "title": "Colombia",
                    "avatar": "assets/images/avatar/25.jpg"
                },
                {
                    "id": 2,
                    "title": "Argentina",
                 
         
                    "avatar": "assets/images/avatar/26.jpg"
                },
                {
                    "id": 3,
                    "title": "Brazil",
                    "avatar": "assets/images/avatar/27.jpg"
                },
                {
                    "id": 4,
                    "title": "Mexico",
                    "avatar": "assets/images/avatar/28.jpg"
                },
                {
                    "id": 5,
                    "title": "Chile",
                    "avatar": "assets/images/avatar/29.jpg"
                },
                {
                    "id": 6,
                    "title": "Cuba",
                    "avatar": "assets/images/avatar/30.jpg"
                },
                {
                    "id": 7,
                    "title": "Panama",
                    "avatar": "assets/images/avatar/31.jpg"
                },
                {
                    "id": 8,
                    "title": "Jamaica",
                    "avatar": "assets/images/avatar/32.jpg"
                }
            ]
    };


    this.params.events = {

            'onTextChange': function(text: any) {
              console.log("a")
            },
            'onItemClick': function(item: any) {
              console.log("a")
            }
  
    };


  }
}
