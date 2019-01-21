import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ThemeModule } from '../../../@theme/theme.module';
import { ComponentsComponent } from './components.component';
import { ComponentsRouterModule } from './components-router.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

const components = [
    ComponentsComponent,
    BreadcrumbComponent
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ThemeModule,
        HttpClientModule,
        ComponentsRouterModule
    ],
    declarations: [
        ...components
    ],
    providers: [ ]
})

export class ComponentsModule { }
