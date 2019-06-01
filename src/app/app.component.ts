import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public month = new Date().getMonth()
  public year = new Date().getFullYear()
  public selectedDay = new Date(2019, 5, 26)
  public calendarColors = {
    bcHeadColor: "#004085",
    bcDaysDescColor: "#004085",
    bcDaysIndexColor: "black",
    bcDaysSelectedColor: "white",
    bcDaysSelectedBcColor: "#004085"
  }  

  changeSelection(date) {
    this.selectedDay = date
  } 
}
