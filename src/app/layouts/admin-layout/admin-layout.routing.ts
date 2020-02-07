import { Routes } from '@angular/router';

import { TableListComponent } from '../../table-list/table-list.component';
import { NewDragonComponent } from '../../dragon/new-dragon/new-dragon.component';
import { DetailDragonComponent } from '../../dragon/detail-dragon/detail-dragon.component';

export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'dragons' },
    { path: 'dragons', component: TableListComponent },
    { path: 'dragons/detail/:id', component: DetailDragonComponent },
    { path: 'dragons/new', component: NewDragonComponent },
    { path: 'dragons/edit/:id', component: NewDragonComponent },
    { path: 'krakens', redirectTo: 'dragons' },
    { path: 'yetis', redirectTo: 'dragons' },
];
