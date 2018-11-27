import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { interval } from 'rxjs/observable/interval';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AutoActionsServiceModalComponent } from './components/modal.component';
import { LocationModalComponent } from './components/location-modal.component';
import { AutoServicesService } from '../../../../../../../../shared/services/auto-services.service';

@Component({
  selector: 'ngx-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public form: FormGroup;

  public odometer: number;

  public currency: string = 'Ron';
  public total: number = null;

  public locations: Location;

  constructor(private fb: FormBuilder, private ms: NgbModal, private serviceService: AutoServicesService) {
    this.form = fb.group({
      date: null,
      odometer: null,
      items: this.fb.array([]),
      note: null
    })
  }

  ngOnInit() {
    this.odometer = 1;
    const count = interval(Math.floor(Math.random() * 5000));
    count.forEach(() => {
      this.odometer += Math.floor(Math.random() * 1000);
    })

    this.serviceService.getLocations().subscribe((data: Location) => {
        this.locations = data;
    })
  }

  send() {
    // console.log(this.form.value);
  }

  reset() {
    this.form.reset();
  }

  showLocationModal() {
    const activeModal = this.ms.open(LocationModalComponent, {
      size: 'sm',
      container: 'nb-layout'
    });
    activeModal.componentInstance.modalHeader = 'Location of Service';
  }

  /* Type of service functionality */

  addItem(formItem: FormGroup) {
    const control = <FormArray>this.form.controls.items;
    // const formItem = this.createItem();
    control.push(formItem);
  }

  removeItem(formIndex: number) {
    const control = <FormArray>this.form.controls.items;
    const item = control.at(formIndex).value.value;
    this.total -= parseFloat(item);
    control.removeAt(formIndex);
  }

  showTypeOfServiceModal() {
    const activeModal = this.ms.open(AutoActionsServiceModalComponent, {
      size: 'sm',
      container: 'nb-layout'
    });
    activeModal.componentInstance.modalHeader = 'Type of Service';
    activeModal.componentInstance.submitEvent.subscribe(($e) => {
      this.addItem($e);
      this.total += parseFloat($e.value.value);
    })
  }

}
