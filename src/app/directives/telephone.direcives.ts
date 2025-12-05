import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[telePhone]',
  standalone: true,
})
export class TelePhone implements OnInit {
  constructor(private el: ElementRef) {}
  @HostListener('input', ['$event'])
  onInputs(event: any) {
    const value = event.target.value.replace(/-/g, '');
    if (value.length >= 3 && value.length <= 6) {
      event.target.value = value.slice(0, 3) + '-' + value.slice(3);
    } else if (value.length > 6) {
      event.target.value =
        value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 9);
    }
    // if (
    //   (value && value.length == 3) ||
    //   (value.length >= 4 && value.length == 7)
    // ) {
    //   event.value = `${value}-`;
    //   console.log(event.value);
    // }
  }
  ngOnInit(): void {}
}
