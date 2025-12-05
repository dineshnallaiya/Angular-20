import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parentinput } from './parentinput';

describe('Parentinput', () => {
  let component: Parentinput;
  let fixture: ComponentFixture<Parentinput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parentinput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parentinput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
