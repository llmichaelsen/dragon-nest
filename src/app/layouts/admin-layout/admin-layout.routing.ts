import { Routes } from '@angular/router';

import { TableListComponent } from '../../table-list/table-list.component';
import { NewDragonComponent } from '../../dragon/new-dragon/new-dragon.component';

export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'dragons' },
    { path: 'dragons', component: TableListComponent },
    { path: 'dragons/new', component: NewDragonComponent },
    { path: 'krakens', redirectTo: 'dragons' },
    { path: 'yetis', redirectTo: 'dragons' },
];
