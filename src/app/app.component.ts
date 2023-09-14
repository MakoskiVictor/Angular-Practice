import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titles = ['Title1', 'Title2', 'Title3'];
  testBinding = 'Esto es un test';
}
