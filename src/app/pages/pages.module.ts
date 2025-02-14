import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
// import { NouisliderModule } from 'ng2-nouislider/src/ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { HttpClientModule } from '@angular/common/http';

import { ImageUploadModule } from '../shared/image-upload/image-upload.module';

import { LoginComponent } from './login/login.component';

import { Page404Component } from './page404/page404.component';
import { Page422Component } from './page422/page422.component';
import { Page500Component } from './page500/page500.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        TagInputModule,
        // NouisliderModule.forRoot(),
        // JwBootstrapSwitchNg2Module,
        // AngularMultiSelectModule,
        HttpClientModule,
        ImageUploadModule
    ],
    declarations: [
        LoginComponent,
        Page404Component,
        Page422Component,
        Page500Component
    ]
})
export class PagesModule { }
