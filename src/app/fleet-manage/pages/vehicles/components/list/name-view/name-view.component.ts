import { Component, Input, Output, OnInit } from "@angular/core";
import { ViewCell } from "ng2-smart-table";

@Component({
    selector: 'ngx-name-view',
    template: `
        <div><a class="text-link" routerLink="/fleet-manage/vehicles/{{ value._id }}">{{ value.name }}</a></div>
          <div [hidden]="!value.year" class="text-hint">{{ value.year }} {{value.manufacturer}} {{value.model}}</div>
          <div [hidden]="!value.vin"><span class="text-hint">VIN/SN:</span> {{value.vin}}</div>
          <div [hidden]="!value.plate"><span class="text-hint">License Plate:</span> {{value.plate}}</div>
    `,
    styleUrls: ['./name-view.component.scss']
})

export class NameViewComponent implements ViewCell, OnInit {

    @Input() value: any;
    @Output() rowData: any;

    ngOnInit(): void {
    }
}