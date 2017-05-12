import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardClass } from './Dash/dash.component';
import { RouterModule } from '@angular/router';
import { LoginComponentClass } from './Login/login.component';
import { NewUser_Class } from './NewUser/new-user.component';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AppRoutingModule } from './routing.module';
import { UserInsert_ServiceClass } from './services/insert.service';
import { View } from './UserDetails/user-details.component';
import { ViewUser_ServiceClass } from './services/view.service';
import { AuthenticationService } from './services/authentication.service';
import { FormsModule } from '@angular/forms'; .3
import { MyCookie } from './services/Cookie.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({

    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpModule, FormsModule, BrowserAnimationsModule  ],
    declarations: [AppComponent, DashboardClass, LoginComponentClass, NewUser_Class,View],
    providers: [UserInsert_ServiceClass, ViewUser_ServiceClass, AuthenticationService, MyCookie],
    bootstrap: [AppComponent]

})
export class AppModule {


}
