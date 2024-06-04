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
  private month = 0;
  private year = 0;
  private months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
  public weekdays = ['S', 'M', 'D', 'M', 'D', 'F', 'S']

  public currentMonth = '';
  public days: Array<CalendarDay> = [];
  public selectedDate = '';

  ngOnInit(): void {
    this.month = new Date().getMonth();
    this.year = new Date().getFullYear();
    this.fillCalendar();
  }

  private fillCalendar() {
    this.days = [];
    this.currentMonth = this.months[this.month] + ' ' + this.year;
    const date = new Date(new Date(new Date(new Date().setFullYear(this.year)).setMonth(this.month)).setDate(1));
    const weekdayOfFirstOfMonth = date.getDay();
    let currentDate = new Date(date.setDate(date.getDate() - weekdayOfFirstOfMonth));

    while ((currentDate.getFullYear() == this.year && currentDate.getMonth() <= this.month) ||
      (currentDate.getFullYear() == this.year - 1)) {
      for (let i = 0; i < 7; i++) {
        this.days.push(new CalendarDay(currentDate.getDate(), currentDate.getMonth() == this.month, this.formatDate(currentDate)));
        currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
      }
    }
  }

  private formatDate(date: Date) {
    return date.toISOString().slice(0, 10);
  }

  public selectDate(calendarDay: CalendarDay) {
    if (!calendarDay.thisMonth) {
      return;
    }
    this.selectedDate = calendarDay.isoString;
  }

  public nextMonth() {
    this.month++;
    if (this.month > 11) {
      this.month = 0;
      this.year++;
    }
    this.fillCalendar();
  }

  public prevMonth() {
    this.month--;
    if (this.month < 0) {
      this.month = 11;
      this.year--;
    }
    this.fillCalendar();
  }
}

export class CalendarDay {
  constructor(public day: number, public thisMonth: boolean, public isoString: string) {
  }
}