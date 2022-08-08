import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EserciziComponent } from './esercizi.component';

describe('EserciziComponent', () => {
  let component: EserciziComponent;
  let fixture: ComponentFixture<EserciziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EserciziComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EserciziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
