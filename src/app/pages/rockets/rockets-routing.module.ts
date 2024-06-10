import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {RocketListComponent} from "./components/rocket-list/rocket-list.component";

const routes: Routes = [
  { path: 'rockets', component: RocketListComponent },
  { path: '', redirectTo: 'rockets', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RocketsRoutingModule { }
