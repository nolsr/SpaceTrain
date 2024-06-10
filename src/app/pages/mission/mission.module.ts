import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RocketListComponent} from "../rockets/components/rocket-list/rocket-list.component";
import {RocketsRoutingModule} from "../rockets/rockets-routing.module";
import {RocketsService} from "../../core/services/rockets.service";
import {MissionService} from "../../core/services/mission.service";
import {MissionRoutingModule} from "./mission-routing.module";
import {MissionComponent} from "./components/mission/mission.component";
import {ComponentsModule} from "../../components/components.module";



@NgModule({
  declarations: [MissionComponent,],
  imports: [
    CommonModule,
    MissionRoutingModule,
    ComponentsModule
  ],
  providers: [MissionService],
})
export class MissionModule { }
