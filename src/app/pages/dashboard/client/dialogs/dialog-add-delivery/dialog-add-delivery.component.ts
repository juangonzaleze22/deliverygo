import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { finalize } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { ToastService } from 'src/app/services/toast.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from 'src/app/shared/services/map.service';
import * as turf from '@turf/turf';


@Component({
  selector: 'app-dialog-add-delivery',
  templateUrl: './dialog-add-delivery.component.html',
  styleUrls: ['./dialog-add-delivery.component.scss']
})
export class DialogAddDeliveryComponent implements OnInit {

  formDelivery: FormGroup;
  deliveryTextValidation;
  photoFile;
  loading: boolean = false;

  map
    ;
  coordinates: number[][] = [];
  distance: string;
  markers = []

  address = [];
  startAddress = [];
  endAddress = [];

  centerMap = [-69.74206, 9.04183]

  constructor(
    private route: ActivatedRoute,
    public globalService: GlobalService,
    private toastService: ToastService,
    public dialogRef: MatDialogRef<string>,
    private authService: AuthService,
    private mapService: MapService
  ) {

  }

  ngOnInit() {
    this.initForm();

    this.initMap()
  }

  initForm() {
    this.formDelivery = new FormGroup({
      title: new FormControl('', [
        Validators.required,
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
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
        { type: 'minlength', message: 'Mínimo 11 carácteres' },
      ],
      description: [
        { type: 'required', message: 'Este campo es requerido' },
      ]
    }
  }

  onSubmit() {

    const { _id } = this.authService.getUser();

    console.log("asdasd", _id)

    const request = {
      ...this.formDelivery.value,
      coordinates: this.coordinates,
      idUser: _id,
      distance: this.distance
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
          this.formDelivery.reset();
        }
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {

      }
    })

  }

  initMap(){
    this.map = this.mapService.initializeMap();
    this.map.setZoom(12);

    const mapCenter = this.map.getCenter();
    const center = [mapCenter.lng, mapCenter.lat];
    const circleRadius = 4; // Radio del círculo en kilómetros
    const circleGeometry = turf.circle(center, circleRadius, {
      steps: 64,
      units: 'kilometers'
    });

    this.map.on('load', () => {

      this.map.addSource('circle', {
        type: 'geojson',
        data: circleGeometry
      });

      this.map.addLayer({
        id: 'circle-layer',
        type: 'fill',
        source: 'circle',
        layout: {},
        paint: {
          'fill-color': 'red',
          'fill-opacity': 0.16
        }
      });

    })

    this.map.on('click', (e) => {
      const { lng, lat } = e.lngLat;
      const distance = this.globalService.calculateDistance(center[0], center[1], lng, lat);

      if (distance >= circleRadius) {
        this.toastService.showError("Lo siento, la dirección que selecciono pasa los 8km", "Error");

      } else {
        const lngLat: any = e.lngLat.toArray();
        this.coordinates.push(lngLat);

        if (this.coordinates.length >= 2) {

          this.mapService.getMultipleRoutes(this.coordinates).subscribe((data) => {
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

              new mapboxgl.Marker().setLngLat(route.geometry.coordinates[route.geometry.coordinates.length - 1]).addTo(this.map);

              totalDistance += route.distance;
            });
            const kilometers = (totalDistance / 1000).toFixed(3);
            this.distance = `${kilometers}`;
          });
        } else {
          // Add start and end markers
          new mapboxgl.Marker()
            .setLngLat(lngLat) // Coordenadas del marcador
            .addTo(this.map);
        }
      }
    });
  }



  closeModal() {
    this.dialogRef.close();
  }

}
