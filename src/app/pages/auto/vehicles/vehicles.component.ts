import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-auto-vehicles',
  template: `<div class="row">
    <ngx-auto-vehicles-list class="col-lg-6 col-md-6"></ngx-auto-vehicles-list>
    <ngx-auto-vehicles-add class="col-lg-6 col-md-6"></ngx-auto-vehicles-add>
  </div>
  `
})
export class AutoVehiclesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
