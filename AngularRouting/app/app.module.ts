import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './routing.module';

//component
import { DashboardClass } from './Dash/dash.component';
import { LoginComponentClass } from './Login/login.component';
import { NewUser_Class } from './NewUser/new-user.component';
import { View } from './UserDetails/user-details.component';
import { FileUploadComponent } from '../app/FileUpload/file.component';

//ext api
import { AccordionModule, MenuItem } from 'primeng/primeng';     //accordion and accordion tab
import { FileUploadModule } from 'primeng/primeng';
import { MessagesModule, GrowlModule } from 'primeng/primeng';

//services

import { UserInsert_ServiceClass } from './services/insert.service';
import { ViewUser_ServiceClass } from './services/view.service';
import { DeleteUser_ServiceClass } from './services/delete.service';
import { AuthenticationService } from './services/authentication.service';
import { MyCookie } from './services/Cookie.service';
import { FileUploadService} from './services/fileUpload.service';

@NgModule({

    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpModule, FormsModule, BrowserAnimationsModule,
        AccordionModule, FileUploadModule, MessagesModule, GrowlModule],
    declarations: [AppComponent, DashboardClass, LoginComponentClass, NewUser_Class, View, FileUploadComponent],
    providers: [UserInsert_ServiceClass, ViewUser_ServiceClass, DeleteUser_ServiceClass, AuthenticationService, MyCookie, FileUploadService],
    bootstrap: [AppComponent]

})
export class AppModule {


}
