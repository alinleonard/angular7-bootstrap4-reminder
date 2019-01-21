import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { DefaultEditor } from "ng2-smart-table";

@Component({
    template: `
    <div [hidden]="cell.isEditable()">not editable</div>
    <div class="form-group" [hidden]="!cell.isEditable()">
        <label>Name</label>
        <input #name (keyup)="updateValue()" type="text" nbInput fieldSize="small" class="form-control">
    </div>
    <div class="form-group" [hidden]="!cell.isEditable()">
        <label>VIN/SN</label>
        <input #vin (keyup)="updateValue()" type="text" nbInput fieldSize="small" class="form-control" [placeholder]="cell.getTitle()">
    </div>
    <div class="form-group" [hidden]="!cell.isEditable()">
        <label>License Place</label>
        <input #plate (keyup)="updateValue()" type="text" nbInput fieldSize="small" class="form-control" [placeholder]="cell.getTitle()">
    </div>
    `
})

export class NameViewEditorComponent extends DefaultEditor implements AfterViewInit {
    @ViewChild('name') name: ElementRef;
    @ViewChild('vin') vin: ElementRef;
    @ViewChild('plate') plate: ElementRef;

    constructor() {
        super();
    }

    ngAfterViewInit(): void {
        this.name.nativeElement.value = this.getName();
    }

    updateValue() {
        const name = this.name.nativeElement.value;
        const vin = this.vin.nativeElement.value;
        const plate = this.plate.nativeElement.value;

        this.cell.newValue.name = name;
        this.cell.newValue.vin = vin;
        this.cell.newValue.plate = plate;
    }

    getName() {
        return this.cell.getValue().name;
    }
    getVIN() {
        return this.cell.getValue().vin;
    }
    getPlate() {
        return this.cell.getValue().plate
    }

}