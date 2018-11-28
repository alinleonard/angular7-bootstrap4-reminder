import { Component } from '@angular/core';
import { NbToastrService, NbGlobalPosition, NbGlobalPhysicalPosition, NbGlobalLogicalPosition } from '@nebular/theme';
import { ToasterConfig } from 'angular2-toaster';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';

@Component({
    selector: 'ngx-toastr',
    template: ``,
    styleUrls: ['./toastr.component.scss']
})

export class ToastrComponent {
    constructor(private toastrService: NbToastrService) { }

    config: ToasterConfig;

    index = 1;
    destroyByClick = true;
    duration = 2000;
    hasIcon = true;
    position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
    preventDuplicates = false;
    status: NbToastStatus = NbToastStatus.SUCCESS;

    title = 'Toastr default';
    content = 'Content default';

    types: NbToastStatus[] = [
        NbToastStatus.DEFAULT,
        NbToastStatus.DANGER,
        NbToastStatus.INFO,
        NbToastStatus.PRIMARY,
        NbToastStatus.SUCCESS,
        NbToastStatus.WARNING
    ];

    positions: string[] = [
        NbGlobalPhysicalPosition.TOP_RIGHT,
        NbGlobalPhysicalPosition.TOP_LEFT,
        NbGlobalPhysicalPosition.BOTTOM_LEFT,
        NbGlobalPhysicalPosition.BOTTOM_RIGHT,
        NbGlobalLogicalPosition.TOP_END,
        NbGlobalLogicalPosition.TOP_START,
        NbGlobalLogicalPosition.BOTTOM_END,
        NbGlobalLogicalPosition.BOTTOM_START
    ];

    public showToast(type: NbToastStatus, title: string, body: string) {
        const config = {
          status: type,
          destroyByClick: this.destroyByClick,
          duration: this.duration,
          hasIcon: this.hasIcon,
          position: this.position,
          preventDuplicates: this.preventDuplicates
        };
        const titleContent = title ? `. ${title}` : '';

        this.index += 1;
        this.toastrService.show(
          body,
          `Toast ${this.index}${titleContent}`,
          config);
      }
}
