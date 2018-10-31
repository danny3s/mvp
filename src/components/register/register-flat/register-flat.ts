import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'register-flat',
    templateUrl: 'register-flat.html'
})
export class RegisterFlat {
    @Input() data: any;
    @Input() events: any;

    private username: string;
    private password: string;
    private email: string;

    private isUsernameValid: boolean;
    private isPasswordValid: boolean;
    private isEmailValid: boolean;
    private regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    constructor() { 
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        this.isEmailValid = true;
    }

    onEvent = (event: string): void => {
        if (event == "onRegister" && !this.validate()) {
            return ;
        }
        if (this.events[event]) {
            this.events[event]({
                "username" : this.username,
                "password" : this.password,
                "email" : this.email
            });
        }
    }

    validate():boolean {
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        this.isEmailValid = true;

        if (!this.username ||this.username.length == 0) {
            this.isUsernameValid = false;
        }

        if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
        }

        this.isEmailValid = this.regex.test(this.email);
        
        return this.isPasswordValid && this.isUsernameValid && this.isEmailValid;
    }
}
