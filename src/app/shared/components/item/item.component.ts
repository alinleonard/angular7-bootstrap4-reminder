import { Component, Input, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { SafeStyle } from '@angular/platform-browser';

@Component({
    selector: 'ngx-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {
    /**
     * ```ts
     *  <ngx-item [name]="'Alin Busila'" [title]="'Engineer'" [editable]="true" (onSave)="fn($event)"></ngx-item>
     * ````
     *
     * ### Instalation
     *
     * Import `CtItemModule` to your feature module.
     * ```ts
     * @NgModule({
     *  imports: [
     *      CtItemModule
     *  ]
     * })
     */

    /**
     * Specifies a name to be shown on the right of a item picture
     * @type string
     */
    @Input() name: string = 'Anonymus';
    /**
     * Specifies a title (written in a small font) to be shown under the **name**
     * @type string
     */
    @Input() title: string;

    @Input() color: string;

    @Input() badgeText: string;
    @Input() badgeStatus: string;
    @Input() badgePosition: string;
    /**
     * Specifies if the name is editable from inline. This will enable the functionality to edit on focus
     * @type boolean
     */
    @Input() editable: boolean = false;

    imageBackgroundStyle: SafeStyle;
    showInitialsValue: boolean = true

    @ViewChild('nameInput') ref: ElementRef;
    public editing: boolean = false;
    public oldValue: string;
    @Output() public onSave: EventEmitter<any> = new EventEmitter();

    constructor() {}

    get nameInitials(): string {
        if (this.name) {
          const names = this.name.split(' ');
          return names.map(n => n.charAt(0)).splice(0, 2).join('').toUpperCase();
        }
        return '';
    }

    ngOnInit(): void { }

    edit() {
        if (this.editable) {
            this.editing = true;
            setTimeout(() => this.ref.nativeElement.focus());
        }
    }

    onFocusInput() {
        this.oldValue = this.name;
    }

    outFocusInput() {
        if (this.name.length === 0) {
            this.name = this.oldValue;
        }
        if (this.name !== this.oldValue) {
            this.onSave.emit(this.name);
        }
        this.editing = false;
    }
}
