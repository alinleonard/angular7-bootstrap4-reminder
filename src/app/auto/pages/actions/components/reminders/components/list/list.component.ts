import { Component, OnInit, OnDestroy } from '@angular/core';
import { Reminder } from '../../../../../../models/reminder';
import { Subscription } from 'rxjs';
import { ReminderService } from '../../../../../../services/reminder.service';
import { ToastrComponent } from '../../../../../../../shared/components/toastr/toastr.component';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';
import * as moment from 'moment';

@Component({
    selector: 'ngx-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit, OnDestroy {

    reminders: Reminder[];

    loading = true;
    intervalSubscription: Subscription;

    constructor(private reminderService: ReminderService, private toastr: ToastrComponent) { }

    ngOnInit() {
        this.updateList();
    }

    ngOnDestroy(): void {
    }

    day(date) {
      return moment(date).day();
    }

    month(date) {
      return moment(date).format('MMM').toUpperCase();
    }

    timeLeft(date) {
      return moment(date).diff(new Date(), 'days').toLocaleString();
    }

    edit() {
        // on edit just populate the right section
        // of this page with the approapiate content
        // console.log(index);
    }

    updateList() {
      this.reminderService.getList().subscribe((data) => {
        this.reminders = data;
        this.loading = false;
      }, () => {
        this.loading = true;
      })
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
