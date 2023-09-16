import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  /* constructor() { } */

  convertArrayItemsToUppercase(array: string[]) {
    return array.map(title => title.toUpperCase());
  }
}
