import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RemindersComponent } from './reminders.component';
import { HttpClientModule } from '@angular/common/http';
import { ThemeModule } from '../../../@theme/theme.module';

import { RenewalAddComponent } from './renewal-add/renewal-add.component';
import { RenewalListComponent } from './renewal-list/renewal-list.component';
import { ServiceAddComponent } from './service-add/service-add.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { RemindersRouterModule } from './reminders-router.module';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ThemeModule,
        HttpClientModule,
        RemindersRouterModule
    ],
    declarations: [
        RemindersComponent,
        RenewalAddComponent,
        RenewalListComponent,
        ServiceAddComponent,
        ServiceListComponent
    ]
})

export class RemindersModule { }
