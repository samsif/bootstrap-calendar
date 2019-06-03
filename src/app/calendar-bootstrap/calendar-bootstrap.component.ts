import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'calendar-bootstrap',
  templateUrl: './calendar-bootstrap.component.html',
  styleUrls: ['./calendar-bootstrap.component.scss']
})
export class CalendarBootstrapComponent implements OnInit {
  @Input() bcMonth: number
  @Input() bcYear: number
  @Input() bcColorConfig: any
  @Input() bcSelectedDay: Date
  @Input() bcChangeMonthDisp: any
  @Output() changeDateSelection = new EventEmitter<Date>()
  public firstElemPos: string    
  public daysArray: number[] 
  private monthArray = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
  public daysDescArray = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'] 
  public monthDesc: string
  constructor() { }

  ngOnInit() {
    this.populateCalendar(this.bcMonth, this.bcYear)
    if (!this.bcColorConfig.bcDaysSelectedBcColor) {
      this.bcColorConfig.bcDaysSelectedBcColor = "green"
    } 
  }

  populateCalendar(month, year) {
    this.daysArray = [] 
    const lastDate = new Date(year, month + 1, 0)
    for (let i = 1; i <= lastDate.getDate(); i++) {
      this.daysArray.push(i)
    }
    this.monthDesc = this.monthArray[this.bcMonth]
    let firstDay = new Date(year, month, 1).getDay() -1
    firstDay === -1 ? (firstDay = 6) : null
    this.firstElemPos = firstDay*(100/7) + '%'
    console.log(this.firstElemPos)
  }

  checkIfSelected(selected: Date, dayToCheck:number) {
    if (selected.getFullYear() === this.bcYear && selected.getMonth() === this.bcMonth) {
      return selected.getDate() === dayToCheck
    } else {
      return false
    } 
  }
  
  changeSelection(index) {
    this.bcSelectedDay = new Date(this.bcYear, this.bcMonth, index)
    this.changeDateSelection.emit(this.bcSelectedDay)
  }

  goToNextMonth() {
    if (this.bcMonth !== 11) {
      this.bcMonth++
    } else {
      this.bcMonth = 0
      this.bcYear++
    }
    this.populateCalendar(this.bcMonth, this.bcYear)
  }

  goToPrevMonth() {
    if (this.bcMonth !== 0) {
      this.bcMonth--
    } else {
      this.bcMonth = 11
      this.bcYear--
    }
    this.populateCalendar(this.bcMonth, this.bcYear)
  } 
}
