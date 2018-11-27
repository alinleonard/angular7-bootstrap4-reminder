import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IotComponent } from './iot.component';

const routes: Routes = [{
    path: '',
    component: IotComponent,
    children: [
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class IotRoutingModule { }
