import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription, } from 'rxjs';
import { DialogAddDeliveryComponent } from 'src/app/pages/dashboard/client/dialogs/dialog-add-delivery/dialog-add-delivery.component';
import { DialogCreateDeliveryProductComponent } from 'src/app/pages/dashboard/client/dialogs/dialog-create-delivery-product/dialog-create-delivery-product.component';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  showList: boolean = false;
  products = new Observable

  supscription: Subscription

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  async createDeliveredProduct() {


  }

  addDeliveryWithProduct() {
    this.dialog.open(DialogCreateDeliveryProductComponent, {
      panelClass: 'dialog-add-delivery'
    })
      .afterClosed().subscribe(resp => {
        console.log(resp)
        if (resp?.reload) {
          /*   this.getAllDeliveries(); */
        }
      });
  }


  ngOnDestroy(): void {
  /*   this.supscription.unsubscribe(); */
  }

}
