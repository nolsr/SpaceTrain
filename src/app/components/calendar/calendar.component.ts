import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {
  private months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
  public weekdays = ['S', 'M', 'D', 'M', 'D', 'F', 'S']
  public today: Date = new Date();

  public currentMonth = '';
  public days = [];

  ngOnInit(): void {
    this.fillCalendar(this.today);
  }

  private fillCalendar(date: Date) {
    this.days = [];
    this.currentMonth = this.months[this.today.getMonth()] + ' ' + this.today.getFullYear();

    const weekdayOfFirstOfMonth = new Date(this.today.setDate(1)).getDay();
    const month = date.getMonth();
  
    let currentDate = new Date(date.setDate(date.getDate() - weekdayOfFirstOfMonth));
    console.log(currentDate);
    // date.setDate(date.getDate() + 1);

    while(currentDate.getMonth() <= month) {
      for (let i = 0; i < 7; i++) {
        
      }
    }
  }
}
