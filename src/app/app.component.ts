import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  showDialog = false;
  newHits:Array<any> = [];


  loadNewData(newData) {
    this.newHits = newData;
    console.log("New Data", this.newHits);
  }
}
