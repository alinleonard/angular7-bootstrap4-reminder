import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { RemindersComponent } from './reminders.component';

@NgModule({
    imports: [
        ThemeModule,
    ],
    declarations: [
        RemindersComponent,
    ],
})
export default class RemindersModule { }
