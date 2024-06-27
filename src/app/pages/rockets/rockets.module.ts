import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RocketListComponent} from "./components/rocket-list/rocket-list.component";
import {RocketsService} from "../../core/services/rockets.service";
import {RocketsRoutingModule} from "./rockets-routing.module";
import { RocketInfoPipe } from "../../pipes/rocket-info.pipe";



@NgModule({
    declarations: [RocketListComponent,],
    providers: [RocketsService],
    imports: [
        CommonModule,
        RocketsRoutingModule,
        RocketInfoPipe
    ]
})
export class RocketsModule { }
