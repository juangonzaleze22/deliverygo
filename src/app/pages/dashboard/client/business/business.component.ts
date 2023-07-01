import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddDeliveryComponent } from '../dialogs/dialog-add-delivery/dialog-add-delivery.component';
import { DialogCreateBusinessComponent } from '../dialogs/dialog-create-business/dialog-create-business.component';
import { AuthService } from 'src/app/services/auth.service';
import { finalize } from 'rxjs/operators';
import { GlobalService } from 'src/app/services/global.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  loading: boolean = false;
  business;
  dataUser: any;

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private globalService: GlobalService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.dataUser = localStorage.getItem('user')!;
    this.getAllBusiness();
  }

  openDialogAddBusiness(idBusiness:string = null) {
    this.dialog.open(DialogCreateBusinessComponent,{
      data: idBusiness
    })
      .afterClosed().subscribe(resp => {
        console.log(resp)
        if (resp?.reload) {
           this.getAllBusiness();
        }
      });
  }

  goToProducts(idBusiness){ 
    console.log(idBusiness);

    this.route.navigate([`/dashboard/detail-business/${idBusiness}`]);
  }


  getAllBusiness() {
    this.loading = true;

    this.globalService.getService(`users/getBusiness`, 1).pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe({
      next: (result: any) => {
        const { status, data } = result;
        if (status == 'success') {
          console.log("data", data)
          this.business = data.map(busines => { 
            const defaultImage = 'https://placehold.it/100x100';
            const url = busines.photo ? environment.API_URL_IMAGE + busines.photo : defaultImage
            busines.photoURL = url;
            return busines
          });
        }
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {

      }
    })
  }


  async deleteBusinessById(idBusiness: string) {
    try {
      const result = await this.globalService.deleteService(`users/deleteUser/${idBusiness}`).toPromise();
      const { status, data }: any = result;
      if (status == 'success') {
        this.getAllBusiness();
      } else {
        throw new Error('An error occurred while fetching the data');
      }
    } catch (error) {
      console.log(error);
      throw new Error('An error occurred while fetching the data');
    }
  }

}
