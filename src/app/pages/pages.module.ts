import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';

import { ImageUploadModule } from '../shared/image-upload/image-upload.module';

import { LoginComponent } from './login/login.component';

import { Page404Component } from './page404/page404.component';
import { Page422Component } from './page422/page422.component';
import { Page500Component } from './page500/page500.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        TagInputModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        AngularMultiSelectModule,
        AgmCoreModule.forRoot({
            apiKey: 'NO_API_KEY'
        }),
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
