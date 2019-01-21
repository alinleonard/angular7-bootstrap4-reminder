import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrComponent } from '../../../../../shared/components/toastr/toastr.component';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';
import { VehiclesService } from '../../../../services/vehicle.service';
import { Vehicle } from '../../../../models/vehicle';

import { LocalDataSource } from 'ng2-smart-table';
import { NameViewComponent } from './name-view/name-view.component';
import { NameViewEditorComponent } from './name-view-editor/name-view-editor.component';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit, OnDestroy {

  vehicles: Vehicle[];

  settings = {
    actions: {
      add: false,
      edit:  true
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },
    columns: {
      custom_name_column: {
        title: 'Name',
        type: 'custom',
        renderComponent: NameViewComponent,
        editable: true,
        editor: {
          type: 'custom',
          component: NameViewEditorComponent
        }
      },
      status: {
        title: 'Status',
        type: 'boolean'
      },
      type: {
        title: 'Type',
        type: 'string'
      },
      current_meter: {
        title: 'Current Meter',
        type: 'number'
      }
    }
  };

  source: LocalDataSource;

  constructor(
     private vehicleService: VehiclesService,
     private toastr: ToastrComponent) {
       this.source = new LocalDataSource();
  }

  ngOnInit() {
    this.vehicleService.getList().subscribe((data) => {

      this.vehicles = data;
      this.vehicles.forEach((v) => {
        /** @todo find a better way to add a new parameter */
        v['custom_name_column'] = v
      })
      this.source.load(this.vehicles);
    }, () => {

    });
  }

  ngOnDestroy() {

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    const vehicle: Vehicle = this.vehicles.find(x => x._id == event.data['_id']);
    // const newValueName = event.newData['name'];
    // vehicle.name = newValueName;
    vehicle.name = event.newData['name'];
    vehicle.vin = event.newData['vin'];
    vehicle.plate = event.newData['plate'];
    this.vehicleService.update(vehicle)
      .subscribe(() => {
        this.toastr.showToast(NbToastStatus.SUCCESS, 'Success', `${vehicle.name} was updated succesfully!`)
      }, (error) => {
        this.toastr.showToast(NbToastStatus.DANGER, 'Error', error);
      });
    event.confirm.resolve();
  }

  remove(id) {
    const name = this.vehicles.find(x => x._id === id).name;
    this.vehicleService.delete(id)
      .subscribe(() => {
        this.toastr.showToast(NbToastStatus.SUCCESS, 'Success', `${name} was deleted succesfully!`)
      }, () => {
        this.toastr.showToast(NbToastStatus.DANGER, 'Error', `There was an error removing the ${name}`);
      });
  }

}
