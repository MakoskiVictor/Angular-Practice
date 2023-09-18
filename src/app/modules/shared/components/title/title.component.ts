import { Component, Input, /* OnInit */ } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent /* implements OnInit */ {
  titleRendered: boolean
  @Input() titleText = 'This is the Title'

  constructor() {
    this.titleRendered = true
  }



  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   alert('Me he inicido')
  // }
}
