import { Component, Input } from '@angular/core';
import { HistoryItem } from '../history-tree/history.service';

@Component({
  selector: 'ngx-history-item',
  template: `<p><i class="{{historyItem.icon}}"></i> {{historyItem.title}}</p>`,
  styleUrls: ['./history-item.component.scss']
})
export class HistoryItemComponent {

  @Input()
  public historyItem: HistoryItem;

}
