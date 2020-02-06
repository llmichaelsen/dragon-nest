import { Routes } from '@angular/router';

import { TableListComponent } from '../../table-list/table-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'dragons' },
    { path: 'dragons',     component: TableListComponent }
];
