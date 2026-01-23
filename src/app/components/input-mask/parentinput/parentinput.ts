import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  model,
  OnInit,
  QueryList,
  Renderer2,
  signal,
  ViewChild,
  ViewChildren,
} from '@angular/core';
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
export class Parentinput implements OnInit, AfterViewInit {
  inputChnange(event: any) {}
  @ViewChild('head') header!: ElementRef;
  // @ViewChildren('head') header!: QueryList<ElementRef>;
  @ViewChild('InputMask', { static: false }) InputMask!: InputMask;
  name: string = '';
  converted = model<string>('sd');
  constructor(private renderer: Renderer2) {}
  eventTrigger() {
    console.log(this.name);
    this.name = this.name.replace(/[^A-Za-z]/g, '');
    this.converted.set(this.name.split('').reverse().join(''));
    console.log(this.converted());
  }
  ngOnInit(): void {}
  ngAfterViewInit() {
    console.log(this.InputMask);
    this.header.nativeElement.style.cssText = 'color: red';
    // this.renderer.setStyle(this.header.nativeElement, 'color', 'blue');
    // this.header.nativeElement.innerHTML = 'jk';
  }
}
