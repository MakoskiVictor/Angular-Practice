import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(private http: HttpClient) { }

  /* convertArrayItemsToUppercase(array: string[]) {
    return array.map(title => title.toUpperCase());
  } */

  static convertArrayItemsToUppercase(array: string[]) {
    return array.map(title => title.toUpperCase());
  }

  // Request GET
  getCharacters() {
    return this.http.get('https://rickandmortyapi.com/api/character?limit=100')
  }
}
