import { BusinessComponent } from './client/business/business.component';
import { HistoryComponent } from './client/history/history.component';
import { UserProfileComponent } from './client/user-profile/user-profile.component';
import { HomeComponent as HomeClientComponent } from './client/home/home.component';
import { HomeComponent as HomePilotComponent} from './pilot/home/home.component';
import { DetailBusinesComponent } from './client/detail-busines/detail-busines.component';
import { DetailDeliveryComponent } from './pilot/detail-delivery/detail-delivery.component';


export const ROUTES = [
    {
        path: 'home',
        component: HomeClientComponent
    },
    {
        path: 'business',
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
    {
        path: 'business',
        component: BusinessComponent
    },
    {
        path: 'detail-business/:id',
        component: DetailBusinesComponent
    },
    {
        path: 'detail-business',
        component: DetailBusinesComponent
    },
    {
        path: 'pilots',
        component: HomePilotComponent
    },
    {
        path: 'detail-delivery',
        component: DetailDeliveryComponent
    },
    { path: '**', redirectTo: 'home' },

]
