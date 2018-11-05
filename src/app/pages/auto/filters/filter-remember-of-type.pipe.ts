import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'filterRememberOfType'
})
export class FilterRememberOfTypePipe implements PipeTransform {

  transform(items: any[], filer: Object): any {
    if (!items || !filer) {
      return items;
    }

    return items.filter(item => item.indexOf(filter) !== -1);
  }

}
