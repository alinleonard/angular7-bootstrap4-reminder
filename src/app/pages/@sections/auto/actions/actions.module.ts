import { NgModule } from '@angular/core';
import { ThemeModule } from '../../../../@theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';
import { HttpClientModule } from '@angular/common/http';

import { AutoActionsServiceModalComponent } from './components/services/components/add/components/modal.component';

import { ActionsComponent } from './actions.component';

import { RemindersModule } from './components/reminders/reminders.module';
import { ServicesModule } from './components/services/services.module';
import { ActionsRoutingModule } from './actions-router.module';

const componets = [
  ActionsComponent
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    ThemeModule,
    HttpClientModule,
    ToasterModule.forRoot(),
    RemindersModule,
    ServicesModule,
    ActionsRoutingModule
  ],
  providers: [],
  declarations: [
    ...componets
  ],
  entryComponents: [
    AutoActionsServiceModalComponent
  ]
})

export class ActionsModule { }
