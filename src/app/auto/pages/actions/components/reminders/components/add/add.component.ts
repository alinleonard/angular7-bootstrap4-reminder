import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private optionService: OptionService,
     private reminderService: ReminderService, private toastr: ToastrComponent) {
    this.form = fb.group({
      type: this.optionsReminder.Expense,
      expense: null,
      service: null,
      repeat: null,
      items: this.fb.array([]),
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
  }

  /**
   * Methods with interest on the remember by select option
   */

  createItem(): FormGroup {
    return this.fb.group({
      trigger: new FormControl({value: 'Km', disabled: true}, Validators.required),
      mileage: '',
      date: ''
    });
  }

  addItem(triggerType: string): void {
    const control = <FormArray>this.form.controls.items;
    const formItem = this.createItem();
    // set the rememberOf value
    if (!control.controls.find(item => item.get('trigger').value === triggerType)) {
      formItem.controls.trigger.setValue(triggerType);
    } else {
      return;
    }
    // validation to maximum number of options available
    if (control.length < 2) {
      control.push(formItem);
    }
  }

  removeItem(i): void {
    const control = <FormArray>this.form.controls.items;
    control.removeAt(i);
  }

}
