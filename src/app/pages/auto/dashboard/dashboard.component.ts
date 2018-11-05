import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../components/history-tree/history.service';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class AutoDashboardComponent implements OnInit {
  public history: HistoryService;

  constructor(history: HistoryService) {
    this.history = history;
  }

  ngOnInit() {
  }

}
