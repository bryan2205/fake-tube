import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from 'src/app/models/video';
import { VideoComment } from 'src/app/models/video-comment';
import { FakeTubeService } from 'src/app/services/fakeTubeService/fake-tube.service';

@Component({
  selector: 'omnia-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
})
export class WatchComponent implements OnInit {
  currentVideo: Video | null = null;
  currentComments: VideoComment[] | null = null;

  constructor(private readonly fakeTubeService: FakeTubeService, private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params: any) => {
        this.getCurrentVideo(params.id);
        this.getComments(params.id);
      },
    });
  }

  getCurrentVideo(videoId: string) {
    this.fakeTubeService.getVideo(videoId).subscribe({
      next: (videos) => (this.currentVideo = videos.videoList[0]),
    });
  }

  getComments(videoId: string) {
    this.fakeTubeService.getComments(videoId).subscribe({
      next: (comments) => (this.currentComments = comments),
    });
  }
}
