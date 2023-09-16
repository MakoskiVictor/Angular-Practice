import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from './services/utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {


  titles = ['Title1', 'Title2', 'Title3'];
  uppercaseTitles: string[] = []
  testBinding = 'Esto es un test';
  characters: any;

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

  ngOnInit(): void {
    this.us.getCharacters().subscribe(content => {
      console.log(content)
      this.characters = content
    })
  }

}

/* interface RootObject {
  info: Info;
  results: Result[];
}

interface Result {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: any;
} */
