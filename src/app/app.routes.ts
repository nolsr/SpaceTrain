import { Route, Routes } from '@angular/router';
import { ToursComponent } from './pages/tours/tours.component';
import { MissionComponent } from './pages/mission/mission.component';
import {RocketListComponent} from "./pages/rockets/components/rocket-list/rocket-list.component";


export const routes: Routes = [
    { path: 'tours', component: ToursComponent },
    { path: 'mission', component: MissionComponent },
    { path: 'rockets', component: RocketListComponent },
    { path: '**', redirectTo: 'mission' }
];
