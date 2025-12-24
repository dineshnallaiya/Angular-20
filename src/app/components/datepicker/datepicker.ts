import { Component, effect, input, OnInit } from '@angular/core';

interface Month {
  month: string;
  days: number;
  id: number;
}
@Component({
  selector: 'app-datepicker',
  imports: [],
  templateUrl: './datepicker.html',
  styleUrl: './datepicker.scss',
})
export class Datepicker implements OnInit {
  selctedMonth = input<Month>();
  days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  weeks: any = [];

  constructor() {
    effect(() => {
      const month = this.selctedMonth();
      console.log('month', month);
      this.weeks = [];
      let temp: any = [];
      if (!month) return;
      for (let i = 1; i <= month?.days; i++) {
        if (temp.length <= 6) {
          temp.push(i);
        } else {
          this.weeks.push(temp);
          temp = [];
        }
      }
      if (temp.length) {
        const remaining = 7 - temp.length;
        if (remaining) {
          for (let i = 1; i <= remaining; i++) {
            temp.push('');
          }
        }
      }
      this.weeks.push(temp);
      console.log(this.weeks);
    });
  }
  ngOnInit() {}
}
