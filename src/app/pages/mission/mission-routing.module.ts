import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {MissionComponent} from "./components/mission/mission.component";

const routes: Routes = [
  { path: 'mission', component: MissionComponent },
  { path: '', redirectTo: 'mission', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionRoutingModule { }
