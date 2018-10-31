import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ResetPasswordService } from '../../services/reset-password-service';
import { ToastService } from '../../services/toast-service'

@IonicPage()
@Component({
  selector: 'reset-password-flat-page',
  templateUrl: 'reset-password-flat-page.html',
  providers: [
    ResetPasswordService, ToastService
  ]
})
export class ResetPasswordFlatPage {

  data : {};
  events: {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ResetPasswordService, private toastCtrl: ToastService) {
    this.data = this.service.getDataForResetPassowrdFlat();
    this.events = {
      "onRegister": this.onRegister,
      "onLogin": this.onLogin,
      "onResetPassword": this.onResetPassword
    };
  }
  /*  Open LoginDarkPage
  	==================================*/
  onLogin = (params): any => {
    this.navCtrl.push("LoginFlatPage");
  };
  /*  Open LoginDarkPage
  	==================================*/
  onRegister = (params): any => {
    this.navCtrl.push("RegisterFlatPage");
  };
  
  /*  Todo override this function with your logic
  =================================================*/
  onResetPassword = (params): any => {
    this.toastCtrl.presentToast('Reset Password');
  };
}
