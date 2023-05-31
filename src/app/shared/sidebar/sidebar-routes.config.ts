import { RouteInfo } from './sidebar.metadata';


//Sidebar menu Routes and data
export const ROUTES_CLIENT: RouteInfo[] = [

    {
        path: 'home',
        title: 'Delivery',
        icon: 'bx bx-home-alt', 
        class: '', 
        badge: '',
        badgeClass: '', 
        isExternalLink: false,
        submenu: []
    },
    {
        path: 'restaurants',
        title: 'Restaurantes',
        icon: 'bx bx-restaurant', 
        class: '', 
        badge: '',
        badgeClass: '', 
        isExternalLink: false,
        submenu: []
    },
    {
        path: 'history',
        title: 'Historial',
        icon: 'bx bx-file', 
        class: '', 
        badge: '',
        badgeClass: '', 
        isExternalLink: false,
        submenu: []
    },
    {
        path: 'profile',
        title: 'Profile',
        icon: 'bx bx-user', 
        class: '', 
        badge: '',
        badgeClass: '', 
        isExternalLink: false,
        submenu: []
    },
];

export const ROUTES_DELIVERY: RouteInfo[] = [

    {
        path: 'home',
        title: 'Delivery',
        icon: 'bx bx-layer', 
        class: '', 
        badge: '',
        badgeClass: '', 
        isExternalLink: false,
        submenu: []
    },

];

export const ROUTES_RESTAURANT: RouteInfo[] = [

    {
        path: 'home',
        title: 'Delivery',
        icon: 'bx bx-layer', 
        class: '', 
        badge: '',
        badgeClass: '', 
        isExternalLink: false,
        submenu: []
    },
 
];