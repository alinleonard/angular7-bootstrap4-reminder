import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoComponent } from './auto.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ActionsComponent } from './actions/actions.component';
import { VehiclesComponent } from './vehicles/vehicles.component';


const routes: Routes = [{
  path: '',
  component: AutoComponent,
  children: [
    {
      path: '',
      component: DashboardComponent
    },
    {
      path: 'actions',
      component: ActionsComponent
    },
    {
      path: 'vehicles',
      component: VehiclesComponent
    }
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AutoRoutingModule { }
