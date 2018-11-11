import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component'


@NgModule({
  imports: [
    ThemeModule
  ],
  declarations: [
    DashboardComponent,
    TemperatureDraggerComponent
  ]
})
export class DashboardModule { }
