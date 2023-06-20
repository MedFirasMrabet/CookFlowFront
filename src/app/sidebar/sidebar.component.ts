import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    // { path: '/admin/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/admin/staff',         title: 'Staff',             icon:'nc-diamond',    class: '' },
    { path: '/admin/stock',          title: 'Stock',              icon:'nc-pin-3',      class: '' },
    { path: '/admin/notes', title: 'Notes',     icon:'nc-bell-55',    class: '' },
    // { path: '/admin/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/admin/plates',         title: 'Fiches Techniques',        icon:'nc-tile-56',    class: '' },
    // { path: '/admin/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    // { path: '/admin/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
