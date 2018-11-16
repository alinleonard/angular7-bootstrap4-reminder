import { NgModule } from '@angular/core';

import { NbBadgeModule } from '@nebular/theme/components/badge/badge.module';
import { ItemComponent } from './item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const components = [
    ItemComponent
]

@NgModule({
    imports: [
        CommonModule,
        NbBadgeModule,
        FormsModule
    ],
    declarations: [
        ...components
    ],
    exports: [
        ...components
    ]
})
export class ItemModule { }
