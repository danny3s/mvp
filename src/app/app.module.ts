import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppSettings } from '../services/app-settings'
import { ToastService } from '../services/toast-service'
import { LoadingService } from '../services/loading-service'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

import { WizardLayout2 } from '../components/wizard/layout-2/wizard-layout-2';
import { ImageGalleryLayout1 } from '../components/image-gallery/layout-1/image-gallery-layout-1';
import { SearchBarLayout3 } from '../components/search-bar/layout-3/search-bar-layout-3';
import { LoginFlatPageModule } from '../pages/login-flat-page/login-flat-page.module';
import { RegisterFlatPageModule } from '../pages/register-flat-page/register-flat-page.module';
import { ResetPasswordFlatPageModule } from '../pages/reset-password-flat-page/reset-password-flat-page.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(AppSettings.FIREBASE_CONFIG),
    AngularFireDatabaseModule, AngularFireAuthModule, AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    StatusBar, SplashScreen,
    ToastService, LoadingService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {
}
