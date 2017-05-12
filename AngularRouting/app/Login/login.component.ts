import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from '../NewUser/user-template.component';
import { DashboardClass } from '../Dash/dash.component';
import { MyCookie } from '../services/Cookie.service';
@Component({
    selector: 'login-tag',
    templateUrl: './login.html',
})
export class LoginComponentClass implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    user: User;
    response: any;
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService, private cookie: MyCookie) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        this.user = new User();
        this.user.username = this.model.username;
        this.user.password = this.model.password;
        this.authenticationService.login(this.user)
            .subscribe((result) => {
                this.response = result;
                if (Object.keys(result).length == 0) {
                    console.log("Login failed");
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                    alert("Incorrect credentials");
                }
                else {
                    console.log("Login success");
                    this.cookie.addCookie(this.user.username, this.user.password);
                    this.router.navigate(['view-user']);
                }

            });
    }

}