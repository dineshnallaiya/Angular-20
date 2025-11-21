import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  ɵInternalFormsSharedModule,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  imports: [
    ɵInternalFormsSharedModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.scss',
  standalone: true,
})
export class DynamicForm implements OnInit {
  userFrom!: FormGroup;
  radioOpt: any[] = [];
  public fields: any[] = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      value: '',
      required: true,
    },
    {
      type: 'file',
      name: 'picture',
      label: 'Picture',
      required: true,
    },
    {
      type: 'dropdown',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' },
        { key: 'as', label: 'AUS' },
      ],
    },
    {
      type: 'radio',
      name: 'gender',
      label: 'gender',
      required: false,
      options: [
        { key: 'm', label: 'Male' },
        { key: 'f', label: 'Female' },
      ],
    },
    {
      type: 'checkbox',
      name: 'hobby',
      label: 'Hobby',
      required: true,
      options: [
        { key: 'f', label: 'Fishing' },
        { key: 'c', label: 'Cooking' },
      ],
    },
  ];
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.userFrom = this.formBuilder.group({});
    this.fields.forEach((field) => {
      const validator = [];
      if (field.required) validator.push(Validators.required);
      if (field.type == 'checkbox') {
        this.userFrom.addControl(
          field.name,
          this.formBuilder.array([], validator)
        );
      }
      this.userFrom.addControl(
        field.name,
        this.formBuilder.control('', validator)
      );
    });
    this.fields.forEach((field) => {
      if (field.type == 'checkbox') {
        this.radioOpt = [...field.options];
      }
    });
  }
  // get realtime typing data
  get getCountry() {
    return this.userFrom.get('country')?.value;
  }

  get getState() {
    return this.userFrom.get('state')?.value;
  }
  /**
   * When state tn here add set validators
   * not I removed the validation
   */

  addDynamicValidation() {
    if (this.getState === 'tn') {
      this.userFrom.get('street')?.setValidators([Validators.required]);
    } else {
      this.userFrom.get('street')?.clearValidators();
    }
    this.userFrom.get('street')?.updateValueAndValidity();
  }

  onChangegender() {
    console.log('d', this.getCountry);
    if (this.getCountry !== 'as') {
      this.userFrom.addControl(
        'state',
        this.formBuilder.control('', Validators.required)
      );
      this.userFrom.addControl('street', this.formBuilder.control(''));
    }
  }

  selectCounty(event: any, i: number) {
    const hobbyes = this.userFrom.get('hobby') as FormArray;
    const item = this.radioOpt.find((_, index) => i == index);
    //pushing array to the formArray
    if (event.target.checked) {
      hobbyes.push(new FormControl(item.key));
    } else {
      const index = hobbyes.controls.findIndex((_, i) => _ == item);
      hobbyes.removeAt(index);
    }
  }

  onClick() {
    console.log('clicked', this.userFrom.value, this.userFrom.valid);
    this.userFrom.markAllAsDirty();
  }
}
