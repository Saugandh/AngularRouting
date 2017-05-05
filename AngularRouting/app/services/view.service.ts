import { Injectable } from '@angular/core';
import { Headers, Http, Response, HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ViewUser_ServiceClass {

    private userUrl = 'api/Users'; //url to web api
    constructor(private http: Http) { }

    getUserDetails() {

        return this.http.get(this.userUrl).map(data => {
            data = data.json();
            console.log("user table details here : ", data);
            return data;
        })

    }


}