import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { AlternateComponent } from './pages/dashboard/alternate/alternate.component';
import { AnalyticsComponent } from './pages/dashboard/analytics/analytics.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { DefaultComponent } from './pages/dashboard/default/default.component';
import { DigitalMarketingComponent } from './pages/dashboard/digital-marketing/digital-marketing.component';

/* import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";

import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes"; */

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard/default',

  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)

   /*  children: [
      {
        path: 'default',
        component: DefaultComponent
      },
      {
        path: 'analitycs',
        component: AnalyticsComponent
      },
      {
        path: 'alternate',
        component: AlternateComponent
      },
      {
        path: 'digital-marketing',
        component: DigitalMarketingComponent
      }

    ] */
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },

  /* { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES }, */
  { path: '**', redirectTo: 'dashboard/default' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
