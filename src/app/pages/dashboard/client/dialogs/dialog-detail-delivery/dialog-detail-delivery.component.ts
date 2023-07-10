import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';
import { ToastService } from 'src/app/services/toast.service';
import { catchError, map, finalize } from 'rxjs/operators';

import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { MapService } from 'src/app/shared/services/map.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogConfirmComponent } from 'src/app/shared/dialog-confirm/dialog-confirm.component';


@Component({
  selector: 'app-dialog-detail-delivery',
  templateUrl: './dialog-detail-delivery.component.html',
  styleUrls: ['./dialog-detail-delivery.component.scss']
})
export class DialogDetailDeliveryComponent implements OnInit {


  dataUser: any;
  deliveryInfo: any;
  loading: boolean = false;
  loadingInfoDelivery: boolean = false;
  loadingInfoConfirm: boolean = false;
  distance: any;
  map: mapboxgl.Map;


  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private globalService: GlobalService,
    private mapService: MapService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<DialogDetailDeliveryComponent>

  ) { }

  async ngOnInit() {
    this.deliveryInfo = this.data;

    console.log("this.deliveryInfo", this.deliveryInfo)

    const defaultImage = 'https://placehold.it/100x100';
    const url = this.deliveryInfo.pilot && this.deliveryInfo.pilot.photo ? environment.API_URL_IMAGE + this.deliveryInfo.pilot?.photo : defaultImage

    if (this.deliveryInfo.pilot) {
      this.deliveryInfo.pilot.photoURL = url;
    }


    const { coordinates } = this.deliveryInfo;

    const products = this.deliveryInfo.products.map(item => item.addressCoordinates)

    console.log("products", products)


    setTimeout(() => {
      this.deliveryInfo ? this.initMap(coordinates.length == 0 ? products : coordinates) : null
    }, 500);
  }


  initMap(coordinates: any = []) {

    console.log("coordinates", coordinates)

    const coordinateCenter = coordinates[0]

    this.map = this.mapService.initializeMap(coordinateCenter);
    // Add the route as a GeoJSON source
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
  
            // Add start and end markers
            new mapboxgl.Marker().setLngLat(route.geometry.coordinates[0]).addTo(this.map);
            new mapboxgl.Marker().setLngLat(route.geometry.coordinates[route.geometry.coordinates.length - 1]).addTo(this.map);
  
  
            /*  lastRouteEnd = end; */ // actualizar la variable lastRouteEnd con el final del tramo actual
  
            totalDistance += route.distance;
          });
          const kilometers = (totalDistance / 1000).toFixed(3);
          this.distance = `${kilometers}`;
        });
      }else{ 

        console.log("coordinates[0]", coordinates[0])
        new mapboxgl.Marker().setLngLat(coordinates[0]).addTo(this.map);
      }
    });
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
