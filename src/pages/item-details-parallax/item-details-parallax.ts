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
            
          ]

    };

  }
}
