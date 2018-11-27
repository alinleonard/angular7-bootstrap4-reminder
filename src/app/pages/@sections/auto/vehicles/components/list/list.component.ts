import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';
import { VehiclesService, Vehicle } from '../../../../../../shared/services/vehicles.services';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit, OnDestroy {

  vehicles: Vehicle[];
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;

  constructor(private themeService: NbThemeService,
     private breakpointService: NbMediaBreakpointsService,
     private vehicleService: VehiclesService) {
    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  ngOnInit() {
    this.update();
  }

  update() {
    this.vehicleService.getList().subscribe(vehicles => this.vehicles = vehicles);
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

  showVehicleDetails(index) {
    // console.log(index);
  }

  save(event) {
    // console.log(event);
  }

  remove(id) {
    this.vehicleService.delete(id)
      .subscribe(() => this.update());
  }

  notify() {

  }

}
