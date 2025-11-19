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
  // add dynamic from data
  get getCountry() {
    return this.userFrom.get('country')?.value;
  }

  onChangegender() {
    console.log('d', this.getCountry);
    if (this.getCountry == 'in') {
      this.userFrom.addControl(
        'state',
        this.formBuilder.control('', Validators.required)
      );
    }
  }

  selectCounty(event: any, i: number) {
    console.log('dd', event.target.checked);
    const hobbyes = this.userFrom.get('hobby') as FormArray;
    const item = this.radioOpt.find((_, index) => i == index);
    if (event.target.checked) {
      hobbyes.push(new FormControl(item.key));
    } else {
      const index = hobbyes.controls.findIndex(
        (_, i) => _ == event.target.value
      );
      console.log('232', item);
    }
  }

  onClick() {
    console.log('clicked', this.userFrom.value);
    this.userFrom.markAllAsDirty();
  }
}
