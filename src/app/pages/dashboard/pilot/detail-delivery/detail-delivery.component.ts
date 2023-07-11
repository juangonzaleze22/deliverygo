import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';
import { ToastService } from 'src/app/services/toast.service';
import { catchError, map, finalize } from 'rxjs/operators';

import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { MapService } from 'src/app/shared/services/map.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from 'src/app/shared/dialog-confirm/dialog-confirm.component';
import { DialogDetailDeliveryComponent } from '../../client/dialogs/dialog-detail-delivery/dialog-detail-delivery.component';



@Component({
  selector: 'app-detail-delivery',
  templateUrl: './detail-delivery.component.html',
  styleUrls: ['./detail-delivery.component.scss']
})
export class DetailDeliveryComponent implements OnInit {

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
    private dialog: MatDialog
  ) { }

  async ngOnInit() {
    const { _id } = JSON.parse(localStorage.getItem('user'))!;
    await this.checkStatus(_id);
    this.getInfoDelivery(_id);
  }

  getInfoDelivery(idPilot: string) {
    this.loadingInfoDelivery = false;

    this.globalService.getService(`delivery/getDeliveryByPilot/${idPilot}`, 1).pipe(
      finalize(() => {
        this.loadingInfoDelivery = false;
      })
    ).subscribe({
      next: (response: any) => {
        const { status, data } = response;
        if (status == 'success') {

          this.deliveryInfo = data[0]

          if (this.deliveryInfo) {
            const { coordinates } = this.deliveryInfo;
            const products = this.deliveryInfo.products.map(item => item.addressCoordinates)

            setTimeout(() => {
              this.deliveryInfo ? this.initMap(coordinates.length == 0 ? products : coordinates) : null
            }, 500);
          }
        }

      },
      error: (err) => {
        console.log(err)
      },
      complete: () => { }
    })
  }


  changeStatus() {
    if (this.dataUser.status == 'BUSY') {
      this.toastService.showError('Actualmente tiene un servicio de delivery, culminelo para poder cambiar de status', 'Error')
      return
    }

    const { _id, status } = this.dataUser;

    const request = {
      id: _id,
      status
    }

    this.globalService.postService('users/changeStatusPilot', request).pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe({
      next: (response: any) => {
        const { status, data } = response;

        if (status == 'success') {
          this.authService.updateDataUser(data);
          this.dataUser = data;

        }

      },
      error: (err) => {
        console.log(err)
      },
      complete: () => { }
    })
  }


  async checkStatus(idUser: string) {
    const { data }: any = await this.globalService.getService(`users/getPilotById/${idUser}`, 1).toPromise();
    this.dataUser = data;
    this.authService.updateDataUser(data);
    return data;
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

  confirmToSuccess(): void {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '360px', // define el ancho del modal
      data: {
        title: 'Completar delivery',
        description: "¿Esta seguro que desea confirmar que completo este delivery?",
        confirmButton: 'Confirmar'
      } // define el mensaje que aparecerá en el modal
    });

    // Escuchar el resultado del modal
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.confirmDelivery()
        /*  this.deleteDelivery(id) */
      }
    });
  }

  confirmDelivery() {

    this.loadingInfoConfirm = true;

    const { _id: idPilot } = this.dataUser;
    const { _id: idDelivery } = this.deliveryInfo;

    const request = {
      idPilot,
      idDelivery
    }

    this.globalService.postService('delivery/confirmDelivery', request, 1).pipe(
      finalize(() => {
        this.loadingInfoConfirm = false;
      })
    ).subscribe({
      next: (response: any) => {
        const { status, data } = response;
        if (status == 'success') {
          const { _id } = JSON.parse(localStorage.getItem('user'))!;
          this.getInfoDelivery(_id);
          this.checkStatus(_id)
          this.toastService.showSuccess('Delivery realizado correctamente', '!Felicidades!')
        }
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => { }
    })
  }

  getNewDelivery() {
    this.globalService.getService('delivery/getAvailableDelivery', 1).pipe(
      finalize(() => {
        /*  this.loadingInfoConfirm = false; */
      })
    ).subscribe({
      next: (response: any) => {
        const { status, data } = response;

        if (status == 'success') {
          data.isPilot = true;
          this.openDetailDelivery(data)
        }
      },
      error: (err) => {
        const { status } = err.error
        if (status == 'error') {
          this.toastService.showError('No hay deliveries disponible, intente mas tarde', '');
        }
        console.log(err)
      },
      complete: () => { }
    })
  }

  acceptNewDelivery(idDelivery) {

    const request = {
      idDelivery,
      idUser: this.dataUser._id
    }

    this.globalService.postService('delivery/assignDeliveryToPilot', request, 1).pipe(
      finalize(() => {
        /*  this.loadingInfoConfirm = false; */
      })
    ).subscribe({
      next: (response: any) => {
        const { status, data } = response;
        if (status == 'success') {
          this.toastService.showSuccess('Se le ha asignado un nuevo delivery', '');
          this.getInfoDelivery(this.dataUser._id);
        }

      },
      error: (err) => {
        console.log(err)
      },
      complete: () => { }
    })
  }



  openDetailDelivery(data: any) {
    this.dialog.open(DialogDetailDeliveryComponent, {
      data: data,
      panelClass: 'dialog-add-delivery',
    }).componentInstance.changeEvent.subscribe((result) => {
      // Aquí puedes capturar el cambio emitido desde el diálogo
      if (result == 'next') {
        this.dialog.closeAll();
        this.getNewDelivery()
      }
      if (result == 'accept') {
        const { _id: idDelivery } = data;
        this.acceptNewDelivery(idDelivery);
      }
    });
  }

}
