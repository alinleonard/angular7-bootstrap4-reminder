import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../@theme/theme.module';
import { HttpClientModule } from '@angular/common/http';

import { ToastrComponent } from '../shared/components/toastr/toastr.component';
import { ToasterModule } from 'angular2-toaster';
import { ProComponent } from './pro.component';
import { ProRoutingModule } from './pro-router.module';

@NgModule({
    imports: [
        ReactiveFormsModule,
        ThemeModule,
        HttpClientModule,
        ProRoutingModule,
        ToasterModule.forRoot()
    ],
    providers: [ToastrComponent],
    declarations: [
        ProComponent,
        ToastrComponent
    ],
    entryComponents: [

    ]
})

export class ProModule { }
