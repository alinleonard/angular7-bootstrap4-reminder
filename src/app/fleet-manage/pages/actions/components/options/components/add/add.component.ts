import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { OptionService } from '../../../../../../services/option.service';
import { ToastrComponent } from '../../../../../../../shared/components/toastr/toastr.component';
import { Option } from '../../../../../../models/option';
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

  optionsReminder = { Expense: 'Expense', Service: 'Service'};

  constructor(fb: FormBuilder, private optionService: OptionService, private toastr: ToastrComponent) {
    this.form = fb.group({
      type: this.optionsReminder.Expense,
      name: null
    });
  }

  ngOnInit() {
  }

  get type() {
    return this.form.get('type') as FormControl;
  }

  get isTypeExpense() {
    return (this.type.value === this.optionsReminder.Expense.toString()) ? true : false;
  }

  send(): void {
    const option: Option = this.form.value as Option;
    if (this.isTypeExpense)
      this.optionService.createExpensesList(option).subscribe(() => this.success());
    else
      this.optionService.createServicesList(option).subscribe(() => this.success());
  }

  reset(): void {
    this.form.reset();
  }

  success() {
    this.toastr.showToast(NbToastStatus.SUCCESS, 'Success', 'Reminder has been added succesfully!');
  }

}
