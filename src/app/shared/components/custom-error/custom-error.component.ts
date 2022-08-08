import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'omnia-custom-error',
  templateUrl: './custom-error.component.html',
  styleUrls: ['./custom-error.component.scss'],
})
export class CustomErrorComponent implements OnInit {
  @Input() hidden: boolean = false;
  @Input() errors: any;
  @Input() touched: boolean = false;
  @Input() typeElement: string = '';
  constructor() {}

  ngOnInit(): void {}
}
