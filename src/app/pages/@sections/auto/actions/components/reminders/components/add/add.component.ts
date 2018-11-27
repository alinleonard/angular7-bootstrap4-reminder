import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ToasterConfig, ToasterService, Toast, BodyOutputType  } from 'angular2-toaster';
import { NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { AutoRemindersService } from '../../../../../../../../shared/services/auto-reminders.service';

enum ReminderTypes {
  Expense = 'Expense', Service = 'Service'
};

enum RememberTypes {
  Km = 'Km', Date = 'Date'
}

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

  reminderTypes = ReminderTypes;
  rememberTypes = RememberTypes;
  typeOfExpenses: any;
  typeOfServices: any;

  constructor(
      private fb: FormBuilder,
      private toasterService: ToasterService,
      tooltipConfig: NgbTooltipConfig,
      private autoRemindersService: AutoRemindersService) {
    tooltipConfig.container = 'body';
    tooltipConfig.placement = 'top';

    this.form = fb.group({
      type: ReminderTypes.Expense,
      expense: null,
      service: null,
      repeat: null,
      items: this.fb.array([]),
      note: null
    });

    this.getTypeOfExpenses();
    this.getTypeOfServices();
  }

  ngOnInit() {
  }

  getTypeOfExpenses(): void {
    this.autoRemindersService.getExpenses()
      .subscribe(expenses => this.typeOfExpenses = expenses);
  }

  getTypeOfServices(): void {
    this.autoRemindersService.getServices()
      .subscribe(services => this.typeOfServices = services);
  }

  get type() {
    return this.form.get('type') as FormControl;
  }

  get isTypeExpense() {
    return (this.type.value === ReminderTypes.Expense.toString()) ? true : false;
  }

  reset(): void {
    this.form.reset();
  }

  send(): void {
    // console.log(this.form.value);
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

  /**
   * Methods regarding toast configuration
   */
  toasterConfig: ToasterConfig;

  toasterPosition = 'toast-top-right';
  toasterAnimation = 'fade';
  toasterTimeout = 5000;
  toasterLimit = 5;

  toasterIsNewestOnTop = true;
  toasterIsHideOnClick = true;
  toasterIsDuplicatesPrevented = false;
  toasterIsCloseButton = true;

  toasterTitle = 'Hi there!';
  toasterType = 'default';
  toasterContent = `I'm a cool toaster!`;

  toasterTypes: string[] = ['default', 'info', 'success', 'warning', 'error'];
  toasterAnimations: string[] = ['fade', 'flyLeft', 'flyRight', 'slideDown', 'slideUp'];

  makeToast() {
    this.showToast(this.toasterType, this.toasterTitle, this.toasterContent);
  }

  private showToast(type: string, title: string, body: string) {
    this.toasterConfig = new ToasterConfig({
      positionClass: this.toasterPosition,
      timeout: this.toasterTimeout,
      newestOnTop: this.toasterIsNewestOnTop,
      tapToDismiss: this.toasterIsHideOnClick,
      preventDuplicates: this.toasterIsDuplicatesPrevented,
      animation: this.toasterAnimation,
      limit: this.toasterLimit
    });

    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: this.toasterTimeout,
      showCloseButton: this.toasterIsCloseButton,
      bodyOutputType: BodyOutputType.TrustedHtml
    }

    this.toasterService.popAsync(toast);
  }

  clearToasts() {
    this.toasterService.clear();
  }
}
