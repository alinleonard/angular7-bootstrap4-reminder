import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AutoRemindersService, Vehicle } from '../../../../services/auto-reminders.service';

@Component({
  selector: 'ngx-auto-vehicles-add',
  templateUrl: './vehicles-add.component.html',
  styleUrls: ['./vehicles-add.component.scss']
})
export class AutoVehiclesAddComponent implements OnInit {

  public form: FormGroup;

  types = ['Car', 'Motocycle', 'Truck', 'Boat'];
  manufacturers = ['Audi', 'BMW', 'VW', 'Opel'];

  constructor(fb: FormBuilder, private _autoService: AutoRemindersService) {
    this.form = fb.group({
      type: null,
      name: null,
      manufacturer: null,
      model: null,
      plate: null,
      year: null,
      chasis: null,
      vin: null,
      note: null
    });
  }

  get type() {
    return this.form.get('type') as FormControl;
  }

  get name() {
    return this.form.get('name') as FormControl;
  }

  get manufacturer() {
    return this.form.get('manufacturer') as FormControl;
  }

  get model() {
    return this.form.get('model') as FormControl;
  }

  send() {
    // console.log(this.form.value);
    const vehicle: Vehicle = this.form.value as Vehicle;
    this._autoService.postVehicle(vehicle)
        .subscribe(() => this.reset());
  }

  reset() {
    this.form.reset();
  }

  ngOnInit() {
  }

}
