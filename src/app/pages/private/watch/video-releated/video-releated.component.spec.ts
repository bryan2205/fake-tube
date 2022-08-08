import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoReleatedComponent } from './video-releated.component';

describe('VideoReleatedComponent', () => {
  let component: VideoReleatedComponent;
  let fixture: ComponentFixture<VideoReleatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoReleatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoReleatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
