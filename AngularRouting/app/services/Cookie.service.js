"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_cookies_1 = require("ng2-cookies");
var MyCookie = (function () {
    function MyCookie() {
        this.title = 'app works!';
        this.updateCookie();
        console.log(this.cookies);
    }
    MyCookie.prototype.updateCookie = function () {
        this.cookies = ng2_cookies_1.Cookie.getAll();
        this.keys = Object.keys(this.cookies);
    };
    MyCookie.prototype.addCookie = function (cName, cValue) {
        console.log('Adding: ', cName, cValue);
        ng2_cookies_1.Cookie.set(cName, cValue);
        this.updateCookie();
    };
    MyCookie.prototype.removeCookie = function (rName) {
        console.log('Removing: ', rName);
        ng2_cookies_1.Cookie.delete(rName);
        this.updateCookie();
    };
    MyCookie.prototype.removeAll = function () {
        console.log('Removing all cookies');
        ng2_cookies_1.Cookie.deleteAll();
        this.updateCookie();
    };
    MyCookie.prototype.checkCookie = function () {
        console.log('Checking: ', this.checkName);
        console.log(ng2_cookies_1.Cookie.check(this.checkName));
        window.alert('Check cookie ' + this.checkName + ' returned ' + ng2_cookies_1.Cookie.check(this.checkName));
    };
    return MyCookie;
}());
MyCookie = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], MyCookie);
exports.MyCookie = MyCookie;
//# sourceMappingURL=Cookie.service.js.map