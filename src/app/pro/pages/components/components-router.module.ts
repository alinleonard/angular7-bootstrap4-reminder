import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

const routes: Routes = [{
    path: '',
    component: ComponentsComponent,
    children: [
        {
            path: 'breadcrumb',
            component: BreadcrumbComponent
        }
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ComponentsRouterModule { }
