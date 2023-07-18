import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { DialogCreateBusinessComponent } from '../dialogs/dialog-create-business/dialog-create-business.component';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-my-business',
  templateUrl: './my-business.component.html',
  styleUrls: ['./my-business.component.scss']
})
export class MyBusinessComponent implements OnInit {

  infoBusiness: any;

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.infoBusiness = this.authService.getUser();

    console.log("infoBusiness", this.infoBusiness)
  }

  /* createProfileBusiness(){ 
    console.log("click")
  } */

  createProfileBusiness() {

    const { _id: idClient } = this.authService.getUser();


    this.dialog.open(DialogCreateBusinessComponent,{
      data: {
         idClient,
      }
    })
      .afterClosed().subscribe(resp => {
        console.log(resp)
        if (resp?.reload) {
          this.infoBusiness = this.authService.getUser()
         /*   this.getAllBusiness(); */
        }
      });
  }
}
