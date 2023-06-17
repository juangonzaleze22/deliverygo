import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/guards/auth.guard';

import { ROUTES } from './pages';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: DashboardComponent,
    children: ROUTES
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {

 }
