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
        path: 'business',
        title: 'Negocios',
        icon: 'bx bx-store', 
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
    /* {
        path: 'reports',
        title: 'Reportes',
        icon: 'bx bxs-file-pdf', 
        class: '', 
        badge: '',
        badgeClass: '', 
        isExternalLink: false,
        submenu: []
    }, */
    {
        path: 'my-business',
        title: 'My negocio',
        icon: 'bx bxs-business', 
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

export const ROUTES_PILOT: RouteInfo[] = [

    {
        path: 'detail-delivery',
        title: 'Delivery',
        icon: 'bx bx-trip', 
        class: '', 
        badge: '',
        badgeClass: '', 
        isExternalLink: false,
        submenu: []
    },
    /* {
        path: 'reports',
        title: 'Reportes',
        icon: 'bx bxs-file-pdf', 
        class: '', 
        badge: '',
        badgeClass: '', 
        isExternalLink: false,
        submenu: []
    }, */
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

export const ROUTES_BUSINESS: RouteInfo[] = [

    {
        path: 'detail-business',
        title: 'Home',
        icon: 'bx bx-layer', 
        class: '', 
        badge: '',
        badgeClass: '', 
        isExternalLink: false,
        submenu: []
    },
    /* {
        path: 'reports',
        title: 'Reportes',
        icon: 'bx bxs-file-pdf', 
        class: '', 
        badge: '',
        badgeClass: '', 
        isExternalLink: false,
        submenu: []
    }, */
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


export const ROUTES_ADMIN   : RouteInfo[] = [

    {
        path: 'business',
        title: 'Negocios',
        icon: 'bx bx-restaurant', 
        class: '', 
        badge: '',
        badgeClass: '', 
        isExternalLink: false,
        submenu: []
    },
    {
        path: 'pilots',
        title: 'Pilots',
        icon: 'bx bx-layer', 
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