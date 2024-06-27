import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Tourtermin } from '../../core/spacetrain.model';
import { TourdatePipe } from '../../pipes/tourdate.pipe';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit, OnChanges {
  @Input() tourdates: Array<Tourtermin> = [];

  public month = 0;
  public year = 0;
  private months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
  public weekdays = ['S', 'M', 'D', 'M', 'D', 'F', 'S']

  public currentMonth = '';
  public days: Array<CalendarDay> = [];
  public selectedDate = '';

  constructor(private pipe: TourdatePipe) {}

  ngOnInit(): void {
    this.month = new Date().getMonth();
    this.year = new Date().getFullYear();
    this.fillCalendar();
  }

  ngOnChanges(sc: SimpleChanges): void {
    if (sc['tourdates']) {
      this.selectedDate = ''
    }
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
    const isTourOnThisDay = this.pipe.transform({day: calendarDay.day, month: this.month + 1, year: this.year, tourdates: this.tourdates});
    if (!calendarDay.thisMonth || !isTourOnThisDay) {
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
