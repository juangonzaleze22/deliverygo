import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

import { Observable, of } from 'rxjs';
import { catchError, map, finalize } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { ToastService } from 'src/app/services/toast.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { MapService } from 'src/app/shared/services/map.service';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-dialog-create-business',
  templateUrl: './dialog-create-business.component.html',
  styleUrls: ['./dialog-create-business.component.scss']
})

export class DialogCreateBusinessComponent implements OnInit {

  formBusiness: FormGroup;
  deliveryTextValidation;
  photoFile;
  loading: boolean = false;
  imageUrl: any;
  pattern: string = '^(?=.*[A-Z])(?=.*[a-z]).{8,12}$';
  map: mapboxgl.Map;
  marker: mapboxgl.Marker;


  passwordVisible: boolean = false;
  cpasswordVisible: boolean = false;

  isUpdate: boolean = false;

  constructor(
    private route: ActivatedRoute,
    public globalService: GlobalService,
    private toastService: ToastService,
    public dialogRef: MatDialogRef<string>,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data,
    private mapService: MapService

  ) {

  }

  async ngOnInit() {
    this.isUpdate = this.data ? true : false;
    this.initializeMap()
    this.initForm();
    if (this.isUpdate) {
      const dataBusiness = await this.getInfoBusiness(this.data);
      console.log(dataBusiness)
      this.formBusiness.patchValue(dataBusiness);
      this.formBusiness.removeControl('password');
      this.formBusiness.removeControl('cpassword');
      this.imageUrl = dataBusiness?.photo ? dataBusiness?.photo : ''
    }
  }

  initForm() {

    this.formBusiness = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
      ]),
      photo: new FormControl('', [
      ]),
      phone: new FormControl('', [
        Validators.required,
      ]),
      addressBusiness: new FormControl('', [
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^([a-zA-Z0-9-+_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12),
        Validators.pattern(this.pattern),
      ]),
      cpassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12),
        Validators.pattern(this.pattern),
      ]),
      addressCoordinates: new FormControl('', [
        Validators.required,
      ]),
    })

    this.formBusiness.valueChanges.subscribe((response: any) => {

      const { password, cpassword } = response;
      if (password != cpassword) {
        const errors = this.formBusiness.controls['cpassword'].errors || {};
        errors['notEqual'] = true;
        this.formBusiness.controls['cpassword'].setErrors(errors);
      }
    })

    this.deliveryTextValidation = {
      name: [
        { type: 'required', message: 'Este campo es requerido' },
      ],
      description: [
      ],
      phone: [
        { type: 'required', message: 'Este campo es requerido' },
        { type: 'minlength', message: 'Mínimo 8 caracteres' },
      ],
      photo: [
        {
          type: 'invalidFileType', message: 'El formato de la imagen no es valido'
        },
        {
          type: 'maxSize', message: 'La imagen es demasiado grande, máximo 8mb'
        },

      ],
      addressBusiness: [
        { type: 'required', message: 'Este campo es requerido' },
      ],
      email: [
        { type: 'required', message: 'Este campo es requerido' },
        { type: 'pattern', message: 'No es un formato válido' }
      ],
      /*  rol: [
         { type: 'required', message: 'Este campo es requerido' },
       ], */
      password: [
        { type: 'required', message: 'Este campo es requerido' },
        { type: 'minlength', message: 'Mínimo 8 caracteres' },
        { type: 'maxlength', message: 'Máximo 12 caracteres' },
        {
          type: 'pattern',
          message:
            'La contraseña ingresada no cumple con los requerimientos mínimos. La contraseña debe tener entre 8 y 12 caracteres, al menos 1 letra mayúscula, 1 letra minúscula,  1 número ',
        },
      ],
      cpassword: [
        { type: 'required', message: 'Este campo es requerido' },
        { type: 'minlength', message: 'Mínimo 8 caracteres' },
        { type: 'maxlength', message: 'Máximo 12 caracteres' },
        { type: 'notEqual', message: 'Las contraseñas no coinciden' },
        {
          type: 'pattern',
          message:
            'La contraseña ingresada no cumple con los requerimientos mínimos. La contraseña debe tener entre 8 y 12 caracteres, al menos 1 letra mayúscula, 1 letra minúscula,  1 número ',
        },
      ],
      addressCoordinates: [
        { type: 'required', message: 'Este campo es requerido' },
      ],
    }
  }


  clearImage() {
    this.formBusiness.controls['photo'].setValue(null);
    this.imageUrl = null;
  }


  onFileChange(files) {
    const maxSize = 20971520;
    const allowedFileTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    const reader = new FileReader();

    if (files.length > 0) {
      const file = files[0];
      if (file.size > maxSize) {
        this.formBusiness.controls['photo'].setErrors({ maxSize: true });
        this.imageUrl = null;
        return;
      }
      if (!allowedFileTypes.includes(file.type)) {
        this.formBusiness.controls['photo'].setErrors({ invalidFileType: true });
        this.imageUrl = null;
        return;
      }
      reader.readAsDataURL(file);

      console.log(file)

      reader.onload = (event: any) => {
        const base64 = event.target.result;
        this.imageUrl = base64
        console.log(this.formBusiness.value)
      };
    }
  }


  onSubmit(type: string) {
    this.loading = true;
    this.formBusiness.value.photo = this.imageUrl;
    this.formBusiness.value.rol = 'BUSINESS';

    const url = this.isUpdate ? 'users/updateUser' : 'auth/register';
    const urlToSubmit = this.globalService.postService(url, this.formBusiness.value);

    urlToSubmit.pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe({
      next: (result: any) => {
        const { status } = result;

        const msg: string = this.isUpdate ? 'actualizado' : 'creado'

        if (status == 'EmailExist') {
          this.toastService.showWarning("Este email ya existe", "Warning")
        }

        if (status == 'success') {
          this.toastService.showSuccess(`El negocio se ha ${msg} correctamente`, "Success");
          this.dialogRef.close({
            reload: true
          });
          this.formBusiness.reset();
        }
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {

      }
    })

  }


  adultValidator(control: AbstractControl): ValidationErrors | null {
    const birthdate = new Date(control.value);
    const ageInMs = Date.now() - birthdate.getTime();
    const ageDate = new Date(ageInMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return age < 18 ? { 'underage': true } : null;
  }

  async getInfoBusiness(idBusiness: string): Promise<any> {
    try {
      const result = await this.globalService.getService(`users/getBusinesById/${idBusiness}`).toPromise();
      const { status, data }: any = result;
      if (status == 'success') {
        return data
        console.log("data", data);
        /* this.toastService.showSuccess(`El negocio se ha eliminado correctamente`, "Success"); */
      } else {
        throw new Error('An error occurred while fetching the data');
      }
    } catch (error) {
      console.log(error);
      throw new Error('An error occurred while fetching the data');
    }
  }

  closeModal() {
    this.dialogRef.close();
  }

  showURL(url: string) {
    const urlPath = url.startsWith("/uploads") ? environment.API_URL_IMAGE + url : url;
    return urlPath
  }

  initializeMap() {
    this.map = this.mapService.initializeMap()

    this.map.on('click', (event) => {
      const { lng, lat } = event.lngLat

      if (this.marker) {
        this.marker.remove();
      }

      const selectedPoint = [lng, lat];
      this.formBusiness.patchValue({ addressCoordinates: selectedPoint });
      this.marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(this.map);

    });

  }


}
