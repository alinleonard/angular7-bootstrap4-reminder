import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ToasterConfig, ToasterService, Toast, BodyOutputType  } from 'angular2-toaster';

@Component({
  selector: 'ngx-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class AutoRemindersComponent implements OnInit {

  public form: FormGroup;

  reminderTypes = ['Expense', 'Service'];
  typeOfExpenses = ['Car Wash'];
  typeOfServices = ['Air Filter'];
  typeOfRemembers = ['Km', 'Date'];
  repeatTypes = ['Just one time', 'Repeat each'];

  constructor(private fb: FormBuilder, private toasterService: ToasterService) {
    this.form = fb.group({
      type: new FormControl(this.reminderTypes[0]),
      typeOfRememberInput: new FormControl(this.typeOfRemembers[0]),
      expense: null,
      service: null,
      repeat: null,
      items: this.fb.array([]),
      note: null
    });
  }

  ngOnInit() {
  }

  get type() {
    return this.form.get('type') as FormControl;
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
      rememberOf: new FormControl({value: 'Km', disabled: true}, Validators.required),
      mileage: '',
      date: ''
    });
  }

  addItem(): void {
    const control = <FormArray>this.form.controls.items;
    const formItem = this.createItem();
    // set the rememberOf value
    if (!control.controls.find(item => item.get('rememberOf').value === this.form.get('typeOfRememberInput').value)) {
      formItem.controls.rememberOf.setValue(this.form.get('typeOfRememberInput').value);
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
