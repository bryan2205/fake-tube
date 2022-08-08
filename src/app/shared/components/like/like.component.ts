import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QueueService } from 'src/app/services/queue.service';

@Component({
  selector: 'omnia-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss'],
})
export class LikeComponent implements OnInit {
  @Output() likeCount: EventEmitter<number> = new EventEmitter();
  @Input() id: number = 0;
  like: number = 0;

  constructor() {}

  ngOnInit(): void {}

  pushLike() {
    this.like++;
    this.likeCount.emit(this.like);
  }
}
