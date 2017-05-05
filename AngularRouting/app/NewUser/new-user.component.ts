import { Component } from '@angular/core';
import { FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { Http } from '@angular/http';

import { User } from './user-template.component';
import { UserInsert_ServiceClass } from '../services/insert.service';
@Component({
    selector: 'new-user-tag',
    templateUrl: './new-user.html'

})
export class NewUser_Class {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private userUrl = 'api/Users'; //url to web api

    userObj: User

    name: string;
    email: string;
    phone: number;
    username: string;
    password: string;

    public insertForm = this.fb.group({
        name: ["", Validators.required],
        phone: ["", Validators.required],
        email: ["", Validators.required],
        username: ["", Validators.required],
        password: ["", Validators.required],
    });

    constructor(public fb: FormBuilder, private httpObj: Http,
        private userService: UserInsert_ServiceClass) { }


    onRegister(event: any) {

        //let formData = this.insertForm.value;
        this.userObj = new User();


        this.name = this.insertForm.controls.name.value;
        this.phone = this.insertForm.controls.phone.value;
        this.email = this.insertForm.controls.email.value;
        this.username = this.insertForm.controls.username.value;
        this.password = this.insertForm.controls.password.value;

        this.userObj.name = this.name;
        this.userObj.phone = this.phone;
        this.userObj.email = this.email;
        this.userObj.username = this.username;
        this.userObj.password = this.password;

        //console.log(name,phone,email);
        this.userService.create(this.userObj).then();

        console.log("Printing userObj values : ", this.userObj);
        alert("Registration Successful !");
    }

    private handleError(error: any): Promise<any> {
        console.error('********* An errrror occured ********* :', error);
        return Promise.reject(error.message || error);
    }


}