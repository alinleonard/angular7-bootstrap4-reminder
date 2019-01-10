import { Component } from '@angular/core';
import * as _ from 'lodash';
import { Upload } from '../../models/upload';

@Component({
  selector: 'ngx-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent {

  currentUpload: Upload;
  dropzoneActive: boolean = false;

  constructor() { }

  dropzoneState($event: boolean) {
    this.dropzoneActive = $event;
  }

  handleDrop(fileList: FileList) {

    const filesIndex = _.range(fileList.length)

    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(fileList[idx]);
    //   this.upSvc.upload(this.currentUpload)
    })
  }
}
