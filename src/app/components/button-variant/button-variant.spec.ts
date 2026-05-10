import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonVariant } from './button-variant';

describe('ButtonVariant', () => {
  let component: ButtonVariant;
  let fixture: ComponentFixture<ButtonVariant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonVariant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonVariant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
