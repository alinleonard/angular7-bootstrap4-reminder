import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'ngx-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class AutoServicesComponent implements OnInit {

  public form: FormGroup;

  public odometer: number;

  constructor(private fb: FormBuilder) {
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

  addItem() {
    const control = <FormArray>this.form.controls.items;
    const formItem = this.createItem();
    control.push(formItem);
  }

  createItem(): FormGroup {
    return this.fb.group({
      type: null,
      value: null
    })
  }

}
