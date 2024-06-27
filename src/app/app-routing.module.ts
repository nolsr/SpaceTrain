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
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(
      (m) => m.LoginModule
    ),
  },
  {
    path: 'rockets',
    loadChildren: () => import('./pages/rockets/rockets.module').then(
        (m) => m.RocketsModule
      ),
  },
  {
    path: 'booking/:tour',
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
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
