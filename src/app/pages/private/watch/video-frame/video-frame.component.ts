import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Video } from 'src/app/models/video';

@Component({
  selector: 'omnia-video-frame',
  templateUrl: './video-frame.component.html',
  styleUrls: ['./video-frame.component.scss'],
})
export class VideoFrameComponent implements OnInit {
  @Input() currentVideo!: Video;
  safeUrl?: SafeResourceUrl;
  constructor(private readonly domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.currentVideo.url);
  }
}
