import { Component, effect, input, model, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-mask',
  imports: [],
  templateUrl: './input-mask.html',
  styleUrl: './input-mask.scss',
  standalone: true,
})
export class InputMask implements OnInit {
  converted = model<string>('jj');
  constructor() {
    effect(() => {
      if (this.converted() == 'a') {
        setTimeout(() => {
          this.converted.set('dd');
        });
      }
    });
  }
  ngOnInit() {}
}
