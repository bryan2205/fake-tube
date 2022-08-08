import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchRoutingModule } from './watch-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { VideoFrameComponent } from './video-frame/video-frame.component';
import { VideoCommentsComponent } from './video-comments/video-comments.component';
import { VideoReleatedComponent } from './video-releated/video-releated.component';
import { WatchComponent } from './watch.component';

@NgModule({
  declarations: [
    VideoFrameComponent,
    VideoCommentsComponent,
    VideoReleatedComponent,
    WatchComponent
  ],
  imports: [CommonModule, WatchRoutingModule, SharedModule],
})
export class WatchModule {}
