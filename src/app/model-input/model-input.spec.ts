import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelInput } from './model-input';

describe('ModelInput', () => {
  let component: ModelInput;
  let fixture: ComponentFixture<ModelInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
