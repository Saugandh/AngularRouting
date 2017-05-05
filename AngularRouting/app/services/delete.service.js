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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var DeleteUser_ServiceClass = (function () {
    function DeleteUser_ServiceClass(http) {
        this.http = http;
        this.userUrl = 'api/Users'; //url to web api
    }
    DeleteUser_ServiceClass.prototype.deleteUser = function (id) {
        return this.http.delete(this.userUrl + "/" + id)
            .map(function (res) { return res.json(); });
        //.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    };
    return DeleteUser_ServiceClass;
}());
DeleteUser_ServiceClass = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DeleteUser_ServiceClass);
exports.DeleteUser_ServiceClass = DeleteUser_ServiceClass;
//# sourceMappingURL=delete.service.js.map