import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { RemindersComponent } from './reminders.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
    imports: [
        ThemeModule,
        Ng2SmartTableModule
    ],
    declarations: [
        RemindersComponent
    ]
})

export class RemindersModule { }
