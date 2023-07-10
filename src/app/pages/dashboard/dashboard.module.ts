import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HighchartsChartModule } from 'highcharts-angular';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './client/home/home.component';
import { HomeComponent as HomePilotComponent } from './pilot/home/home.component';
import { HistoryComponent } from './client/history/history.component';
import { BusinessComponent } from './client/business/business.component';

import {MatDialogModule} from '@angular/material/dialog';
import { DialogAddDeliveryComponent } from './client/dialogs/dialog-add-delivery/dialog-add-delivery.component';
import { DialogDetailDeliveryComponent } from './client/dialogs/dialog-detail-delivery/dialog-detail-delivery.component';
import { DialogCreateBusinessComponent } from './client/dialogs/dialog-create-business/dialog-create-business.component';
import { ImagePipe } from 'src/app/pipes/image.pipe';
import { DetailBusinesComponent } from './client/detail-busines/detail-busines.component';
import { DialogCreateProductComponent } from './client/dialogs/dialog-create-product/dialog-create-product.component';
import { DialogCreatePilotComponent } from './pilot/dialogs/dialog-create-pilot/dialog-create-pilot.component';
import { DetailDeliveryComponent } from './pilot/detail-delivery/detail-delivery.component';
import { DialogCreateDeliveryProductComponent } from './client/dialogs/dialog-create-delivery-product/dialog-create-delivery-product.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations: [
    DashboardComponent,
     HomeComponent,
     HomePilotComponent,
     HistoryComponent,
     BusinessComponent,
     DialogAddDeliveryComponent,
     DialogDetailDeliveryComponent,
     DialogCreateBusinessComponent,
     DetailBusinesComponent,
     DialogCreateProductComponent,
     DialogCreatePilotComponent,
     DetailDeliveryComponent,
     DialogCreateDeliveryProductComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
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
