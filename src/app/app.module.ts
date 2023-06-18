import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';


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


@NgModule({
    declarations: [
        AppComponent,
        AdminLayoutComponent,

    ],
    imports: [
        BrowserAnimationsModule,
        SidebarModule,
        NavbarCPMModule,
        ToastrModule.forRoot(),
        FooterModule,
        FixedPluginModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        PagesModule,
        AdminLayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
