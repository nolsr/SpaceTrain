import { Route, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ToursComponent } from './pages/tours/tours.component';
import { MissionComponent } from './pages/mission/mission.component';
import {RocketListComponent} from "./pages/rockets/components/rocket-list/rocket-list.component";


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'tours', component: ToursComponent },
    { path: 'mission', component: MissionComponent },
    { path: 'rockets', component: RocketListComponent },
    { path: '**', redirectTo: 'home' }
];
