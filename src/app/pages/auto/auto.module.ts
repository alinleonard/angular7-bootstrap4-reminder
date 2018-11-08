import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { AutoRoutingModule } from './auto-router.module';
import { AutoComponent } from './auto.component';
import { AutoDashboardComponent } from './dashboard/dashboard.component';
import { HistoryService } from '../components/history-tree/history.service';
import { HistoryTreeComponent } from '../components/history-tree/history-tree.component';
import { HistoryItemComponent } from '../components/history-item/history-item.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FilterRememberOfTypePipe } from './filters/filter-remember-of-type.pipe';

import { ToasterModule } from 'angular2-toaster';
import { HttpClientModule } from '@angular/common/http';
import { AutoActionsComponent } from './actions/actions.component';
import { AutoVehiclesComponent } from './vehicles/vehicles.component';
import { AutoActionsRemindersComponent } from './actions/actions-reminders/actions-reminders.component';
import { AutoActionsServicesComponent } from './actions/actions-services/actions-services.component';
import { AutoActionsServiceModalComponent } from './actions/actions-services/modal/modal.component';
import { AutoVehiclesAddComponent } from './vehicles/vehicles-add/vehicles-add.component';
import { AutoVehiclesListComponent } from './vehicles/vehicles-list/vehicles-list.component';
import { AutoActionsServiceLocationModalComponent } from './actions/actions-services/modal/location-modal.component';

const componets = [
  AutoComponent,
  AutoDashboardComponent,
  HistoryTreeComponent,
  HistoryItemComponent,
  AutoActionsComponent,
  AutoActionsRemindersComponent,
  AutoActionsServicesComponent,
  AutoActionsServiceModalComponent,
  AutoVehiclesComponent,
  AutoVehiclesAddComponent,
  AutoVehiclesListComponent,
  AutoActionsServiceLocationModalComponent
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    ThemeModule,
    AutoRoutingModule,
    HttpClientModule,
    ToasterModule.forRoot()
  ],
  providers: [HistoryService],
  declarations: [
    ...componets,
    FilterRememberOfTypePipe
  ],
  entryComponents: [
    AutoActionsServiceModalComponent,
    AutoActionsServiceLocationModalComponent
  ]
})

export class AutoModule { }
