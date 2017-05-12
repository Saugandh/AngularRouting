import { Component, OnInit } from '@angular/core';
import { ViewUser_ServiceClass } from '../services/view.service';
import { User } from '../NewUser/user-template.component';
import { Response } from '@angular/http';
import { NgForm, FormGroup, FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { DeleteUser_ServiceClass } from '../services/delete.service';
import { AuthenticationService } from '../services/authentication.service';
import { LoginComponentClass } from '../Login/login.component';
import { FileUpload } from 'primeng/primeng';
import { FileUploadService } from '../services/fileUpload.service';

@Component({

    selector: 'view-tag',
    templateUrl: `./user-details.html`,

})

export class View {
    admin: User[];
    testResponse: any;
    constructor(private viewUserService: ViewUser_ServiceClass, private changeDetectorRef: ChangeDetectorRef,
        private deleteAdminService: DeleteUser_ServiceClass, private authService:AuthenticationService) { };

        doView() {

            this.viewUserService.getUserDetails().subscribe(data => {
            this.testResponse = data;
             console.log("I CANT SEE DATA HERE: ", this.testResponse);
        }

        );
    }


    doDelete(delVal: any) {
        console.log(delVal);

        this.deleteAdminService.deleteUser(delVal).subscribe();
        this.changeDetectorRef.detectChanges();
        this.doView();
        }

    logout() {

        this.authService.logout();
        
    }
}