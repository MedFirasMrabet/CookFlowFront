import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from './table/table.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'plates',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'staff',          component: IconsComponent },
    { path: 'stock',           component: MapsComponent },
    { path: 'notes',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }

];
