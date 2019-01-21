import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VehiclesComponent } from "./vehicles.component";
import { ListComponent } from "./components/list/list.component";
import { AddComponent } from "./components/add/add.component";
import { ViewComponent } from "./components/view/view.component";

const routes: Routes = [{
    path: '',
    component: VehiclesComponent,
    children: [
        {
            path: 'list',
            component: ListComponent
        },
        {
            path: 'add',
            component: AddComponent
        },
        {
            path: ':id',
            component: ViewComponent
        }
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class VehiclesRoutingModule { }
