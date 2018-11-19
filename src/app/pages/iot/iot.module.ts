import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { HttpClientModule } from '@angular/common/http';
import { IotComponent } from './iot.component';
import { IotRoutingModule } from './iot-router.module';

const components = [
    IotComponent
];

@NgModule({
    imports: [
        ReactiveFormsModule,
        ThemeModule,
        HttpClientModule,
        IotRoutingModule
    ],
    providers: [],
    declarations: [
        ...components
    ],
    entryComponents: [
    ]
})

export class IotModule { }
