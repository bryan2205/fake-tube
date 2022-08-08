import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from 'src/app/models/video';

@Component({
  selector: 'omnia-comp-video-item',
  templateUrl: './comp-video-item.component.html',
  styleUrls: ['./comp-video-item.component.scss'],
})
export class CompVideoItemComponent implements OnInit {
  @Input() video!: Video;
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  goToVideo(id: string) {
    this.router.navigate(['private', 'watch', id]);
  }
}
