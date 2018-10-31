import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IService } from '../../services/IService';

@IonicPage()
@Component({
  templateUrl: 'item-details-parallax.html'
})
export class ItemDetailsPageParallax {

  page: any;
  service: IService;
  params: any = {};

  constructor(public navCtrl: NavController, navParams: NavParams) {

    this.params.data = {

          "headerTitle": "Profile",
          "headerImage": "assets/images/background/13.jpg",
          "avatar": "assets/images/avatar/19.jpg",
          "title": "Amy Lee",
          "items": [
              {
                  "id": 1,
                  "avatar": "assets/images/avatar/16.jpg",
                  "title": "ORR Available",
                  "button": "1500"
              },
              {
                  "id": 2,
                  "avatar": "assets/images/avatar/17.jpg",
                  "title": "Logan Rogers",
                  "subtitle": "@logan",
                  "button": "Follow"
              },
              {
                  "id": 3,
                  "avatar": "assets/images/avatar/18.jpg",
                  "title": "Gary Russell",
                  "subtitle": "@gary",
                  "button": "Follow"
              },
              {
                  "id": 4,
                  "avatar": "assets/images/avatar/19.jpg",
                  "title": "Amy Lee",
                  "subtitle": "@amy",
                  "button": "Follow"
              },
              {
                  "id": 5,
                  "avatar": "assets/images/avatar/20.jpg",
                  "title": "Silvia Salvador",
                  "subtitle": "@silvia",
                  "button": "Follow"
              },
              {
                  "id": 6,
                  "avatar": "assets/images/avatar/15.jpg",
                  "title": "Alexandra Parker",
                  "subtitle": "@alexandra",
                  "button": "Follow"
              },
              {
                  "id": 7,
                  "avatar": "assets/images/avatar/22.jpg",
                  "title": "Gabriel Mascareñas",
                  "subtitle": "@gabriel",
                  "button": "Follow"
              },
              {
                  "id": 8,
                  "avatar": "assets/images/avatar/14.jpg",
                  "title": "Sofia Clarke",
                  "subtitle": "@stephen",
                  "button": "Follow"
              },
              {
                  "id": 9,
                  "avatar": "assets/images/avatar/21.jpg",
                  "title": "Lisa Green",
                  "subtitle": "@lisa",
                  "button": "Follow"
              },
              {
                  "id": 10,
                  "avatar": "assets/images/avatar/23.jpg",
                  "title": "Danijel Bilic",
                  "subtitle": "@danijel",
                  "button": "Follow"
              }
          ]

    };

  }
}
