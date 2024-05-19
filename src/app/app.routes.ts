import { Route, Routes } from '@angular/router';
import { ToursComponent } from './pages/tours/tours.component';
import { MissionComponent } from './pages/mission/mission.component';
import { RocketsComponent } from './pages/rockets/rockets.component';


export const routes: Routes = [
    { path: 'tours', component: ToursComponent },
    { path: 'mission', component: MissionComponent },
    { path: 'rockets', component: RocketsComponent },
    { path: '**', redirectTo: 'mission' }
];
