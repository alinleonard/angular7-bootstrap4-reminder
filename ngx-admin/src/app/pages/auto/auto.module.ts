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

const componets = [
  AutoComponent,
  VehicleAddComponent,
  AutoDashboardComponent,
  HistoryTreeComponent,
  HistoryItemComponent
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    ThemeModule,
    AutoRoutingModule
  ],
  providers: [HistoryService],
  declarations: [
    ...componets
  ]
})

export class AutoModule { }
