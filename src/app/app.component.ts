import { Component } from '@angular/core';
import { UtilitiesService } from './services/utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titles = ['Title1', 'Title2', 'Title3'];
  uppercaseTitles: string[] = []
  testBinding = 'Esto es un test';

  // Inyectar dependencia (service en este caso)
  constructor(private us: UtilitiesService) { }

  toUppercase() {
    this.titles = this.titles.map(title => title.toUpperCase())
  }

  newUpperedCase() {
    this.uppercaseTitles = this.us.convertArrayItemsToUppercase(this.titles)
  }

  resetParams() {
    this.titles = ['Title1', 'Title2', 'Title3'];
    this.uppercaseTitles = []
  }
}
