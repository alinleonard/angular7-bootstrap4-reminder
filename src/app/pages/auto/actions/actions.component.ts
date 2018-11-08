import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-actions',
  template: `<div class="row">
    <ngx-auto-actions-reminders class="col-lg-6 col-md-6"></ngx-auto-actions-reminders>
    <ngx-auto-actions-services class="col-lg-6 col-md-6"></ngx-auto-actions-services>
  </div>
  `
})
export class AutoActionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
