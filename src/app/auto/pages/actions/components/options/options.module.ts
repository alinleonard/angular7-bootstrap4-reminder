import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { ThemeModule } from '../../../../../@theme/theme.module';
import { HttpClientModule } from '@angular/common/http';
import { OptionsComponent } from './options.component';
import { ItemModule } from '../../../../../shared/components/item/item.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ThemeModule,
        HttpClientModule,
        ItemModule
    ],
    declarations: [
        OptionsComponent,
        AddComponent,
        ListComponent
    ]
})

export class OptionsModule { }
