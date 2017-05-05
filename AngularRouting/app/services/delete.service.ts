import { Injectable } from '@angular/core';
import { Headers, Http, Response, HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()

export class DeleteUser_ServiceClass {

    private userUrl = 'api/Users'; //url to web api
    constructor(private http: Http) { }

    deleteUser(id: number) {
        return this.http.delete(`${this.userUrl}/${id}`)
            .map((res: Response) => res.json())
        //.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}