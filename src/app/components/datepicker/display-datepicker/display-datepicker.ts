import { Component } from '@angular/core';
import { Datepicker } from '../datepicker';

@Component({
  selector: 'app-display-datepicker',
  imports: [Datepicker],
  templateUrl: './display-datepicker.html',
  styleUrl: './display-datepicker.scss',
  standalone: true,
})
export class DisplayDatepicker {
  months = [
    { month: 'Jan', days: 31, id: 1 },
    { month: 'Feb', days: 28, id: 2 },
    { month: 'Mar', days: 31, id: 3 },
    { month: 'Apr', days: 30, id: 4 },
    { month: 'May', days: 31, id: 5 },
    { month: 'Jun', days: 30, id: 6 },
    { month: 'Jul', days: 31, id: 7 },
    { month: 'Aug', days: 31, id: 8 },
    { month: 'Sep', days: 30, id: 9 },
    { month: 'Oct', days: 31, id: 10 },
    { month: 'Nov', days: 30, id: 11 },
    { month: 'Dec', days: 31, id: 12 },
  ];
  selctedMonth = { month: 'Jan', days: 31, id: 1 };

  monthChange(event: any) {
    console.log(event);
    this.selctedMonth = this.months.find(
      (item) => item.month.toLowerCase() == event.target.value.toLowerCase()
    )!;
    console.log('*******', this.selctedMonth);
  }
}
