import { Component } from '@angular/core';
import { FileUploadModule } from 'primeng/primeng';
import { RouterModule, ActivatedRoute, Params } from '@angular/router';
import { MessagesModule, Message } from 'primeng/primeng';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { FileUploadService } from '../services/fileUpload.service';

@Component({
    selector: 'fileUp-tag',
    templateUrl: './file.component.html',
})
export class FileUploadComponent {

    constructor(private fileUploadservice: FileUploadService) { }

    onUpload(event: any) {

        this.fileUploadservice.fileUpload(event);

    }
        
        
}