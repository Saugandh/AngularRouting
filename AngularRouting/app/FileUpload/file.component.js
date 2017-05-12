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
var fileUpload_service_1 = require("../services/fileUpload.service");
var FileUploadComponent = (function () {
    function FileUploadComponent(fileUploadservice) {
        this.fileUploadservice = fileUploadservice;
    }
    FileUploadComponent.prototype.onUpload = function (event) {
        this.fileUploadservice.fileUpload(event);
    };
    return FileUploadComponent;
}());
FileUploadComponent = __decorate([
    core_1.Component({
        selector: 'fileUp-tag',
        templateUrl: './file.component.html',
    }),
    __metadata("design:paramtypes", [fileUpload_service_1.FileUploadService])
], FileUploadComponent);
exports.FileUploadComponent = FileUploadComponent;
//# sourceMappingURL=file.component.js.map