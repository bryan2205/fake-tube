import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCommentsComponent } from './video-comments.component';

describe('VideoCommentsComponent', () => {
  let component: VideoCommentsComponent;
  let fixture: ComponentFixture<VideoCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
