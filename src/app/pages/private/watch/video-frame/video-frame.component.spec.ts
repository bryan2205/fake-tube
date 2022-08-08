import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoFrameComponent } from './video-frame.component';

describe('VideoFrameComponent', () => {
  let component: VideoFrameComponent;
  let fixture: ComponentFixture<VideoFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
