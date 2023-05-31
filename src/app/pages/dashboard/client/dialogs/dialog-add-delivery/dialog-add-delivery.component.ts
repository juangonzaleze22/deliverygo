import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable, of } from 'rxjs';
import { catchError, map, finalize } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { ToastService } from 'src/app/services/toast.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dialog-add-delivery',
  templateUrl: './dialog-add-delivery.component.html',
  styleUrls: ['./dialog-add-delivery.component.scss']
})
export class DialogAddDeliveryComponent implements OnInit {

  formDelivery: FormGroup;
  deliveryTextValidation;
  photoFile;
  loading:boolean = false;

  apiLoaded: Observable<boolean>;

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 9.04183,
    lng: -69.74206
  };
  zoom = 15;

  constructor(
    httpClient: HttpClient,
    private route: ActivatedRoute,
    public globalService: GlobalService,
    private toastService: ToastService,
    public dialogRef: MatDialogRef<string>,
    private authService: AuthService
    ) {
    httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      ).subscribe(resp => console.log(resp));
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formDelivery = new FormGroup({
      title: new FormControl('', [
        Validators.required,
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      description: new FormControl('', [
        Validators.required,
      ]),
      address: new FormControl('', [
        Validators.required,
      ]),
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
      ],
      address: [
        { type: 'required', message: 'Este campo es requerido' },
      ],
    }
  }


  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  onSubmit() {
    this.loading = true;

    const { _id } = this.authService.getUser();

    this.formDelivery.value.price = '1.5';
    this.formDelivery.value.idUser = _id;

    this.globalService.postService('delivery',  this.formDelivery.value).pipe(
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

  closeModal(){ 
    this.dialogRef.close();
  }


}
