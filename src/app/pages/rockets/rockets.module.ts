import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RocketListComponent} from "./components/rocket-list/rocket-list.component";
import {RocketsService} from "../../core/services/rockets.service";
import {RocketsRoutingModule} from "./rockets-routing.module";



@NgModule({
  declarations: [RocketListComponent,],
  imports: [
    CommonModule,
    RocketsRoutingModule
  ],
  providers: [RocketsService],
})
export class RocketsModule { }
