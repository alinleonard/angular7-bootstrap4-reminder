import { Component, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-modal',
  template: `
  <form [formGroup]="modalForm" (ngSubmit)="submit()">
    <div class="modal-header">
      <span>{{ modalHeader }}</span>
      <button class="close" aria-label="Close" (click)="closeModal()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
        <div class="form-group">
          <select formControlName="type" class="form-control"></select>
        </div>
        <div class="form-group">
          <input formControlName="value" class="form-control" type="text" placeholder="Value" required>
        </div>
    </div>
    <div class="modal-footer">
      <button type="submit" class="btn btn-md btn-primary">Save changes</button>
    </div>
  </form>
  `
})
export class AutoModalComponent {

  modalForm: FormGroup;
  modalHeader: string;

  @Output() submitEvent = new EventEmitter<FormGroup>();

  constructor(fb: FormBuilder, private activeModal: NgbActiveModal) {
    this.modalForm = fb.group({
      type: null,
      value: null
    });
  }

  closeModal() {
    this.activeModal.close();
  }

  submit() {
    this.submitEvent.emit(this.modalForm);
    this.activeModal.close();
  }
}
