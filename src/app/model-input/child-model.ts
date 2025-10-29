import { Component, model, OnInit } from '@angular/core';

export interface User {
  name: string;
  age: number;
}
@Component({
  selector: 'app-child',
  template: `
    <p>child componted</p>
    @for(user of realTimeCount(); track user.age){
    <p>{{ user.name }}</p>
    }
    <br />
    <p>----------------------</p>
    <button (click)="calculate()">Proceed to calculate</button>
  `,
  standalone: true,
  styles: ``,
  imports: [],
})
export class ChildModel implements OnInit {
  realTimeCount = model<User[]>([]);
  constructor() {}
  ngOnInit(): void {}
  calculate() {
    const newVal = { name: 'kanna', age: 30 };
    this.realTimeCount.update((prev: User[]) => [...prev, newVal]);
    // remove specific element
    this.realTimeCount.update((prev: User[]) => [
      ...prev.filter((item) => item.age != 20),
    ]);
    //update
    this.realTimeCount.update((prev: User[]) => {
      [
        ...prev.map((item) => {
          if (item.age === 30) {
            item.age = 50;
          }
        }),
      ];

      return prev;
    });
  }
}
