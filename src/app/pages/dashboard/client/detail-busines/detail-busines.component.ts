import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateProductComponent } from '../dialogs/dialog-create-product/dialog-create-product.component';
import { finalize, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-detail-busines',
  templateUrl: './detail-busines.component.html',
  styleUrls: ['./detail-busines.component.scss']
})
export class DetailBusinesComponent implements OnInit {

  @Input() businessButton: boolean

  loading: boolean = false;
  business;
  products;

  dataUser: any;


  constructor(
    public globalService: GlobalService,
    private activateRoute: ActivatedRoute,
    private dialog: MatDialog,
    private authService: AuthService,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.dataUser = JSON.parse(localStorage.getItem('user')!);
    console.log("myBusiness", this.businessButton)
    this.getBusinessById()
  }


  getBusinessById() {
    this.loading = true;

    const id = this.activateRoute.snapshot.paramMap.get('id') || this.dataUser._id;

    console.log("first business", id)
    this.globalService.getService(`users/getBusinesById/${id}`, 1).pipe(
      switchMap((result: any) => {
        const { status, data } = result;
        if (status == 'success') {
          const defaultImage = 'https://placehold.it/100x100';
          const url = data.business.photo ? environment.API_URL_IMAGE + data.business.photo : defaultImage;
          data.business.photoURL = url;
          this.business = data;
          console.log("business", this.business);
          return this.globalService.getService(`products/getAllProductsByBusiness/${data._id}`, 1);
        } else {
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

  /* openDialogAddBusiness(idBusiness:string = null) {
    this.dialog.open(DialogCreateBusinessComponent,{
      data: idBusiness
    })
      .afterClosed().subscribe(resp => {
        console.log(resp)
        if (resp?.reload) {
           this.getAllBusiness();
        }
      });
  } */

  openDialogCreateProduct(idProduct:string = null) {

    const { _id: idBusiness } = this.business;

    this.dialog.open(DialogCreateProductComponent, {
      data: {
        idBusiness,
        idProduct
      }
    })
      .afterClosed().subscribe(resp => {
        console.log(resp)
        if (resp?.reload) {
          this.getBusinessById();
        }
      });
  }

  addToCar(product: any) {
    const { addressCoordinates } = this.business;
    
    product.addressCoordinates = addressCoordinates

    this.productsService.addProduct(product);
  }

  

  openDialogeditProduct(product){ 
    console.log(product);

    
  }

  deleteProduct(product){ 
    console.log(product);
  }

}
