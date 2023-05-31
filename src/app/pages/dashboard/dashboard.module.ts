import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HighchartsChartModule } from 'highcharts-angular';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './client/home/home.component';
import { HistoryComponent } from './client/history/history.component';
import { BusinessComponent } from './client/business/business.component';

import {MatDialogModule} from '@angular/material/dialog';
import { DialogAddDeliveryComponent } from './client/dialogs/dialog-add-delivery/dialog-add-delivery.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations: [
    DashboardComponent,
     HomeComponent,
     HistoryComponent,
     BusinessComponent,
     DialogAddDeliveryComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PerfectScrollbarModule,
    ChartsModule,
    NgbModule,
    NgApexchartsModule,
    HighchartsChartModule,
    SharedModule,
    MatDialogModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),

  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
