import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { AutoRoutingModule } from './auto-router.module';
import { AutoComponent } from './auto.component';
import { VehicleAddComponent } from './vehicle-add/vehicle-add.component';
import { AutoDashboardComponent } from './dashboard/dashboard.component';
import { HistoryService } from '../components/history-tree/history.service';
import { HistoryTreeComponent } from '../components/history-tree/history-tree.component';
import { HistoryItemComponent } from '../components/history-item/history-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoRemindersComponent } from './reminders/reminders.component';

import { FilterRememberOfTypePipe } from './filters/filter-remember-of-type.pipe';

import { ToasterModule } from 'angular2-toaster';
import { AutoServicesComponent } from './services/services.component';
import { AutoModalComponent } from './services/modal/modal.component';
import { AutoLocationModalComponent } from './services/modal/location-modal.component';

const componets = [
  AutoComponent,
  VehicleAddComponent,
  AutoDashboardComponent,
  HistoryTreeComponent,
  HistoryItemComponent,
  AutoRemindersComponent,
  AutoServicesComponent,
  AutoModalComponent,
  AutoLocationModalComponent
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    ThemeModule,
    AutoRoutingModule,
    ToasterModule.forRoot()
  ],
  providers: [HistoryService],
  declarations: [
    ...componets,
    FilterRememberOfTypePipe
  ],
  entryComponents: [
    AutoModalComponent,
    AutoLocationModalComponent
  ]
})

export class AutoModule { }
