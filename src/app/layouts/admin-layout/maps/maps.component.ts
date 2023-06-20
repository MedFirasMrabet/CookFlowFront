import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    addStockForm: FormGroup;
    constructor(private manageStockService: ManageStockService, private localStorageManagerService: LocalStorageManagerService) { }


    async ngOnInit() {
        this.user = this.localStorageManagerService.getUser()
        this.stockList = await this.manageStockService.getStockByRestaurent(this.user.restaurent)
        this.showFormStock = false;

        this.addStockForm = new FormGroup({
            name: new FormControl('', Validators.required),
            price: new FormControl('', Validators.required),
            quantity: new FormControl('', Validators.required),
            minimumStockLevel: new FormControl('', Validators.required),
            expiryDate: new FormControl('', Validators.required),
            stockCategory: new FormControl('', Validators.required),
            restaurent: new FormControl('', Validators.required)
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

