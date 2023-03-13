import { Component , OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';



@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit{

    route: string;
    default : any;

    constructor(
        public sidebarservice: SidebarService, 
        location: Location, 
        router: Router,) {

        router.events.subscribe((val) => {
            if(location.path() == '/dashboard/default'){
                $('body').removeAttr('class')
                this.default =true; 
                $('body').addClass('bg-theme bg-theme1')
            } else {
                this.default =false;
                if(location.path() == '/dashboard/eCommerce'){
                    $('body').removeAttr('class')
                    $('body').addClass('bg-theme bg-theme2')
                    } else {
                        if(location.path() == '/dashboard/sales'){
                            $('body').removeAttr('class')
                            $('body').addClass('bg-theme bg-theme6')
                        } else{
                            if(location.path() == '/dashboard/analytics'){
                                $('body').removeAttr('class')
                                $('body').addClass('bg-theme bg-theme9')
                            } else {
                                if(location.path() == '/dashboard/alternate'){
                                    $('body').removeAttr('class')
                                    $('body').addClass('bg-theme bg-theme3')

                                    }   else {
                                        if(location.path() == '/dashboard/digital-marketing'){
                                            $('body').removeAttr('class')
                                            $('body').addClass('bg-theme bg-theme4')

                                            } else {
                                                    if(location.path() == '/dashboard/human-resources'){
                                                        $('body').removeAttr('class')
                                                        $('body').addClass('bg-theme bg-theme7')

                                                    }

                                                }

                                    }
                        }
                    }
                }
            }
          });

     }
        
    toggleSidebar() {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    }
    
    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }

    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }

    ngOnInit() {

        /* Search Bar */

        $(".mobile-search-icon").on("click", function() {
			
            $(".search-bar").addClass("full-search-bar")
           
          }), 
      
        $(".search-close").on("click", function() {
           $(".search-bar").removeClass("full-search-bar")
        }), 
 
        // header color change on scrol
        $(document).ready(function () {
			$(window).on("scroll", function () {
				if ($(this).scrollTop() > 60) {
					$('.topbar').addClass('bg-dark');
				} else {
					$('.topbar').removeClass('bg-dark');
				}
			});
			
		});

    }
    
}
