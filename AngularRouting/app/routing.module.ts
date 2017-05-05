import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

import { DashboardClass } from './Dash/dash.component';
import { LoginComponentClass } from './Login/login.component';
import { NewUser_Class } from './NewUser/new-user.component';
import { View } from './UserDetails/user-details.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponentClass
    },
    {
        path: 'new-user',
        component: NewUser_Class
    },
    {
        path: 'view-user',
        component: View
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes),CommonModule],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
