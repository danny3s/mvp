import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterFlat } from './register-flat';

@NgModule({
    declarations: [
        RegisterFlat,
    ],
    imports: [
        IonicPageModule.forChild(RegisterFlat),
    ],
    exports: [
        RegisterFlat
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RegisterFlatModule { }
