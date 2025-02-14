import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { LocalStorageManagerService } from 'app/services/local-storage-manager.service';
import { ManageStockService } from 'app/services/manage-stock.service';

declare var google: any;

@Component({
    // moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'maps.component.html'
})

export class MapsComponent implements OnInit {
    showFormStock: boolean
    user: any = {}
    stockList: any[] = []
    addStockForm: UntypedFormGroup;
    constructor(private manageStockService: ManageStockService, private localStorageManagerService: LocalStorageManagerService) { }


    async ngOnInit() {
        this.user = this.localStorageManagerService.getUser()
        this.stockList = await this.manageStockService.getStockByRestaurent(this.user.restaurent)
        this.showFormStock = false;

        this.addStockForm = new UntypedFormGroup({
            name: new UntypedFormControl('', Validators.required),
            price: new UntypedFormControl('', Validators.required),
            quantity: new UntypedFormControl('', Validators.required),
            minimumStockLevel: new UntypedFormControl('', Validators.required),
            expiryDate: new UntypedFormControl('', Validators.required),
            stockCategory: new UntypedFormControl('', Validators.required),
            restaurent: new UntypedFormControl('', Validators.required)
        });

    }

    addFormStock() {
        this.showFormStock = false;
    }
    async addStock() {
        this.addStockForm.value.restaurent = this.user.restaurent
        this.addStockForm.value.comments = []
        this.addStockForm.value.expiryDate =  new Date(this.addStockForm.value.expiryDate).getTime();
        const result = await this.manageStockService.addStock(this.addStockForm.value);
        if (result) {
            this.ngOnInit()
        }
    }
}

