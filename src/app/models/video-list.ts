import { Video } from './video';

export interface iVideoListFromWs {
  etag: string;
  items: [];
  kind: string;
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: { totalResults: number; resultsPerPage: number };
}

export class VideoList {
  videoList: any[] = [];
  nextPageToken: string = '';
  prevPageToken: string = '';
  constructor(configObj: iVideoListFromWs) {
    this.videoList = this.typeVideo(configObj.items);
    this.nextPageToken = configObj.nextPageToken;
    this.prevPageToken = configObj.prevPageToken;
  }

  private typeVideo(items: any[]) {
    return items.map((item) => new Video(item));
  }
}
