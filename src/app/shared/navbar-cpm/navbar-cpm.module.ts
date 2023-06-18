import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarCPMComponent } from './navbar.component';

@NgModule({
    imports: [ RouterModule, CommonModule, NgbModule ],
    declarations: [ NavbarCPMComponent ],
    exports: [ NavbarCPMComponent ]
})

export class NavbarCPMModule {}
