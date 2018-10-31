import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResetPasswordFlat } from './reset-password-flat';

@NgModule({
    declarations: [
        ResetPasswordFlat,
    ],
    imports: [
        IonicPageModule.forChild(ResetPasswordFlat),
    ],
    exports: [
        ResetPasswordFlat
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ResetPasswordFlatModule { }
