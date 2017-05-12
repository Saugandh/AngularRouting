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
var view_service_1 = require("../services/view.service");
var core_2 = require("@angular/core");
var delete_service_1 = require("../services/delete.service");
var authentication_service_1 = require("../services/authentication.service");
var View = (function () {
    function View(viewUserService, changeDetectorRef, deleteAdminService, authService) {
        this.viewUserService = viewUserService;
        this.changeDetectorRef = changeDetectorRef;
        this.deleteAdminService = deleteAdminService;
        this.authService = authService;
    }
    ;
    View.prototype.doView = function () {
        var _this = this;
        this.viewUserService.getUserDetails().subscribe(function (data) {
            _this.testResponse = data;
            console.log("I CANT SEE DATA HERE: ", _this.testResponse);
        });
    };
    View.prototype.doDelete = function (delVal) {
        console.log(delVal);
        this.deleteAdminService.deleteUser(delVal).subscribe();
        this.changeDetectorRef.detectChanges();
        this.doView();
    };
    View.prototype.logout = function () {
        this.authService.logout();
    };
    return View;
}());
View = __decorate([
    core_1.Component({
        selector: 'view-tag',
        templateUrl: "./user-details.html",
    }),
    __metadata("design:paramtypes", [view_service_1.ViewUser_ServiceClass, core_2.ChangeDetectorRef,
        delete_service_1.DeleteUser_ServiceClass, authentication_service_1.AuthenticationService])
], View);
exports.View = View;
//# sourceMappingURL=user-details.component.js.map