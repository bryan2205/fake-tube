import { Component, Input, OnInit } from '@angular/core';
import { VideoComment } from 'src/app/models/video-comment';

@Component({
  selector: 'omnia-video-comments',
  templateUrl: './video-comments.component.html',
  styleUrls: ['./video-comments.component.scss'],
})
export class VideoCommentsComponent implements OnInit {
  @Input() currentComments!: VideoComment[];
  constructor() {}

  ngOnInit(): void {}
}
