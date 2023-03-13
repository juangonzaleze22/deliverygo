import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlternateComponent } from './alternate/alternate.component';
import { AnalyticsComponent } from './analytics/analytics.component';

import { DefaultComponent } from './default/default.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { HumanResourcesComponent } from './human-resources/human-resources.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        component: DefaultComponent,
        data: {
          title: 'Default'
        }
      },
      {
        path: 'eCommerce',
        component: ECommerceComponent,
        data: {
          title: 'eCommerce'
        }
      },
      {
        path: 'sales',
        component: SalesComponent,
        data: {
          title: 'Sales'
        }
      },
      {
        path: 'analytics',
        component: AnalyticsComponent,
        data: {
          title: 'Analytics'
        }
      },
      {
        path: 'alternate',
        component: AlternateComponent,
        data: {
          title: 'Alternate'
        }
      },
      {
        path: 'digital-marketing',
        component: DigitalMarketingComponent,
        data: {
          title: 'Digital Marketing'
        }
      },
      {
        path: 'human-resources',
        component: HumanResourcesComponent,
        data: {
          title: 'Human Resources'
        }
      },
     
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
