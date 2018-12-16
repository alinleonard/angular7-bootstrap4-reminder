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
          <input formControlName="name" class="form-control" type="text" placeholder="Name" [class.form-control-warning]="name.invalid">
        </div>
        <div class="form-group">
          <input formControlName="address"
            class="form-control"
            type="text"
            placeholder="Address"
            [class.form-control-warning]="address.invalid">
        </div>
    </div>
    <div class="modal-footer">
      <button type="submit" class="btn btn-md btn-primary" [disabled]="this.modalForm.invalid">Save changes</button>
    </div>
  </form>
  `
})
export class LocationModalComponent {

  modalForm: FormGroup;
  modalHeader: string;

  // services = ["Air Conditioning", "Air Filter", "Battery", "Belts", "Brake Fluid", "Brake Pad"];

  @Output() submitEvent = new EventEmitter<FormGroup>();

  constructor(fb: FormBuilder, private activeModal: NgbActiveModal) {
    this.modalForm = fb.group({
      name: [null, Validators.required],
      address: [null, [Validators.required]]
    });
  }

  get name() {
    return this.modalForm.get('name');
  }

  get address() {
    return this.modalForm.get('address');
  }

  closeModal() {
    this.activeModal.close();
  }

  submit() {
    this.submitEvent.emit(this.modalForm);
    this.activeModal.close();
  }
}
