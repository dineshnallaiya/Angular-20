import { Component, contentChild, effect } from '@angular/core';
import { Databox } from './databox/databox';

@Component({
  selector: 'app-data-search',
  imports: [Databox],
  templateUrl: './data-search.html',
  styleUrl: './data-search.scss',
  standalone: true,
})
export class DataSearch {
  searchInput: string = '';
  constructor() {}
  search(event: any) {
    console.log(event.target.value);
    this.searchInput = event.target.value;
  }
}
