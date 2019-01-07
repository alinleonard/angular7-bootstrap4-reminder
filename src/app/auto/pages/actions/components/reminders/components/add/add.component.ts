import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { OptionService } from '../../../../../../services/option.service';
import { ReminderService } from '../../../../../../services/reminder.service';
import { ToastrComponent } from '../../../../../../../shared/components/toastr/toastr.component';
import { Option } from '../../../../../../models/option';
import { Reminder } from '../../../../../../models/reminder';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';

@Component({
  selector: 'ngx-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(300)
      ]),
      transition(':leave', animate(300, style({opacity: 0})))
    ])
  ]
})

export class AddComponent implements OnInit {

  public form: FormGroup;

  optionsReminder = { Expense: 'Expense', Service: 'Service' };
  optionsRemember = { Km: 'Km', Date: 'Date' };

  optionExpensesList: Option[];
  optionServiceList: Option[];

  constructor(fb: FormBuilder, private optionService: OptionService,
     private reminderService: ReminderService, private toastr: ToastrComponent) {
    this.form = fb.group({
      type: this.optionsReminder.Expense,
      name: null,
      repeat: null,
      trigger: fb.group({
        tempTriggerTypeNoDatabase: null,
        tachometer: '',
        date: ''
      }),
      note: null
    });
  }

  ngOnInit() {
    this.optionService.getExpensesList()
      .subscribe(expenses => this.optionExpensesList = expenses);

    this.optionService.getServicesList()
        .subscribe(services => this.optionServiceList = services);
  }

  get type() {
    return this.form.get('type') as FormControl;
  }

  get isTypeExpense() {
    return (this.type.value === this.optionsReminder.Expense.toString()) ? true : false;
  }

  get triggerType() {
    return this.form.get('trigger').get('tempTriggerTypeNoDatabase') as FormControl;
  }

  send(): void {
    const reminder: Reminder = this.form.value as Reminder;
    this.reminderService.create(reminder)
      .subscribe(() => this.success());
  }

  reset(): void {
    this.form.reset();
  }

  success() {
    this.toastr.showToast(NbToastStatus.SUCCESS, 'Success', 'Reminder has been added succesfully!');
    this.reset();
  }

  /**
   * Methods with interest on the remember by select option
   */


  addItem(triggerType: string): void {
    // set the rememberOf value
    if (this.triggerType.value !== triggerType) {
      this.triggerType.setValue(triggerType);
    } else {
      return;
    }
  }

  removeItem(): void {
    const control = this.form.controls.trigger;
    control.reset();
  }

}
