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
}
