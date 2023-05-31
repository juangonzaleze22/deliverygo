import { BusinessComponent } from './client/business/business.component';
import { HistoryComponent } from './client/history/history.component';
import { UserProfileComponent } from './client/user-profile/user-profile.component';
import { HomeComponent as HomeClientComponent } from './client/home/home.component';
import { HomeComponent } from './pilot/home/home.component';


export const PAGES_CLIENT = [
    {
        path: 'home',
        component: HomeClientComponent
    },
    {
        path: 'restaurants',
        component: BusinessComponent
    },
    {
        path: 'history',
        component: HistoryComponent
    },
    {
        path: 'profile',
        component: UserProfileComponent
    },
    { path: '**', redirectTo: 'home' }
]

export const PAGES_RESTAURANT = [
   /*  {
        path: 'asd',
        component: DefaultComponent,
        data: {
            title: 'Default'
        }
    } */
]

export const PAGES_PILOT = [
    {
        path: 'home',
        component: HomeComponent,
    },
    { path: '**', redirectTo: 'home' }
]

export const PAGES_ADMIN = [
    /* {
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
    }, */
]