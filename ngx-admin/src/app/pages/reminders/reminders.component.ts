import { Component, OnInit } from '@angular/core';
import { RemindersService, Reminder } from './reminders.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-reminders',
  styleUrls: ['./reminders.component.scss'],
  templateUrl: './reminders.component.html'
})

export class RemindersComponent implements OnInit {
  error: any;
  reminders: Object;

  constructor(private remindersService: RemindersService) { }

  clear() {
    this.error = undefined;
    this.reminders = undefined;
  }

  settings = {
    add: {
      confirmCreate: true,
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>'
    },
    edit: {
      confirmSave: true,
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>'
    },
    delete: {
      confirmDelete: true,
      deleteButtonContent: '<i class="nb-trash"></i>'
    },
    columns: {
      id: {
        title: 'ID'
      },
      title: {
        title: 'Full Name'
      }
    }
  };

  ngOnInit() {
    this.remindersService.getReminders()
    .subscribe(
      data => this.reminders = data ,
      error => this.error = error
    );
  }
  
  onCreateConfirm(event): void {
    event.confirm.resolve();
  }

  onSaveConfirm(event): void {
    event.confirm.resolve();
  }

  onDeleteConfirm(event): void {
    if(window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
