import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SidebarService } from 'src/app/shared/sidebar/sidebar.service';

@Component({
  selector: 'dashboard-root',
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent {
  
  constructor(
      public sidebarservice: SidebarService,
      private router: Router
    ) { }

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
this.router.events.subscribe((evt) => {
if (!(evt instanceof NavigationEnd)) {
    return;
}
window.scrollTo(0, 0)
});
}
}
