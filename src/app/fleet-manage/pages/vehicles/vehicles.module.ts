import { NgModule } from '@angular/core';
import { ThemeModule } from '../../../@theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table'

import { HttpClientModule } from '@angular/common/http';
import { VehiclesComponent } from './vehicles.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';
import { VehiclesRoutingModule } from './vehicles-router.module';

import { ItemModule } from '../../../shared/components/item/item.module';
import { ToasterModule } from 'angular2-toaster';
import { NameViewComponent } from './components/list/name-view/name-view.component';
import { NameViewEditorComponent } from './components/list/name-view-editor/name-view-editor.component';

const componets = [
  VehiclesComponent,
  AddComponent,
  ListComponent,
  ViewComponent,
  NameViewComponent,
  NameViewEditorComponent
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    ThemeModule,
    HttpClientModule,
    VehiclesRoutingModule,
    ItemModule,
    ToasterModule.forRoot(),
    Ng2SmartTableModule
  ],
  providers: [],
  declarations: [
    ...componets
  ],
  entryComponents: [
    NameViewComponent,
    NameViewEditorComponent
  ]
})

export class VehiclesModule { }
