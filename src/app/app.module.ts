import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RouterOutlet } from "@angular/router";
import { RocketsModule } from "./pages/rockets/rockets.module";
import { AppRoutingModule } from "./app-routing.module";
import { MissionModule } from "./pages/mission/mission.module";
import { ComponentsModule } from "./components/components.module";
import { BookingModule } from "./pages/booking/booking.module";
import { ToursModule } from "./pages/tours/tours.module";
import { TourdatePipe } from './pipes/tourdate.pipe';
import { AuthService } from './core/services/auth.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterOutlet,
    MissionModule,
    RocketsModule,
    BookingModule,
    ToursModule,
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [
    provideClientHydration(),
    TourdatePipe,
    AuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
