import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToursComponent} from "./tours/tours.component";
import {ToursRoutingModule} from "./tours-routing.module";
import {ToursService} from "../../core/services/tours.service";
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [ToursComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ToursRoutingModule
  ],
  providers: [ToursService]
})
export class ToursModule { }
