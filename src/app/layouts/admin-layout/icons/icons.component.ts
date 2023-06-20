import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageManagerService } from 'app/services/local-storage-manager.service';
import { MangeStaffService } from 'app/services/mange-staff.service';

@Component({
    selector: 'icons-cmp',
    // moduleId: module.id,
    templateUrl: 'icons.component.html'
})

export class IconsComponent implements OnInit {
    showFormStaff: boolean
    user: any = {}
    staffList: any[] = []
    addStaffForm: FormGroup;
    constructor(private mangeStaffService: MangeStaffService, private localStorageManagerService: LocalStorageManagerService,) { }


    async ngOnInit() {
        this.user = this.localStorageManagerService.getUser()
        this.showFormStaff = false;

        this.staffList = await this.mangeStaffService.getStaffByRestaurent(this.user.restaurent)

        this.addStaffForm = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            role: new FormControl('', Validators.required),
        });

    }

    async addStaff() {
        this.addStaffForm.value.restaurent = this.user.restaurent
        console.log(this.addStaffForm.value, 'this.addStaffForm.value');
        const result = await this.mangeStaffService.addStaff(this.addStaffForm.value);
        if (result) {
            this.ngOnInit()
        }
    }

}
