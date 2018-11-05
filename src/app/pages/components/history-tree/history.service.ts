export class HistoryItem {
 private _icon: string;
 private _title: string;

 constructor() {
 }

 public get icon(): string {
  return this._icon;
 }

 public set icon(value: string) {
  this._icon = value;
 }

 public get title(): string {
  return this._title;
 }

 public set title(value: string) {
  this._title = value;
 }
}

export class HistoryService {
 private _historyItems: HistoryItem[];

 constructor() {
  this._historyItems = [];

  let count = 4;
  while (count--) {
   const hItem = new HistoryItem();
   hItem.icon = 'fa fa-adjust';
   hItem.title = 'Random title';
   this._historyItems.push(hItem);
  }

 this.historyLoad();
 }

 public get historyItems(): HistoryItem[] {
  return this._historyItems;
 }

 public historyLoad() {
  // console.log("history load");
 }

 public hit(historyItem: HistoryItem) {
  // console.log("click", historyItem);
 }
}
