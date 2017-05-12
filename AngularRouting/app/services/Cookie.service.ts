import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Headers, Http, Response, HttpModule } from '@angular/http';
import { Cookie,CookieService,UnmanagedCookieService } from 'ng2-cookies';
@Injectable()
export class MyCookie {

    title = 'app works!';
    cookies: Object;
    keys: Array<string>;
    cName: string;
    cValue: string;
    rName: string;
    checkName: string;

    constructor() {
        this.updateCookie();
        console.log(this.cookies);
    }
    updateCookie() {
        this.cookies = Cookie.getAll();
        this.keys = Object.keys(this.cookies);
    }
    addCookie(cName: string, cValue: string) {
        console.log('Adding: ', cName, cValue);
        Cookie.set(cName, cValue);
        this.updateCookie();
    }
    removeCookie(rName: string) {
        console.log('Removing: ', rName);
        Cookie.delete(rName);
        this.updateCookie();
    }
    removeAll() {
        console.log('Removing all cookies');
        Cookie.deleteAll();
        this.updateCookie();
    }
    checkCookie() {
        console.log('Checking: ', this.checkName);
        console.log(Cookie.check(this.checkName));
        window.alert('Check cookie ' + this.checkName + ' returned ' + Cookie.check(this.checkName));
    }

}