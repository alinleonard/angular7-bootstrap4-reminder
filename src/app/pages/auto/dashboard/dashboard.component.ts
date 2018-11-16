import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // public history: HistoryService;

  history: any[];

  constructor() {
    // this.history = history;
  }

  ngOnInit() {
    this.history = [
      { name: 'Fine',  date: '03/20/2018', timeleft: '15 days left', icon: 'fa-credit-card'},
      { title: 'March 2019'},
      { name: 'Battery', odometer: '140000 km', date: '11/13/2018', timeleft: 'Today', icon: 'fa-car'},
      { title: 'November 2018'},
      { name: 'Brake Fluid', location: 'Brasov Country', odometer: '200000 km', date: '14/13/2018', price: '$2.000', icon: 'fa-wrench'},
      { name: 'Spark Plugs', location: 'Brasov Country', odometer: '200000 km', date: '14/13/2018', price: '$6.000', icon: 'fa-wrench'},
      { title: 'October 2018'},
      { name: 'Brake Fluid', location: 'Brasov Country', odometer: '200000 km', date: '14/13/2018', price: '$2.000', icon: 'fa-wrench'}
    ]
  }

}
