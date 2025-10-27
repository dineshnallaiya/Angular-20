import {
  Directive,
  ElementRef,
  HostListener,
  input,
  OnInit,
  output,
} from '@angular/core';

@Directive({
  selector: '[debounce]',
  standalone: true,
})
export class Debounce implements OnInit {
  duration = input<number>(); //signal based
  debounceValue = output();
  searchText = '';
  clearTimeouts: any;
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    let duration = this.duration();
    console.log(duration);
    if (!this.clearTimeouts) {
      this.debounceValue.emit((event?.target as any)?.value);

      this.clearTimeouts = setTimeout(() => {
        this.clearTimeouts = null;
      }, duration);
    }
  }

  ngOnInit() {
    console.log(this.duration());
  }
}
