import { Component, OnInit, OnDestroy } from '@angular/core';
import { Reminder } from '../../../../../../models/reminder';
import { Subscription, interval } from 'rxjs';
import { takeWhile, switchMap } from 'rxjs/operators';
import { ReminderService } from '../../../../../../services/reminder.service';
import { ToastrComponent } from '../../../../../../../shared/components/toastr/toastr.component';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';

@Component({
    selector: 'ngx-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit, OnDestroy {

    reminders: Reminder[];

    loading = true;
    intervalSubscription: Subscription;
    private alive = true;

    constructor(private reminderService: ReminderService, private toastr: ToastrComponent) { }

    ngOnInit() {
        this.updateList();
        // this.reminders = [
        //     { title: 'Battery', date: '31/11/2018', type: 'service' },
        //     { title: 'Registration', date: '14/10/2018', type: 'expense' },
        //     { title: 'File', date: '31/06/2018', type: 'expense' },
        //     { title: 'Belts', odometer: '1400000', type: 'service' },
        //     { title: 'Parking', odometer: '3000000', type: 'expense' }
        // ]
    }

    ngOnDestroy(): void {
        this.alive = false;
    }

    edit(index) {
        // on edit just populate the right section
        // of this page with the approapiate content
        // console.log(index);
    }

    updateList() {
        if (this.intervalSubscription) {
            this.intervalSubscription.unsubscribe();
        }

        this.intervalSubscription = interval(800)
      .pipe(
        takeWhile(() => this.alive),
        switchMap(() => this.reminderService.getList())
      )
      .subscribe((data) => {
        if (this.reminders) {
          if (this.reminders.length !== data.length) {
            this.reminders = data;
            this.loading = false;
          }
        } else {
          this.reminders = data;
          this.loading = false;
        }
      }, () => {
        this.loading = true;
        this.reminders = null;
      });
    }

    remove(id) {
        const name = this.reminders.find(x => x._id === id).name;
        this.reminderService.delete(id)
          .subscribe(() => {
            this.toastr.showToast(NbToastStatus.SUCCESS, 'Success', `${name} was deleted succesfully!`)
          }, () => {
            this.toastr.showToast(NbToastStatus.DANGER, 'Error', `There was an error removing the ${name}`);
          });
      }

}
