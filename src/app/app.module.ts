import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PagesModule } from './pages/pages.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { ToastrModule } from 'ngx-toastr';
import { NavbarCPMModule } from './shared/navbar-cpm/navbar-cpm.module';
import { NavbarCPMComponent } from './shared/navbar-cpm/navbar.component';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { AuthenticationService } from './services/authentication.service';
import { LocalStorageManagerService } from './services/local-storage-manager.service';
import { HttpClientModule } from "@angular/common/http";




@NgModule({
    declarations: [
        AppComponent,
        AdminLayoutComponent,

    ],
    imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        SidebarModule,
        NavbarCPMModule,
        ToastrModule.forRoot(),
        FooterModule,
        FixedPluginModule,
        HttpClientModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        PagesModule,
        AdminLayoutModule,
    ],
    providers: [AuthenticationService,LocalStorageManagerService],
    bootstrap: [AppComponent]
})
export class AppModule { }
