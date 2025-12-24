import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Autocompelet } from './autocompelet';

describe('Autocompelet', () => {
  let component: Autocompelet;
  let fixture: ComponentFixture<Autocompelet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Autocompelet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Autocompelet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
