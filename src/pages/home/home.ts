import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { HomeService } from '../../services/home-service';
import { AppSettings } from '../../services/app-settings'

import { IService } from '../../services/IService';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]
})
export class HomePage {
  
  data:any = {};
  page: any;
  params: any = {};
  service2: IService;

  constructor(public navCtrl: NavController, public service:HomeService, public modalCtrl: ModalController, navParams: NavParams) {
    service.load().subscribe(snapshot => {
      this.data = snapshot;
    });
    
 


  }



 

}
