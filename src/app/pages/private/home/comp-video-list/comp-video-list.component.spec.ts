import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompVideoListComponent } from './comp-video-list.component';

describe('CompVideoListComponent', () => {
  let component: CompVideoListComponent;
  let fixture: ComponentFixture<CompVideoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompVideoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompVideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
