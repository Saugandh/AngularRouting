import { Injectable } from '@angular/core';
import { FileUploadModule } from 'primeng/primeng';
import { RouterModule, ActivatedRoute, Params } from '@angular/router';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class FileUploadService {
    constructor(private http: Http, private formdata: FormData, private headers: Headers) { }

    fileUpload(event: any) {
        debugger;
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            let formData: FormData = new FormData();
            formData.append('uploadFile', file, file.name);
            let headers = new Headers()
            //headers.append('Content-Type', 'json');  
            //headers.append('Accept', 'application/json');  
            let options = new RequestOptions({ headers: headers });
            let apiUrl = "api/Images";
            this.http.post(apiUrl, formData, options)
                .map(res => res.json())
                .catch(error => Observable.throw(error))
                .subscribe(
                data => console.log('success'),
                error => console.log(error)
                )
        }
        window.location.reload();
    }  
}