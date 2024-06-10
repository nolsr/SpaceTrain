import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mission',
    loadChildren: () => import('./pages/mission/mission.module').then(
      (m) => m.MissionModule
    ),
  },
  {
    path: 'rockets',
    loadChildren: () => import('./pages/rockets/rockets.module').then(
        (m) => m.RocketsModule
      ),
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('./pages/booking/booking.module').then(
        (m) => m.BookingModule
      ),
  },
  {
    path: 'tours',
    loadChildren: () =>
      import('./pages/tours/tours.module').then(
        (m) => m.ToursModule
      ),
  },
  { path: '', redirectTo: 'mission', pathMatch: 'full' },
  { path: '**', redirectTo: 'mission' }, // Fallback-Route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
