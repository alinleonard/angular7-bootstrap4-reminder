import { NgModule } from '@angular/core';

import { NbBadgeModule } from '@nebular/theme/components/badge/badge.module';
import { CtItemComponent } from './ct-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const components = [
    CtItemComponent
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
export class CtItemModule { }
