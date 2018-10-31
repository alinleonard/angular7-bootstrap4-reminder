import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { interval } from 'rxjs/observable/interval';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AutoModalComponent } from './modal/modal.component';
import { AutoLocationModalComponent } from './modal/location-modal.component';

@Component({
  selector: 'ngx-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class AutoServicesComponent implements OnInit {

  public form: FormGroup;

  public odometer: number;

  public currency: string = 'Ron';
  public total: number = null;

  constructor(private fb: FormBuilder, private ms: NgbModal) {
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
  }

  send() {
    // console.log(this.form.value);
  }

  reset() {
    this.form.reset();
  }

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

  showModal() {
    const activeModal = this.ms.open(AutoModalComponent, {
      size: 'sm',
      container: 'nb-layout'
    });
    activeModal.componentInstance.modalHeader = 'Type of Service';
    activeModal.componentInstance.submitEvent.subscribe(($e) => {
      // console.log($e.value);
      this.addItem($e);
      this.total += parseFloat($e.value.value);
    })
  }

  createLocation() {
    const activeModal = this.ms.open(AutoLocationModalComponent, {
      size: 'sm',
      container: 'nb-layout'
    });
    activeModal.componentInstance.modalHeader = 'Location of Service';
  }

}
