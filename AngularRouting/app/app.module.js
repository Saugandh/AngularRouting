"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var dash_component_1 = require("./Dash/dash.component");
var login_component_1 = require("./Login/login.component");
var new_user_component_1 = require("./NewUser/new-user.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var routing_module_1 = require("./routing.module");
var insert_service_1 = require("./services/insert.service");
var user_details_component_1 = require("./UserDetails/user-details.component");
var view_service_1 = require("./services/view.service");
var authentication_service_1 = require("./services/authentication.service");
var forms_2 = require("@angular/forms");
.3;
var Cookie_service_1 = require("./services/Cookie.service");
var animations_1 = require("@angular/platform-browser/animations");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, routing_module_1.AppRoutingModule, forms_1.ReactiveFormsModule, http_1.HttpModule, forms_2.FormsModule, animations_1.BrowserAnimationsModule],
        declarations: [app_component_1.AppComponent, dash_component_1.DashboardClass, login_component_1.LoginComponentClass, new_user_component_1.NewUser_Class, user_details_component_1.View],
        providers: [insert_service_1.UserInsert_ServiceClass, view_service_1.ViewUser_ServiceClass, authentication_service_1.AuthenticationService, Cookie_service_1.MyCookie],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map