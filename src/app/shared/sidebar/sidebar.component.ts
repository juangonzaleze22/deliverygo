import { Component, OnInit } from '@angular/core';
import { ROUTES_CLIENT, ROUTES_PILOT, ROUTES_BUSINESS, ROUTES_ADMIN } from './sidebar-routes.config';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { SidebarService } from "./sidebar.service";

import * as $ from 'jquery';
import { AuthService } from 'src/app/services/auth.service';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    
    public menuItems: any[];

  
    constructor( 
        public sidebarservice: SidebarService,
        private router: Router,
        private authService: AuthService
        ) {

        router.events.subscribe( (event: Event) => {

            if (event instanceof NavigationStart) {
                // Show loading indicator
            }

            if (event instanceof NavigationEnd && $(window).width() < 1025 && ( document.readyState == 'complete' || false ) ) {

                this.toggleSidebar();
                // Hide loading indicator
               
            }

            if (event instanceof NavigationError) {
                // Hide loading indicator

                // Present error to user
                console.log(event.error);
            }
        });

    }

        
    toggleSidebar() {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
        
        if ($(".wrapper").hasClass("nav-collapsed")) {
            // unpin sidebar when hovered
            $(".wrapper").removeClass("nav-collapsed");
            $(".sidebar-wrapper").unbind( "hover");
        } else {
            $(".wrapper").addClass("nav-collapsed");
            $(".sidebar-wrapper").hover(
                function () {
                    $(".wrapper").addClass("sidebar-hovered");
                },
                function () {
                    $(".wrapper").removeClass("sidebar-hovered");
                }
            )
      
        }

    }

    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }

    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }
    

    ngOnInit() {

        const {rol} = this.authService.getUser();


        if ( rol == 'CLIENT') { 
            this.menuItems = ROUTES_CLIENT.filter(menuItem => menuItem);
        }

        if ( rol == 'PILOT') { 
            this.menuItems = ROUTES_PILOT.filter(menuItem => menuItem);
        }

        if ( rol == 'BUSINESS') { 
            this.menuItems = ROUTES_BUSINESS.filter(menuItem => menuItem);
        }

        if ( rol == 'ADMIN') { 
            this.menuItems = ROUTES_ADMIN.filter(menuItem => menuItem);
        }


        console.log( "asdasd", this.menuItems)


        /* if ( rol == 'ADMIN') { 
            this.menuItems = .filter(menuItem => menuItem);
        } */

        $.getScript('./assets/js/app-sidebar.js');

    }

}
