import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { IconsComponent } from './icons/icons.component';
import { TableComponent } from './table/table.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { TypographyComponent } from './typography/typography.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    MapsComponent,
    NotificationsComponent,
    IconsComponent,
    TableComponent,

    // UpgradeComponent,
    // TypographyComponent
  ],
})

export class AdminLayoutModule { }
