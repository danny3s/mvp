import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IService } from '../../services/IService';

@IonicPage()
@Component({
  templateUrl: 'item-details-wizard.html'
})
export class ItemDetailsPageWizard {

  page: any;
  service: IService;
  params: any = {};

  constructor(public navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
   
    this.params.data = {
      "backgroundImage": "assets/images/background/36.jpg",
            "btnNext": "Next",
            "btnFinish": "Finish",
            "items": [
                {
                    "welcome": "Welcome",
                    "backgroundSlider": "assets/images/background/39.jpg",
                    "title": "Welcome to our new iOS theme",
                    "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    "welcome": "Welcome",
                    "backgroundSlider": "assets/images/background/39.jpg",
                    "title": "Welcome to our new iOS theme",
                    "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    "welcome": "Welcome",
                    "backgroundSlider": "assets/images/background/39.jpg",
                    "title": "Welcome to our new iOS theme",
                    "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                }
            ]
    }


    
    this.params.events = {
      'onFinish': function(event: any){
        console.log('Finish');
      }
    }
  }
}
