import { Component, effect, model, OnInit, signal } from '@angular/core';
import { InputMask } from '../input-mask';
import { TelePhone } from '../../../directives/telephone.direcives';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parentinput',
  imports: [TelePhone, FormsModule, InputMask],
  templateUrl: './parentinput.html',
  styleUrl: './parentinput.scss',
  standalone: true,
})
export class Parentinput implements OnInit {
  inputChnange(event: any) {}
  name: string = '';
  converted = model<string>('sd');
  constructor() {}
  eventTrigger() {
    console.log(this.name);
    this.name = this.name.replace(/[^A-Za-z]/g, '');
    this.converted.set(this.name.split('').reverse().join(''));
    console.log(this.converted());
  }
  ngOnInit(): void {}
}
