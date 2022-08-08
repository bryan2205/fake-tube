export class VideoComment {
  authorDisplayName: string = '';
  textDisplay: string = '';
  authorProfileImageUrl: string = '';
  publishedAt: Date = new Date();
  likes: number = 0;

  constructor(comment: any) {
    this.authorDisplayName = comment.snippet.topLevelComment.snippet.authorDisplayName;
    this.publishedAt = comment.snippet.topLevelComment.snippet.publishedAt;
    this.likes = comment.snippet.topLevelComment.snippet.likeCount;
    this.textDisplay = comment.snippet.topLevelComment.snippet.textDisplay;
    this.authorProfileImageUrl = comment.snippet.topLevelComment.snippet.authorProfileImageUrl;
  }
}
