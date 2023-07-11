import {
  Component,
  OnInit,
  Inject,
  Output,
  EventEmitter
} from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { MapService } from 'src/app/shared/services/map.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-detail-delivery',
  templateUrl: './dialog-detail-delivery.component.html',
  styleUrls: ['./dialog-detail-delivery.component.scss']
})
export class DialogDetailDeliveryComponent implements OnInit {

  @Output() changeEvent = new EventEmitter();

  dataUser: any;
  deliveryInfo: any;
  loading: boolean = false;
  loadingInfoDelivery: boolean = false;
  loadingInfoConfirm: boolean = false;
  distance: any;
  map: mapboxgl.Map;


  constructor(
    private mapService: MapService,
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<DialogDetailDeliveryComponent>,

  ) { }

  async ngOnInit() {

    this.deliveryInfo = this.data;

    const { coordinates } = this.deliveryInfo;
    const products = this.deliveryInfo.products?.map(item => item.addressCoordinates)

    const defaultImage = 'https://placehold.it/100x100';
    const url = this.deliveryInfo.pilot && this.deliveryInfo.pilot?.photo ? environment.API_URL_IMAGE + this.deliveryInfo.pilot?.photo : defaultImage

    if (this.deliveryInfo.pilot) {
      this.deliveryInfo.pilot.photoURL = url;
    }

    setTimeout(() => {
      this.deliveryInfo ? this.initMap(coordinates.length == 0 ? products : coordinates) : null
    }, 500);
  }


  initMap(coordinates: any = []) {

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

            totalDistance += route.distance;
          });
          const kilometers = (totalDistance / 1000).toFixed(3);
          this.distance = `${kilometers}`;
        });
      } else {
        new mapboxgl.Marker().setLngLat(coordinates[0]).addTo(this.map);
      }
    });
  }

  emitChange(status): void {
    // Emitir el cambio utilizando el evento changeEvent
    this.changeEvent.emit(status);
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
