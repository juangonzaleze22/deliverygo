import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ColorSwitcherComponent } from './color-switcher/color-switcher.component';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';



@NgModule({
    exports: [
        CommonModule,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        ColorSwitcherComponent,
        NgbModule,
        DialogConfirmComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
        PerfectScrollbarModule
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        ColorSwitcherComponent,
        DialogConfirmComponent
    ],
    providers: [ ],
})
export class SharedModule { }
