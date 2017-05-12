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
var Rx_1 = require("rxjs/Rx");
var FileUploadService = (function () {
    function FileUploadService(http, formdata, headers) {
        this.http = http;
        this.formdata = formdata;
        this.headers = headers;
    }
    FileUploadService.prototype.fileUpload = function (event) {
        debugger;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('uploadFile', file, file.name);
            var headers = new http_1.Headers();
            //headers.append('Content-Type', 'json');  
            //headers.append('Accept', 'application/json');  
            var options = new http_1.RequestOptions({ headers: headers });
            var apiUrl = "api/Images";
            this.http.post(apiUrl, formData, options)
                .map(function (res) { return res.json(); })
                .catch(function (error) { return Rx_1.Observable.throw(error); })
                .subscribe(function (data) { return console.log('success'); }, function (error) { return console.log(error); });
        }
        window.location.reload();
    };
    return FileUploadService;
}());
FileUploadService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, FormData, http_1.Headers])
], FileUploadService);
exports.FileUploadService = FileUploadService;
//# sourceMappingURL=fileUpload.service.js.map