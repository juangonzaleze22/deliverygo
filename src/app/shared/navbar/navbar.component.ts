import { Component , OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';



@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit{

    route: string;
    default : any;
    userInfo: any;
    imgProfile: string;

    constructor(
        public sidebarservice: SidebarService, 
        location: Location, 
        router: Router,
        private authService: AuthService,

        ) {

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
        this.userInfo = this.authService.getUser()

        this.imgProfile = this.userInfo.photo ? environment.API_URL_IMAGE + this.userInfo.photo : 'https://placehold.it/100x100';
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

    logout(){ 
        this.authService.logOut();
    }
    
}
