import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterFlatPage } from './register-flat-page';

import { RegisterFlatModule } from '../../components/register/register-flat/register-flat.module';

@NgModule({
  declarations: [
    RegisterFlatPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterFlatPage),
    RegisterFlatModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegisterFlatPageModule {}
