import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RemindersComponent } from './reminders.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { ThemeModule } from '../../../../../@theme/theme.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ThemeModule,
        HttpClientModule
    ],
    declarations: [
        RemindersComponent,
        AddComponent,
        ListComponent
    ]
})

export class RemindersModule { }
