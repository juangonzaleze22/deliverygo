import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateProductComponent } from '../dialogs/dialog-create-product/dialog-create-product.component';
import { finalize, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-detail-busines',
  templateUrl: './detail-busines.component.html',
  styleUrls: ['./detail-busines.component.scss']
})
export class DetailBusinesComponent implements OnInit {

  loading: boolean = false;
  business;
  products;


  constructor(
    public globalService: GlobalService,
    private activateRoute: ActivatedRoute,
    private dialog: MatDialog,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {

    this.getBusinessById()
  }


  getBusinessById() {
    this.loading = true;
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.globalService.getService(`users/getBusinesById/${id}`, 1).pipe(
      switchMap((result: any) => {
        const { status, data } = result;
        if (status == 'success') {
          const defaultImage = 'https://placehold.it/100x100';
          const url = data.photo ? environment.API_URL_IMAGE + data.photo : defaultImage;
          data.photoURL = url;
          this.business = data;
          console.log("business", this.business);
          return this.globalService.getService(`products/getAllProductsByBusiness/${data._id}`, 1);
        }else {
          return of({ status: 'error', data: null }); // Devuelve un valor predeterminado en caso de que el primer llamado no tenga éxito
        }
      }),
      finalize(() => {
        this.loading = false;
      })
    ).subscribe({
      next: (result: any) => {
        const { status, data } = result;
        if (status == 'success') {
          this.products = data;
        }
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {

      }
    })
  }
  
  openDialogCreateProduct() {

    const {_id: idBusiness} = this.business;

    console.log(idBusiness)

    this.dialog.open(DialogCreateProductComponent, {
      data: {
        idBusiness: idBusiness
      }
    })
      .afterClosed().subscribe(resp => {
        console.log(resp)
        if (resp?.reload) {
           this.getBusinessById();
        }
      });
  }


}
