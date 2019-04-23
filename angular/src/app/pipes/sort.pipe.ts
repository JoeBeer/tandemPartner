import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
// sorts a list according to the same values that are contained in a second list
export class SortPipe implements PipeTransform {
  transform(array: any, field: string): any[] {
    if (!Array.isArray(array)) {
      return;
    }
    array.sort((a: any, b: any) => {
      if (a[field] > b[field]) {
        return 1;
      } else if (a[field] < b[field]) {
        return -1;
      } else {
        return 0;
      }
    });
    return array.reverse();
  }
}
