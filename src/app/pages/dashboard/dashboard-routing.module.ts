import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/guards/auth.guard';

import { PAGES_ADMIN, PAGES_CLIENT, PAGES_RESTAURANT, PAGES_PILOT } from './pages';
import { DashboardComponent } from './dashboard.component';

const ROL_USER = JSON.parse(localStorage.getItem('user'))!;

let pages: any[] = [];

if (ROL_USER?.rol == 'CLIENT') {
  pages = PAGES_CLIENT
}

if (ROL_USER?.rol == 'DELIVERY') {
  pages = PAGES_PILOT
}

if (ROL_USER?.rol == 'RESTAURANT') {
  pages = PAGES_RESTAURANT
}

if (ROL_USER?.rol == 'ADMIN') {
  pages = PAGES_ADMIN
}

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: DashboardComponent,
    children: pages
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
