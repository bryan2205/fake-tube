import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { VideoComment } from 'src/app/models/video-comment';
import { iVideoListFromWs, VideoList } from 'src/app/models/video-list';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class FakeTubeService {
  constructor(private readonly apiService: ApiService) {}

  getVideos(next?: string) {
    let queryParams: string = [
      `chart=mostPopular`,
      `regionCode=IT`,
      `part=snippet,contentDetails,statistics`,
      `maxResults=12`,
      `type=video`,
      `key=${environment.API_KEY}`,
    ].join('&');
    if (next) {
      queryParams += `&pageToken=${next}`;
    }
    return this.fetchVideos(queryParams);
  }

  getVideo(videoId: string) {
    const queryParams: string = [`id=${videoId}`, `part=snippet,contentDetails,statistics`, `maxResults=1`, `key=${environment.API_KEY}`].join('&');
    return this.fetchVideos(queryParams);
  }

  getComments(videoId: string) {
    const queryParams: string = [`videoId=${videoId}`, `part=id,replies,snippet`, `maxResults=10`, `key=${environment.API_KEY}`].join('&');
    // new VideoCommentList(comments.items)
    return this.apiService
      .get(`/commentThreads?${queryParams}`)
      .pipe(map((comments: any) => comments.items.map((comment: any) => new VideoComment(comment))));
  }

  private fetchVideos(queryParams: string) {
    return this.apiService.get(`/videos?${queryParams}`).pipe(map((videoList: iVideoListFromWs) => new VideoList(videoList)));
  }
}
