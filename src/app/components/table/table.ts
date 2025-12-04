import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.html',
  styleUrl: './table.scss',
  standalone: true,
})
export class Table {
  tableColumn = [
    { feild: 'Name', id: 'name' },
    { feild: 'Age', id: 'age' },
  ];
  type = 'asc';

  tableRow = [
    {
      name: 'abc',
      age: 29,
    },
    {
      name: 'dca',
      age: 25,
    },
    {
      name: 'zs',
      age: 32,
    },
  ];
  tableRecord = [...this.tableRow];

  sortingOrder(field: string) {
    this.type = this.type === 'asc' ? 'dsc' : 'asc';
    this.tableRecord = [...this.tableRow].sort((a: any, b: any) => {
      if (a[field] > b[field]) {
        return this.type == 'asc' ? 1 : -1;
      }
      if (a[field] > b[field]) {
        return this.type == 'dsc' ? -1 : 1;
      }

      return 0;
    });
  }
  constructor() {}
}
