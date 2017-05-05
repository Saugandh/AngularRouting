import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


import { NewUser_Class } from '../NewUser/new-user.component';
import { User } from '../NewUser/user-template.component';

@Injectable()
export class UserInsert_ServiceClass {

    private userUrl = 'api/Users'; //url to web api
    private headers = new Headers({ 'Content-Type': 'application/json' });

    testResponse: any;

    constructor(private http: Http) { }

    create(user: User): Promise<User> {
        return this.http
            .post(this.userUrl, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(() => user)
            .catch(this.handleError);
        
    }


    //getUsers() {
    //    return this.http.get('api/Users').map(data => {
    //        data = data.json();
    //        return data;
    //    });
    //}



    private handleError(error: any): Promise<any> {
        console.error('An errrror occured', error);
        return Promise.reject(error.message || error);
    }
}
