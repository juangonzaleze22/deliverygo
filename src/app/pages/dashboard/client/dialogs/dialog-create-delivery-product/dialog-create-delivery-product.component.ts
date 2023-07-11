import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable, Subscription, forkJoin, of } from 'rxjs';
import { catchError, map, finalize } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { ToastService } from 'src/app/services/toast.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from 'src/app/shared/services/map.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-dialog-create-delivery-product',
  templateUrl: './dialog-create-delivery-product.component.html',
  styleUrls: ['./dialog-create-delivery-product.component.scss']
})
export class DialogCreateDeliveryProductComponent implements OnInit {

  formDeliveryProducts: FormGroup;
  deliveryTextValidation;
  photoFile;
  loading: boolean = false;
  suscription: Subscription;

  dataUser: any;
  distance: any;

  productsSelected: any;
  map: mapboxgl.Map;



  constructor(
    private route: ActivatedRoute,
    public globalService: GlobalService,
    private toastService: ToastService,
    public dialogRef: MatDialogRef<string>,
    private authService: AuthService,
    private mapService: MapService,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.dataUser = JSON.parse(localStorage.getItem('user')!);
    this.suscription = this.productsService.getProducts().subscribe(products => {

      if (products.length == 0) {
        this.toastService.showError("Por favor seleccione algun producto para continuar con la creacion del delivery", '')
        this.closeModal();
      }

      this.productsSelected = products;

      const centerMap = this.productsSelected[0]?.addressCoordinates ?? null
      const coordinates = this.productsSelected.map((product) => product.addressCoordinates);
      this.map = this.mapService.initializeMap(centerMap);


      console.log("productsSelected", this.productsSelected)

      const { addressCoordinates } = this.dataUser
      coordinates.push(addressCoordinates)
      this.generateRoute(coordinates)
      this.generateMarkers(coordinates)
    });

  }

  initForm() {
    this.formDeliveryProducts = new FormGroup({
      title: new FormControl('', [
        Validators.required,
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      description: new FormControl('', [
        Validators.required,
      ])
    })

    this.deliveryTextValidation = {
      title: [
        { type: 'required', message: 'Este campo es requerido' },
      ],
      phone: [
        { type: 'required', message: 'Este campo es requerido' },
        { type: 'minlength', message: 'Mínimo 10 carácteres' },
      ],
      description: [
        { type: 'required', message: 'Este campo es requerido' },
      ]
    }
  }

  onSubmit() {

    const { _id } = this.authService.getUser();

    const request = {
      ...this.formDeliveryProducts.value,
      idUser: _id,
      distance: this.distance,
      products: this.productsSelected,
    }

    this.globalService.postService('delivery', request).pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe({
      next: (result: any) => {
        const { status } = result;
        if (status == 'success') {
          this.toastService.showSuccess("El delivery se ha creado correctamente", "Success");
          this.dialogRef.close({
            reload: true
          });
          this.formDeliveryProducts.reset();
          this.productsService.removeAllProducts();
          this.closeModal();
        }
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {

      }
    })

  }

  initMap(coordinates, centerMap) {
    this.map = this.mapService.initializeMap(centerMap);
    this.generateRoute(coordinates)
    this.generateMarkers(coordinates)
  }


  generateRoute(coordinates: any) {
    this.map.on('load', () => {
      if (coordinates.length > 1) {

        this.mapService.getMultipleRoutes(coordinates).subscribe((data) => {
          this.distance = data.distance;
          let totalDistance = 0;

          data.routes.forEach((route, index) => {
            const layerId = `route-${index}-${Math.random()}`;
            if (this.map.getLayer(layerId)) {
              this.map.removeLayer(layerId);
            }
            this.map.addLayer({
              id: layerId,
              type: 'line',
              source: {
                type: 'geojson',
                data: {
                  type: 'Feature',
                  properties: {},
                  geometry: route.geometry
                }
              },
              layout: {
                'line-join': 'round',
                'line-cap': 'round'
              },
              paint: {
                'line-color': '#888',
                'line-width': 8
              }
            });

            totalDistance += route.distance;
          });
          const kilometers = (totalDistance / 1000).toFixed(3);
          this.distance = `${kilometers}`;
        });
      }
    });
  }

  generateMarkers(coordinates: any) {
    coordinates.forEach((coordinate, index) => {

      const marker = new mapboxgl.Marker()
        .setLngLat(coordinate)
        .addTo(this.map);
      /* const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
        <div class="marker">
           <h3 clas>Marker ${index + 1}</h3><p>Additional information</p>
        <div>
        `);

      marker.setPopup(popup); */
    });
  }

  closeModal() {
    this.dialogRef.close();
  }

  /* ngOnDestroy() {
    this.suscription.unsubscribe();
  } */
}
