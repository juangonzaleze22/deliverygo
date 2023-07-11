import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  @Input() item: any;
  @Input() actions: boolean = true;

  @Output() newItemEvent = new EventEmitter<string>();

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    const defaultImage = 'https://placehold.it/100x100';
    const url = this.item.photo ? environment.API_URL_IMAGE + this.item.photo : defaultImage
    this.item.photoURL = url;
  }

  removeProduct(product) {
    this.productsService.removeProduct(product)
  }

}
