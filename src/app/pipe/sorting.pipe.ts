import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'Sorting',
  standalone: true,
})
export class SortingPipe implements PipeTransform {
  transform(val: any[], type: string) {
    let filteredData = [];
    filteredData = val.sort((a: any, b: any) => {
      if (a.name === b.name) {
        return 0;
      }
      if (type == 'asc') {
        return a.name > b.name ? 1 : -1;
      }
      return a.name < b.name ? 1 : -1;
    });
    console.log(filteredData);
    return filteredData;
  }
}
