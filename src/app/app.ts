import { Component, inject, OnInit, signal } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { Dashboard } from './dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App implements OnInit {
  protected readonly title = signal('angulr_tu');
  customForm!: FormGroup;
  formBuilder = inject(FormBuilder);
  parentCount = 1;
  ngOnInit(): void {
    this.customForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, RestrictSpecial()]),
    });
  }

  submit() {
    this.customForm.markAllAsTouched();
  }
}

export function RestrictSpecial(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const reg = /[^@#$%^&*()<>]/;

    return reg.test(control.value) ? { noSpl: true } : null;
  };
}
