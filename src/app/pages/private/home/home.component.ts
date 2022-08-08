import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video';
import { FakeTubeService } from 'src/app/services/fakeTubeService/fake-tube.service';

@Component({
  selector: 'omnia-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  videoList: Video[] = [];
  pagination = {
    prev: '',
    next: '',
  };

  constructor(private readonly fakeTubeService: FakeTubeService) {}

  ngOnInit(): void {
    this.fakeTubeService.getVideos().subscribe({
      next: (videos) => {
        this.pagination = {
          prev: videos.prevPageToken,
          next: videos.nextPageToken,
        };
        this.videoList = videos.videoList;
      },
    });
  }

  nextPage(token: string) {
    this.fakeTubeService.getVideos(token).subscribe({
      next: (videos) => {
        this.pagination = {
          prev: videos.prevPageToken,
          next: videos.nextPageToken,
        };
        this.videoList = videos.videoList;
      },
    });
  }
  prevPage(token: string) {
    this.fakeTubeService.getVideos(token).subscribe({
      next: (videos) => {
        this.pagination = {
          prev: videos.prevPageToken,
          next: videos.nextPageToken,
        };
        this.videoList = videos.videoList;
      },
    });
  }
}
