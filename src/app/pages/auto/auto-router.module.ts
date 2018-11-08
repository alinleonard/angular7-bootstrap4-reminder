import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoComponent } from './auto.component';

import { AutoDashboardComponent } from './dashboard/dashboard.component';
import { AutoActionsComponent } from './actions/actions.component';
import { AutoVehiclesComponent } from './vehicles/vehicles.component';


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
      path: 'vehicles',
      component: AutoVehiclesComponent
    }
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AutoRoutingModule { }
