import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: ``,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'FakeTube';
  isChanged: boolean = false;
  milano: string = '../assets/images/milano.jpeg';
  omnia: string = '../assets/images/omnia.png';

  public changeTitle() {
    this.isChanged = !this.isChanged;
    this.title = this.isChanged ? 'OmniaTube' : 'FakeTube';
  }

  changeMyTitle(event: string) {
    this.title = event;
  }
}
