import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, Response, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../NewUser/user-template.component';
import { LoginComponentClass } from '../Login/login.component';
import { MyCookie } from '../services/Cookie.service';

@Injectable()
export class AuthenticationService {
    public token: string;
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private router: Router;

    constructor(private http: Http,private cookie:MyCookie) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(user:User) {
        return this.http.post('api/Users/fetchUser', JSON.stringify(user), {headers: this.headers})
            .map(data => {
                data = data.json();
                console.log("data is :: ", data);
                return data;
                //if ((user.username && data.username) && (user.password && data.password)) {
                //    return true;
                //}
                //else {
                //    false
                //}
                  //return data;
                
                
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        this.cookie.removeAll();
    }
}