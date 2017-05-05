"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var login_component_1 = require("./Login/login.component");
var new_user_component_1 = require("./NewUser/new-user.component");
var user_details_component_1 = require("./UserDetails/user-details.component");
var routes = [
    {
        path: 'login',
        component: login_component_1.LoginComponentClass
    },
    {
        path: 'new-user',
        component: new_user_component_1.NewUser_Class
    },
    {
        path: 'view-user',
        component: user_details_component_1.View
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes), common_1.CommonModule],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=routing.module.js.map