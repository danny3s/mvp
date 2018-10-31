import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RegisterService } from '../../services/register-service';
import { ToastService } from '../../services/toast-service'

@IonicPage()
@Component({
  selector: 'register-flat-page',
  templateUrl: 'register-flat-page.html',
  providers: [
    RegisterService, ToastService
  ]
})
export class RegisterFlatPage {

  data : {};
  events : {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: RegisterService, private toastCtrl: ToastService) {
    this.data = this.service.getDataForRegisterFlat();
    this.events = {
      "onLogin" : this.onLogin,
      "onRegister": this.onRegister,
      "onTermsConditions" : this.onTermsConditions,
      "onPrivacyPolicy" : this.onPrivacyPolicy
    };
  }
  /*  Open LoginFlatPage
 		=================================*/
  onLogin = (params):any => {
      this.navCtrl.push("LoginFlatPage");
  };
  /*  Todo override this function with your logic
  =================================================*/
  onRegister = (params):any => {
      this.toastCtrl.presentToast('Sign up now');
  };
  /*  Todo override this function with your logic
  =================================================*/
  onTermsConditions = (params):any => {
      this.toastCtrl.presentToast('Terms Conditions');
  };
  /*  Todo override this function with your logic
  =================================================*/
  onPrivacyPolicy = (params):any => {
      this.toastCtrl.presentToast('Privacy Policy');
  };
}
