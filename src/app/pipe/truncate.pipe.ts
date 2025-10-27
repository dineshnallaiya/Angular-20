import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class Truncate implements PipeTransform {
  transform(value: any, ...args: any[]) {
    console.log(value, args);
    const truncateValue = value.slice(0, 3);
    return `${truncateValue}...`;
  }
}
