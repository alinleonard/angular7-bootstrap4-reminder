import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HistoryItem } from './history.service';

@Component({
  selector: 'ngx-history-tree',
  template: `
    <div id="history-tree">
      <ngx-history-item *ngFor="let historyItem of historyItems"
        (click)="hit.emit(historyItem)"
        [historyItem]="historyItem">
      </ngx-history-item>
    </div>
  `,
  styles: []
})
export class HistoryTreeComponent {
  @Input()
  public historyItems: HistoryItem[];

  @Output()
  public hit = new EventEmitter();
}
