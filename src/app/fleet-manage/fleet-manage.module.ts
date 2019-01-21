import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../@theme/theme.module';
import { HttpClientModule } from '@angular/common/http';
import { FleetManageComponent } from './fleet-manage.component';
import { FleetManageRoutingModule } from './fleet-manage-router.module';

import { ToastrComponent } from '../shared/components/toastr/toastr.component';
import { ToasterModule } from 'angular2-toaster';

@NgModule({
    imports: [
        ReactiveFormsModule,
        ThemeModule,
        HttpClientModule,
        FleetManageRoutingModule,
        ToasterModule.forRoot(),
    ],
    providers: [ToastrComponent],
    declarations: [
        FleetManageComponent,
        ToastrComponent
    ],
    entryComponents: [

    ]
})

export class FleetManageModule { }
