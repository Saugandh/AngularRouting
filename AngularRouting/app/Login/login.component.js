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
var authentication_service_1 = require("../services/authentication.service");
var router_1 = require("@angular/router");
var user_template_component_1 = require("../NewUser/user-template.component");
var LoginComponentClass = (function () {
    function LoginComponentClass(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    LoginComponentClass.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
    };
    LoginComponentClass.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.user = new user_template_component_1.User();
        this.user.username = this.model.username;
        this.user.password = this.model.password;
        this.authenticationService.login(this.user)
            .subscribe(function (result) {
            _this.response = result;
            if (Object.keys(result).length == 0) {
                console.log("Login failed");
                _this.error = 'Username or password is incorrect';
                _this.loading = false;
                alert("Incorrect credentials");
            }
            else {
                console.log("Login success");
                _this.router.navigate(['view-user']);
            }
        });
    };
    return LoginComponentClass;
}());
LoginComponentClass = __decorate([
    core_1.Component({
        selector: 'login-tag',
        templateUrl: './login.html',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        authentication_service_1.AuthenticationService])
], LoginComponentClass);
exports.LoginComponentClass = LoginComponentClass;
//# sourceMappingURL=login.component.js.map