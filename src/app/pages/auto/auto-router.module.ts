import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoComponent } from './auto.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { VehiclesComponent } from './vehicles/vehicles.component';


const routes: Routes = [{
  path: '',
  component: AutoComponent,
  children: [
    { path: '', component: DashboardComponent },
    { path: 'actions', loadChildren: './actions/actions.module#ActionsModule' },
    { path: 'vehicles', component: VehiclesComponent }
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AutoRoutingModule { }
