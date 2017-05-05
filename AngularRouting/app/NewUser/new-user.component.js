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
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var user_template_component_1 = require("./user-template.component");
var insert_service_1 = require("../services/insert.service");
var NewUser_Class = (function () {
    function NewUser_Class(fb, httpObj, userService) {
        this.fb = fb;
        this.httpObj = httpObj;
        this.userService = userService;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.userUrl = 'api/Users'; //url to web api
        this.insertForm = this.fb.group({
            name: ["", forms_1.Validators.required],
            phone: ["", forms_1.Validators.required],
            email: ["", forms_1.Validators.required],
            username: ["", forms_1.Validators.required],
            password: ["", forms_1.Validators.required],
        });
    }
    NewUser_Class.prototype.onRegister = function (event) {
        //let formData = this.insertForm.value;
        this.userObj = new user_template_component_1.User();
        this.name = this.insertForm.controls.name.value;
        this.phone = this.insertForm.controls.phone.value;
        this.email = this.insertForm.controls.email.value;
        this.username = this.insertForm.controls.username.value;
        this.password = this.insertForm.controls.password.value;
        this.userObj.name = this.name;
        this.userObj.phone = this.phone;
        this.userObj.email = this.email;
        this.userObj.username = this.username;
        this.userObj.password = this.password;
        //console.log(name,phone,email);
        this.userService.create(this.userObj).then();
        console.log("Printing userObj values : ", this.userObj);
        alert("Registration Successful !");
    };
    NewUser_Class.prototype.handleError = function (error) {
        console.error('********* An errrror occured ********* :', error);
        return Promise.reject(error.message || error);
    };
    return NewUser_Class;
}());
NewUser_Class = __decorate([
    core_1.Component({
        selector: 'new-user-tag',
        templateUrl: './new-user.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, http_1.Http,
        insert_service_1.UserInsert_ServiceClass])
], NewUser_Class);
exports.NewUser_Class = NewUser_Class;
//# sourceMappingURL=new-user.component.js.map