import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HighchartsChartModule } from 'highcharts-angular';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { DefaultComponent } from './default/default.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { SalesComponent } from './sales/sales.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AlternateComponent } from './alternate/alternate.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { HumanResourcesComponent } from './human-resources/human-resources.component';


@NgModule({
  declarations: [
     DefaultComponent,
     ECommerceComponent,
     SalesComponent,
     AnalyticsComponent,
     AlternateComponent,
     DigitalMarketingComponent,
     HumanResourcesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PerfectScrollbarModule,
    ChartsModule,
    NgbModule,
    NgApexchartsModule,
    HighchartsChartModule
  ]
})
export class DashboardModule { }
