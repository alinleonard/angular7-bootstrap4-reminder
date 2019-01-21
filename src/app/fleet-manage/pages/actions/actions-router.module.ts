import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ActionsComponent } from './actions.component';
import { OptionsComponent } from './components/options/options.component';

const routes: Routes = [{
    path: '',
    component: ActionsComponent,
    children: [
        { path: 'options', component: OptionsComponent }
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ActionsRoutingModule { }
