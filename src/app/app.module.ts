import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {BrowserModule, provideClientHydration} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {RouterOutlet} from "@angular/router";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {RocketsModule} from "./pages/rockets/rockets.module";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterOutlet,
    NavbarComponent,
    RocketsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [provideClientHydration(),],
  bootstrap: [AppComponent],
})
export class AppModule { }
