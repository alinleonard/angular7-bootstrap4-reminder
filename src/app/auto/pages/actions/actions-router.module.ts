import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ActionsComponent } from './actions.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { ServicesComponent } from './components/services/services.component';
import { OptionsComponent } from './components/options/options.component';

const routes: Routes = [{
    path: '',
    component: ActionsComponent,
    children: [
        { path: 'reminders', component: RemindersComponent },
        { path: 'services', component: ServicesComponent },
        { path: 'options', component: OptionsComponent }
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ActionsRoutingModule { }
