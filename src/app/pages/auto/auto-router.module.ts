import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoComponent } from './auto.component';
import { VehicleAddComponent } from './vehicle-add/vehicle-add.component';
import { AutoDashboardComponent } from './dashboard/dashboard.component';
import { AutoRemindersComponent } from './reminders/reminders.component';
import { AutoServicesComponent } from './services/services.component';
import { AutoActionsComponent } from './actions/actions.component';


const routes: Routes = [{
  path: '',
  component: AutoComponent,
  children: [
    {
      path: '',
      component: AutoDashboardComponent
    },
    {
      path: 'actions',
      component: AutoActionsComponent
    },
    {
      path: 'vehicles-add',
      component: VehicleAddComponent
    },
    {
      path: 'reminders',
      component: AutoRemindersComponent
    },
    {
      path: 'services',
      component: AutoServicesComponent
    }
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AutoRoutingModule { }
