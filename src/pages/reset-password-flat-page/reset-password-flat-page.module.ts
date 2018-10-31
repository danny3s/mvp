import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResetPasswordFlatPage } from './reset-password-flat-page';

import { ResetPasswordFlatModule } from '../../components/reset-password/reset-password-flat/reset-password-flat.module';

@NgModule({
  declarations: [
    ResetPasswordFlatPage,
  ],
  imports: [
    IonicPageModule.forChild(ResetPasswordFlatPage),
    ResetPasswordFlatModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ResetPasswordFlatPageModule {}
