import {
  AfterContentInit,
  Component,
  ContentChild,
  contentChild,
  effect,
  ElementRef,
  input,
  OnInit,
} from '@angular/core';
import { SortingPipe } from '../../../pipe/sorting.pipe';

@Component({
  selector: 'app-databox',
  imports: [],
  templateUrl: './databox.html',
  styleUrl: './databox.scss',
  providers: [SortingPipe],
})
export class Databox implements AfterContentInit {
  searchInput = input('');
  @ContentChild('header') header!: ElementRef;
  filterType = 'asc';
  data = [
    { name: 'zora', age: 24 },
    { name: 'aero', age: 24 },
    { name: 'dinesh', age: 21 },
    { name: 'dharun', age: 21 },
    { name: 'diya', age: 21 },
    { name: 'kanna', age: 21 },
    { name: 'kani', age: 21 },
    { name: 'kayal', age: 21 },
    { name: 'kayaluu', age: 21 },
  ];
  filterRecord: any[] = [];
  constructor(private SortingPipe: SortingPipe, private el: ElementRef) {
    this.filterRecord = this.SortingPipe.transform(this.data, this.filterType);
    effect(() => {
      let searchText = this.searchInput();
      console.log('searchText', searchText);
      this.filterRecord = this.data.filter((item: any) =>
        item.name.includes(searchText)
      );
      console.log('searchText', this.filterRecord);
    });
  }
  changeFilterType() {
    this.filterType = this.filterType == 'asc' ? 'desc' : 'asc';
    this.filterRecord = this.SortingPipe.transform(
      this.filterRecord,
      this.filterType
    );
  }
  ngAfterContentInit(): void {
    this.header.nativeElement.style.cssText = 'font-weight: 500; color: green;';
  }
}
