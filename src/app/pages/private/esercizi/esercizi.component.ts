import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { map, switchMap } from 'rxjs';
import { TestModel } from '../../../models/test-model';
import { QueueService } from '../../../services/queue.service';

@Component({
  selector: 'omnia-esercizi',
  templateUrl: './esercizi.component.html',
  styleUrls: ['./esercizi.component.scss'],
  providers: [QueueService],
})
export class EserciziComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterContentInit, OnDestroy {
  @Input() public titleChild: string = '';
  isChanged: boolean = false;
  @Input() milano: string = 'vuoto';
  @Input() omnia: string = '';
  @Output() titleChanged: EventEmitter<string> = new EventEmitter();
  likeCount: number = 0;
  basicArray: TestModel[] = [];

  constructor(private readonly queueService: QueueService) {
    this.basicArray = this.queueService.getBasicArray();
    // console.log('CONSTRUCTOR START', this.basicArray);
  }
  ngDoCheck(): void {
    // console.log('DO CHECK START', this.basicArray);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ON CHANGES START', this.basicArray);
  }
  ngAfterViewInit(): void {
    // console.log('AFTER VIEW INIT START', this.basicArray);
  }
  ngAfterContentInit(): void {
    // console.log('AFTER CONTENT START', this.basicArray);
  }
  ngOnDestroy(): void {
    // console.log('ON DESTROY START', this.basicArray);
  }
  ngOnInit() {
    this.queueService.getBasicArrayObservable().subscribe({
      next: (values) => {
        this.basicArray = values;
      },
      error: (error) => console.error(error),
      complete: () => console.log('complete'),
    });
  }

  public changeTitle() {
    this.isChanged = !this.isChanged;
    this.titleChild = this.isChanged ? 'OmniaTube' : 'FakeTube';
    this.titleChanged.emit(this.titleChild);
  }

  pushLike(event: number, id: number) {
    this.queueService.pushLike(event, id);
    // this.basicArray.map((item) => {
    //   if (item.id === itemService?.id) item = itemService;
    // });
  }
}
