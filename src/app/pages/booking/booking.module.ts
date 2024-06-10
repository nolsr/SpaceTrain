import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookingComponent} from "./booking/booking.component";
import {BookingRoutingModule} from "./booking-routing.module";
import {BookingService} from "../../core/services/booking.service";
import {ComponentsModule} from "../../components/components.module";



@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ComponentsModule,
  ],
  providers: [BookingService],
})
export class BookingModule { }
