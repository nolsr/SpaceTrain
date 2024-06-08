import { Routes } from '@angular/router';
import { ToursComponent } from './pages/tours/tours.component';
import { MissionComponent } from './pages/mission/mission.component';
import {RocketListComponent} from "./pages/rockets/components/rocket-list/rocket-list.component";
import { BookingComponent } from './pages/booking/booking.component';


export const routes: Routes = [
    { path: 'tours', component: ToursComponent },
    { path: 'mission', component: MissionComponent },
    { path: 'rockets', component: RocketListComponent },
    { path: 'booking', component: BookingComponent },
    { path: '**', redirectTo: 'mission' }
];
