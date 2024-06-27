import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from "./calendar/calendar.component";
import { CountdownComponent } from "./countdown/countdown.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { TourSelectorComponent } from './tour-selector/tour-selector.component';
import { TourdatePipe } from "../pipes/tourdate.pipe";
import { HeadlineComponent } from './headline/headline.component';
import { SeatsComponent } from './seats/seats.component';
import { SeatPipe } from '../pipes/seat.pipe';

@NgModule({
    declarations: [
        CalendarComponent,
        CountdownComponent,
        NavbarComponent,
        TourSelectorComponent,
        HeadlineComponent,
        SeatsComponent
    ],
    exports: [
        CalendarComponent,
        TourSelectorComponent,
        CountdownComponent,
        NavbarComponent,
        HeadlineComponent,
        SeatsComponent
    ],
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive,
        TourdatePipe,
        SeatPipe
    ]
})
export class ComponentsModule { }
