import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from "./calendar/calendar.component";
import { CountdownComponent } from "./countdown/countdown.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterLink, RouterLinkActive } from "@angular/router";

@NgModule({
  declarations: [
    CalendarComponent,
    CountdownComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  exports: [
    CalendarComponent,
    CountdownComponent,
    NavbarComponent,
  ]
})
export class ComponentsModule { }
