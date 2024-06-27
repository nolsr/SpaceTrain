import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from "./calendar/calendar.component";
import { CountdownComponent } from "./countdown/countdown.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { TourSelectorComponent } from './tour-selector/tour-selector.component';
import { TourdatePipe } from "../pipes/tourdate.pipe";

@NgModule({
    declarations: [
        CalendarComponent,
        CountdownComponent,
        NavbarComponent,
        TourSelectorComponent
    ],
    exports: [
        CalendarComponent,
        TourSelectorComponent,
        CountdownComponent,
        NavbarComponent,
    ],
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive,
        TourdatePipe
    ]
})
export class ComponentsModule { }
