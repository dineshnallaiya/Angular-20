import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDatepicker } from './display-datepicker';

describe('DisplayDatepicker', () => {
  let component: DisplayDatepicker;
  let fixture: ComponentFixture<DisplayDatepicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayDatepicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDatepicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
