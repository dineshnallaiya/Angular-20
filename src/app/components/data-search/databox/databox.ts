import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  effect,
  ElementRef,
  input,
  OnInit,
  QueryList,
  Renderer2,
} from '@angular/core';
import { SortingPipe } from '../../../pipe/sorting.pipe';
import { DataSearch } from '../data-search';

@Component({
  selector: 'app-databox',
  imports: [],
  templateUrl: './databox.html',
  styleUrl: './databox.scss',
  providers: [SortingPipe],
})
export class Databox implements AfterContentInit {
  searchInput = input('');
  // v20
  // @ContentChild('header') contentColor!: ElementRef;
  // @ContentChildren('colorChange', { descendants: true, read: ElementRef })
  // contentChildren!: QueryList<ElementRef>;
  @ContentChildren('colorChange', { descendants: true })
  contentChildren!: QueryList<ElementRef>;
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
  constructor(
    private SortingPipe: SortingPipe,
    private renderer: Renderer2,
  ) {
    this.filterRecord = this.SortingPipe.transform(this.data, this.filterType);
    effect(() => {
      let searchText = this.searchInput();
      console.log('searchText', searchText);
      this.filterRecord = this.data.filter((item: any) =>
        item.name.includes(searchText),
      );
      console.log('searchText', this.filterRecord);
    });
  }
  changeFilterType() {
    this.filterType = this.filterType == 'asc' ? 'desc' : 'asc';
    this.filterRecord = this.SortingPipe.transform(
      this.filterRecord,
      this.filterType,
    );
  }
  ngAfterContentInit(): void {
    console.log(this.contentChildren);
    this.contentChildren.forEach((el) => {
      this.renderer.setStyle(el.nativeElement, 'color', 'red');
    });
    // this.renderer.setStyle(this.contentColor.nativeElement, 'color', 'blue');
  }
}
