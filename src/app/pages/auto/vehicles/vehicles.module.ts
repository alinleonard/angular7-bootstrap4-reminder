import { NgModule } from '@angular/core';
import { ThemeModule } from '../../../@theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { VehiclesComponent } from './vehicles.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { ItemModule } from '../../../shared/components/item/item.module';

const componets = [
  VehiclesComponent,
  AddComponent,
  ListComponent
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    ThemeModule,
    HttpClientModule,
    ItemModule
  ],
  providers: [],
  declarations: [
    ...componets
  ],
  entryComponents: [
  ]
})

export class VehiclesModule { }
