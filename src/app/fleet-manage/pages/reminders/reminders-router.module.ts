import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemindersComponent } from './reminders.component';

import { RenewalAddComponent } from './renewal-add/renewal-add.component';
import { RenewalListComponent } from './renewal-list/renewal-list.component';
import { ServiceAddComponent } from './service-add/service-add.component';
import { ServiceListComponent } from './service-list/service-list.component';

const routes: Routes = [{
    path: '',
    component: RemindersComponent,
    children: [
        {
            path: 'renewal/add/:id',
            component: RenewalAddComponent
        },
        {
            path: 'renewal/list',
            component: RenewalListComponent
        },
        {
            path: 'service/add',
            component: ServiceAddComponent
        },
        {
            path: 'service/list',
            component: ServiceListComponent
        }
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RemindersRouterModule { }
