import { NgModule } from '@angular/core';
import { ThemeModule } from '../../../@theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';
import { HttpClientModule } from '@angular/common/http';

import { AutoActionsServiceModalComponent } from './components/services/components/modal.component';
import { LocationModalComponent } from './components/services/components/location-modal.component';

import { ActionsComponent } from './actions.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { ServicesComponent } from './components/services/services.component';

const componets = [
	ActionsComponent,
	RemindersComponent,
  ServicesComponent,
  LocationModalComponent,
  AutoActionsServiceModalComponent
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    ThemeModule,
    HttpClientModule,
    ToasterModule.forRoot(),
  ],
  providers: [],
  declarations: [
    ...componets
  ],
  entryComponents: [
    AutoActionsServiceModalComponent,
    LocationModalComponent
  ]
})

export class ActionsModule { }
