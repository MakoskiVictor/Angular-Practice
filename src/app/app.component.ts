import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from './services/utilities.service';
import { Result, CharactersApi } from './models/app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {


  titles = ['Title1', 'Title2', 'Title3'];
  uppercaseTitles: string[] = []
  testBinding = 'Esto es un test';
  characters!: Result[];

  // Inyectar dependencia (service en este caso)
  //Si usamos static no hace falta inyectarlo en el constructor
  // Con static
  /* constructor(private us: UtilitiesService) { } */

  toUppercase() {
    this.titles = this.titles.map(title => title.toUpperCase())
  }
  // Sin static
  /* newUpperedCase() {
    this.uppercaseTitles = this.us.convertArrayItemsToUppercase(this.titles)
  } */

  // Con static
  newUpperedCase() {
    this.uppercaseTitles = UtilitiesService.convertArrayItemsToUppercase(this.titles)
  }


  resetParams() {
    this.titles = ['Title1', 'Title2', 'Title3'];
    this.uppercaseTitles = []
  }


  //REQUST HTTP -> necesito el constructor para inyectarlo y el OnInit
  constructor(private us: UtilitiesService) { }

  ngOnInit() {
    this.us.getCharacters().subscribe((data: CharactersApi) => {
      console.log(data)
      this.characters = data.results
    })
  }

}


