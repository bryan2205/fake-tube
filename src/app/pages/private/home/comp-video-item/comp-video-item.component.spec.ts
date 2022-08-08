import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompVideoItemComponent } from './comp-video-item.component';

describe('CompVideoItemComponent', () => {
  let component: CompVideoItemComponent;
  let fixture: ComponentFixture<CompVideoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompVideoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompVideoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
