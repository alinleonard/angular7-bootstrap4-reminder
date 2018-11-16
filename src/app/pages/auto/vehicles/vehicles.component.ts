import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-auto-vehicles',
  template: `<div class="row">
    <ngx-list class="col-lg-6 col-md-6"></ngx-list>
    <ngx-add class="col-lg-6 col-md-6"></ngx-add>
  </div>
  `
})
export class VehiclesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
