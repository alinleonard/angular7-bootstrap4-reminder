import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';
import { Subscription, interval } from 'rxjs';
import { takeWhile, switchMap } from 'rxjs/operators';
import { Option } from '../../../../../../models/option';
import { ToastrComponent } from '../../../../../../../shared/components/toastr/toastr.component';
import { OptionService } from '../../../../../../services/option.service';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit, OnDestroy {

  optionExpenseList: Option[];
  optionServiceList: Option[];

  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;

  loading = true;
  intervalSubscriptionExpense: Subscription;
  intervalSubscriptionService: Subscription;
  private alive = true;

  constructor(private themeService: NbThemeService,
     private breakpointService: NbMediaBreakpointsService,
     private optionService: OptionService,
     private toastr: ToastrComponent) {
    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  ngOnInit() {
    this.updateExpenseList();
    this.updateServiceList();
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
    this.alive = false;
  }

  updateExpenseList() {
    if (this.intervalSubscriptionExpense) {
      this.intervalSubscriptionExpense.unsubscribe();
    }

    this.intervalSubscriptionExpense = interval(800)
      .pipe(
        takeWhile(() => this.alive),
        switchMap(() => this.optionService.getExpensesList())
      )
      .subscribe((data) => {
        if (this.optionExpenseList) {
          if (this.optionExpenseList.length !== data.length) {
            this.optionExpenseList = data;
            this.loading = false;
          }
        } else {
          this.optionExpenseList = data;
          this.loading = false;
        }
      }, () => {
        this.loading = true;
        this.optionExpenseList = null;
      });
  }

  updateServiceList() {
    if (this.intervalSubscriptionService) {
      this.intervalSubscriptionService.unsubscribe();
    }

    this.intervalSubscriptionService = interval(800)
      .pipe(
        takeWhile(() => this.alive),
        switchMap(() => this.optionService.getServicesList())
      )
      .subscribe((data) => {
        if (this.optionServiceList) {
          if (this.optionServiceList.length !== data.length) {
            this.optionServiceList = data;
            this.loading = false;
          }
        } else {
          this.optionServiceList = data;
          this.loading = false;
        }
      }, () => {
        this.loading = true;
        this.optionServiceList = null;
      });
  }

  edit(Id) {

  }

  saveOptionExpense(Id, newName) {
    const option: Option = this.optionExpenseList.find(x => x._id === Id);
    option.name = newName;
    this.optionService.updateExpensesList(option)
      .subscribe(() => {
        this.toastr.showToast(NbToastStatus.SUCCESS, 'Success', `${name} was updated succesfully!`)
      }, () => {
        this.toastr.showToast(NbToastStatus.DANGER, 'Error', `There was an error updating the ${name}`);
      });
  }

  saveOptionService(Id, newName) {
    const option: Option = this.optionServiceList.find(x => x._id === Id);
    option.name = newName;
    this.optionService.updateServicesList(option)
      .subscribe(() => {
        this.toastr.showToast(NbToastStatus.SUCCESS, 'Success', `${name} was updated succesfully!`)
      }, () => {
        this.toastr.showToast(NbToastStatus.DANGER, 'Error', `There was an error updating the ${name}`);
      });
  }

  removeOptionExpense(id) {
    const name = this.optionExpenseList.find(x => x._id === id).name;
    this.optionService.deleteExpensesList(id)
      .subscribe(() => {
        this.toastr.showToast(NbToastStatus.SUCCESS, 'Success', `${name} was deleted succesfully!`)
      }, () => {
        this.toastr.showToast(NbToastStatus.DANGER, 'Error', `There was an error removing the ${name}`);
      });
  }

  removeOptionService(id) {
    const name = this.optionServiceList.find(x => x._id === id).name;
    this.optionService.deleteServicesList(id)
      .subscribe(() => {
        this.toastr.showToast(NbToastStatus.SUCCESS, 'Success', `${name} was deleted succesfully!`)
      }, () => {
        this.toastr.showToast(NbToastStatus.DANGER, 'Error', `There was an error removing the ${name}`);
      });
  }

}
