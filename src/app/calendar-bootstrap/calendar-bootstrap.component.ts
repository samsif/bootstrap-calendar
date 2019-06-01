import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'calendar-bootstrap',
  templateUrl: './calendar-bootstrap.component.html',
  styleUrls: ['./calendar-bootstrap.component.scss']
})
export class CalendarBootstrapComponent implements OnInit {
  @Input() bcMonth: number
  @Input() bcYear: number
  @Input() bcHeadColor: string 
  @Input() bcDaysDescColor: string
  @Input() bcDaysIndexColor: string
  @Input() bcDaysSelectedColor: string
  @Input() bcSelectedDay: Date           
  public daysArray: number[] 
  private monthArray = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
  public daysDescArray = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'] 
  public monthDesc: string
  constructor() { }

  ngOnInit() {
    this.monthDesc = this.monthArray[this.bcMonth]
    this.populateCalendar(this.bcMonth, this.bcYear)
  }

  populateCalendar(month, year) {
    this.daysArray = [] 
    const lastDate = new Date(year, month + 1, 0)
    for (let i = 1; i <= lastDate.getDate(); i++) {
      this.daysArray.push(i)
    } 
  }

  checkIfSelected(selected: Date, dayToCheck:number) {
    if (selected.getFullYear() === this.bcYear && selected.getMonth() === this.bcMonth) {
      return selected.getDate() === dayToCheck
    } else {
      return false
    } 
  } 

}
