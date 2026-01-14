import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Databox } from './databox';

describe('Databox', () => {
  let component: Databox;
  let fixture: ComponentFixture<Databox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Databox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Databox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
