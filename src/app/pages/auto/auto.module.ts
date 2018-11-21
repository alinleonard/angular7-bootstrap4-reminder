import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ToasterModule } from 'angular2-toaster';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AutoRoutingModule } from './auto-router.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { ActionsModule } from './actions/actions.module';

import { AutoComponent } from './auto.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ItemModule } from '../../shared/components/item/item.module';
import { NotificationsComponent } from '../../shared/components/notifications/notifications.component';

const componets = [
  AutoComponent,
  DashboardComponent,
  NotificationsComponent
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    ThemeModule,
    AutoRoutingModule,
    HttpClientModule,
    ToasterModule.forRoot(),
    ItemModule,
    VehiclesModule,
    ActionsModule
  ],
  providers: [],
  declarations: [
    ...componets
  ],
  entryComponents: [
  ]
})

export class AutoModule { }
