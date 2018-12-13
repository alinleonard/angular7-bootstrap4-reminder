import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';
import { VehiclesService, Vehicle } from '../../../../../shared/services/vehicles.services';
import { ToastrComponent } from '../../../../../shared/components/toastr/toastr.component';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';
import { Subscription, interval } from 'rxjs';
import { takeWhile, switchMap } from 'rxjs/operators';

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

  loading = true;
  intervalSubscription: Subscription;
  private alive = true;

  constructor(private themeService: NbThemeService,
     private breakpointService: NbMediaBreakpointsService,
     private vehicleService: VehiclesService,
     private toastr: ToastrComponent) {
    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  ngOnInit() {
    this.update();
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
    this.alive = false;
  }

  update() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }

    this.intervalSubscription = interval(800)
      .pipe(
        takeWhile(() => this.alive),
        switchMap(() => this.vehicleService.getList())
      )
      .subscribe((data) => {
        if (this.vehicles) {
          if (this.vehicles.length !== data.length) {
            this.vehicles = data;
            this.loading = false;
          }
        } else {
          this.vehicles = data;
          this.loading = false;
        }
      }, () => {
        this.loading = true;
        this.vehicles = null;
      });
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

  edit(Id) {

  }

  save(Id, newName) {
    const vehicle: Vehicle = this.vehicles.find(x => x._id === Id);
    vehicle.name = newName;
    this.vehicleService.update(vehicle)
      .subscribe(() => {
        this.toastr.showToast(NbToastStatus.SUCCESS, 'Success', `${name} was updated succesfully!`)
      }, () => {
        this.toastr.showToast(NbToastStatus.DANGER, 'Error', `There was an error updating the ${name}`);
      });
  }

  remove(id) {
    const name = this.vehicles.find(x => x._id === id).name;
    this.vehicleService.delete(id)
      .subscribe(() => {
        this.toastr.showToast(NbToastStatus.SUCCESS, 'Success', `${name} was deleted succesfully!`)
      }, () => {
        this.toastr.showToast(NbToastStatus.DANGER, 'Error', `There was an error removing the ${name}`);
      });
  }

}
