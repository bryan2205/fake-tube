import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Credentials } from 'src/app/models/credentials/credentials';

@Component({
  selector: 'omnia-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent implements OnInit, AfterViewInit {
  @ViewChild('myEmail') email?: ElementRef;
  @ViewChild('myForm') myForm?: ElementRef;
  credentials: Credentials = new Credentials();
  constructor() {}
  ngAfterViewInit(): void {
    console.log(this.email);
  }

  ngOnInit(): void {}

  sendmyForm() {
    console.log(this.myForm);

    console.log(this.credentials);
  }
}
