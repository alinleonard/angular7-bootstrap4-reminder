import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  vehicles: any[];
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;

  constructor(private themeService: NbThemeService, private breakpointService: NbMediaBreakpointsService) {
    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  ngOnInit() {
    this.vehicles = [
      { name: 'Audi A4 1999', type: 'auto' },
      { name: 'BMW 2005', type: 'auto', status: true }
    ]
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  toggleVehicleSection(index): void {
    const temp = this.vehicles.find(x => x.status === true);
    if (temp && this.vehicles[index] !== temp) {
      temp.status = false;
    }
    this.vehicles[index].status = true;
  }

  save(event) {
    // console.log(event);
  }

}
