import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Video } from 'src/app/models/video';

@Component({
  selector: 'omnia-comp-video-list',
  templateUrl: './comp-video-list.component.html',
  styleUrls: ['./comp-video-list.component.scss'],
})
export class CompVideoListComponent implements OnInit, OnChanges {
  @Input() videos: Video[] = [];
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}
}
