import { ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../../../../../@theme/theme.module';
import { HttpClientModule } from '@angular/common/http';
import { ToasterModule } from 'angular2-toaster';
import { NgModule } from '@angular/core';
import { AddComponent } from './components/add/add.component';
import { AutoActionsServiceModalComponent } from './components/add/components/modal.component';
import { LocationModalComponent } from './components/add/components/location-modal.component';
import { ListComponent } from './components/list/list.component';
import { ServicesComponent } from './services.component';
import { CommonModule } from '@angular/common';

const components = [
    ServicesComponent,
        AddComponent,
        ListComponent,
        AutoActionsServiceModalComponent,
        LocationModalComponent
]

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ThemeModule,
        HttpClientModule,
        ToasterModule.forRoot()
    ],
    providers: [],
    declarations: [ ...components ],
    entryComponents: [
        AutoActionsServiceModalComponent,
        LocationModalComponent
    ]
})

export class ServicesModule { }
