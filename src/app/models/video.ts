export class Video {
  description: string = '';
  title: string = '';
  videoId: string = '';
  channelTitle: string = '';
  publishedAt: Date = new Date();
  imagePreview: string = '';
  likes: string = '';
  viewCount: string = '';
  url: string = '';

  constructor(configItem: any) {
    this.description = configItem.snippet?.description;
    this.title = configItem.snippet.title;
    this.videoId = configItem.id;
    this.channelTitle = configItem.snippet.channelTitle;
    this.publishedAt = configItem.snippet.publishedAt;
    this.imagePreview = configItem.snippet.thumbnails.high.url;
    this.likes = configItem.statistics.likeCount;
    this.viewCount = configItem.statistics.viewCount;
    this.url = `http://www.youtube.com/embed/${configItem.id}`;
  }
}
