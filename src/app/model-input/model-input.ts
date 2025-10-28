import { Component, signal } from '@angular/core';
import { ChildModel, User } from './child-model';

@Component({
  selector: 'app-model-input',
  imports: [ChildModel],
  templateUrl: './model-input.html',
  styleUrl: './model-input.scss',
})
export class ModelInput {
  totalValue = signal<User[]>([{ name: 'Dinesh', age: 20 }]);
}
