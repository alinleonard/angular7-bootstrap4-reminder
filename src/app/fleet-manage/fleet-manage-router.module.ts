import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FleetManageComponent } from './fleet-manage.component';

const routes: Routes = [{
    path: '',
    component: FleetManageComponent,
    children: [
        {
            path: 'vehicles',
            loadChildren: 'app/fleet-manage/pages/vehicles/vehicles.module#VehiclesModule'
        },
        {
            path: 'reminders',
            loadChildren: 'app/fleet-manage/pages/reminders/reminders.module#RemindersModule'
        }
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FleetManageRoutingModule { }
