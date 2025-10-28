import { Component, model, OnInit } from '@angular/core';

export interface User {
  name: string;
  age: number;
}
@Component({
  selector: 'app-child',
  template: `
    <p>child componted{{ realTimeCount() }}</p>
    <br />
    <button (click)="calculate()">Proceed to calculate</button>
  `,
  standalone: true,
  styles: ``,
  imports: [],
})
export class ChildModel implements OnInit {
  realTimeCount = model<User[]>([{ name: 'dinesh', age: 20 }]);
  constructor() {}
  ngOnInit(): void {}
  calculate() {
    const newVal = { name: 'kanna', age: 30 };
    this.realTimeCount.update((prev: User[]) => {
      return { ...prev, newVal };
    });
  }
}
