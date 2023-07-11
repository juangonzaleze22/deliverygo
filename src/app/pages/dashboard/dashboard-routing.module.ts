import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxMaskModule, IConfig } from 'ngx-mask'

import { AuthGuard } from 'src/app/guards/auth.guard';

import { ROUTES } from './pages';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';

const maskConfig: Partial<IConfig> = {
  validation: false,
};
const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: DashboardComponent,
    children: ROUTES
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgxMaskModule.forRoot(maskConfig),

],
  exports: [RouterModule]
})
export class DashboardRoutingModule {

 }
