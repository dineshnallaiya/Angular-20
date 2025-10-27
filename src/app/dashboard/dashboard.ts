import { Component, computed, input, model } from '@angular/core';
import { CommonModule, NgPlural } from '@angular/common';
import { SideBar } from '../shared/side-bar/side-bar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, SideBar, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  standalone: true,
})
export class Dashboard {
  numberCount = 1;
  count = model(0);
  constructor() {}
  sds() {
    this.count.update((prev) => prev + 1);
  }
}
