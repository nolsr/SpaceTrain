import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
  },
  {
    path: 'mission',
    loadChildren: () =>
  },
  {
    path: 'rockets',
    loadChildren: () =>
  import('./pages/rockets/rockets.module').then(
    (m) => m.RocketsModule
  ),
  },
  {
    path: 'tours',
    loadChildren: () =>
  },
  { path: '', redirectTo: 'rockets', pathMatch: 'full' },
  { path: '**', redirectTo: 'rockets' }, // Fallback-Route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
