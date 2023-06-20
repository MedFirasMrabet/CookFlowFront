import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LocalStorageManagerService } from 'app/services/local-storage-manager.service';
import { ManageTechnicalFileService } from 'app/services/manage-technical-file.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    // moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit {
    uploadForm: FormGroup;
    files: any
    user: any
    file: any
    iframeUrl
    showImage = false;
    constructor(private manageTechnicalFileServicefd: ManageTechnicalFileService, private localStorageManagerService: LocalStorageManagerService) {
        this.uploadForm = new FormGroup({
            file: new FormControl(null) // FormControl for the file input
        });
    }

    async ngOnInit() {
        this.user = this.localStorageManagerService.getUser()
        this.showImage = false
        this.files = await this.manageTechnicalFileServicefd.getFilesByRestaurent(this.user.restaurent)
        console.log(this.files, 'files');

    }
    onFileSelect(event: any) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.uploadForm.get('file').setValue(file);
        }
    }

    async onSubmit() {
        const formData = new FormData();
        formData.append('file', this.uploadForm.get('file').value);
        console.log(formData, 'fdsfsd');

        const result = await this.manageTechnicalFileServicefd.uploadFile(formData)
        console.log(result, 'result');
        this.ngOnInit()

    }

    getFile(file) {
        this.file = file
        this.showImage = true
        return `http://localhost:3000/${this.file.path}`;


    }
}
