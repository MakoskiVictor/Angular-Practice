import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titles = ['Title1', 'Title2', 'Title3'];
  uppercaseTitles: string[] = []
  testBinding = 'Esto es un test';

  toUppercase() {
    this.titles = this.titles.map(title => title.toUpperCase())
  }

  newUpperedCase() {
    this.uppercaseTitles = this.titles.map(title => title.toUpperCase());
  }

  resetParams() {
    this.titles = ['Title1', 'Title2', 'Title3'];
    this.uppercaseTitles = []
  }
}
