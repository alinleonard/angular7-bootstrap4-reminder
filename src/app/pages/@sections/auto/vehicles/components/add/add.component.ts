import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Vehicle, VehiclesService } from '../../../../../../shared/services/vehicles.services';

@Component({
  selector: 'ngx-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public form: FormGroup;
  
  types = ['Car', 'Motocycle', 'Truck', 'Boat'];
  manufacturers = ['Audi', 'BMW', 'VW', 'Opel'];
  
  constructor(fb: FormBuilder, private vehicleService: VehiclesService) {
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
  
  ngOnInit() {
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
    console.log(this.form.value);
    const vehicle: Vehicle = this.form.value as Vehicle;
    this.vehicleService.create(vehicle)
        .subscribe(() => this.reset());
  }

  reset() {
    this.form.reset();
  }


}
