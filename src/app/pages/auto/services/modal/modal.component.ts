import { Component, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-modal',
  template: `
  <form [formGroup]="modalForm" (ngSubmit)="submit()">
    <div class="modal-header">
      <span>{{ modalHeader }}</span>
      <a class="close" aria-label="Close" (click)="closeModal()">
        <span aria-hidden="true">&times;</span>
      </a>
    </div>
    <div class="modal-body">
        <div class="form-group">
          <select formControlName="type" class="form-control" [class.form-control-warning]="type.invalid">
            <option [ngValue]="null">Select</option>
            <option *ngFor="let service of services" [value]="service">{{ service }}</option>
          </select>
        </div>
        <div class="form-group">
          <input formControlName="value"
            class="form-control"
            type="number"
            placeholder="Value"
            [class.form-control-warning]="value.invalid">
        </div>
    </div>
    <div class="modal-footer">
      <button type="submit" class="btn btn-md btn-primary" [disabled]="this.modalForm.invalid">Save changes</button>
    </div>
  </form>
  `
})
export class AutoModalComponent {

  modalForm: FormGroup;
  modalHeader: string;

  services = ['Air Conditioning', 'Air Filter', 'Battery', 'Belts', 'Brake Fluid', 'Brake Pad'];

  @Output() submitEvent = new EventEmitter<FormGroup>();

  constructor(fb: FormBuilder, private activeModal: NgbActiveModal) {
    this.modalForm = fb.group({
      type: [null, Validators.required],
      value: [null, [Validators.required, Validators.min(1), Validators.max(10000)]]
    });
  }

  get type() {
    return this.modalForm.get('type');
  }

  get value() {
    return this.modalForm.get('value');
  }

  closeModal() {
    this.activeModal.close();
  }

  submit() {
    this.submitEvent.emit(this.modalForm);
    this.activeModal.close();
  }
}
