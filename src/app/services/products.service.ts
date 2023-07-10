import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: any[] = [];
  public productsSubject = new BehaviorSubject<any[]>(this.products);

  constructor(
    private toastService: ToastService
  ) { }

  getProducts() {
    return this.productsSubject.asObservable();
  }

  addProduct(product: any) {
    /* if (this.products.includes(product)) {
      this.toastService.showError('Ya ha agregado este producto', 'Error');
      return
    } */
    this.products.push(product);
    this.productsSubject.next(this.products);
    this.toastService.showSuccess('Producto agregado con exito', '');
  }

  removeProduct(product: any) {
    const index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
      this.productsSubject.next(this.products);
      this.toastService.showSuccess('Producto eliminado con éxito', '');
    }
  }

  removeAllProducts() {
      this.products = []
      this.productsSubject.next(this.products);
  }

}
