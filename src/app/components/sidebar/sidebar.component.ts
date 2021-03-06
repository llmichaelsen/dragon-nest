import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/login.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dragons', title: 'Dragons', icon: 'whatshot', class: '' },
    { path: '/krakens', title: 'Krakens', icon: 'pool', class: '' },
    { path: '/yetis', title: 'Yetis', icon: 'ac_unit', class: '' }
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor(private loginServ: LoginService) { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    logout() {
        this.loginServ.logout();
    }
}
