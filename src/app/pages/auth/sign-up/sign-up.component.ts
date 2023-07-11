import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Observable, Subject, } from 'rxjs';
import { GlobalService } from "src/app/services/global.service";
import { finalize } from 'rxjs/operators'
import { ToastService } from "src/app/services/toast.service";
import { MapService } from "src/app/shared/services/map.service";
import * as mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';
import { Units, Feature, Polygon } from '@turf/helpers';
import CircleOptions from "@turf/circle"


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  formRegister: FormGroup;
  loginValidationMessages;
  passwordVisible: boolean = false;
  cpasswordVisible: boolean = false;
  password?: string;
  pattern: string = '^(?=.*[A-Z])(?=.*[a-z]).{8,12}$';
  patternNumber: string = '^[0-9]+$';
  imageUrl: any;
  photoFile;

  listAvenue: number[] = []
  listStreet: number[] = []
  listNumberHouse: number[] = []

  loading: boolean = false;
  map: mapboxgl.Map;
  marker: mapboxgl.Marker;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public globalService: GlobalService,
    private toastService: ToastService,
    private mapService: MapService,
  ) { }

  // On Signup link click
  onSignIn() {
    this.router.navigate(['sign-in'], { relativeTo: this.route.parent });
  }

  ngOnInit(): void {
    this.initForm();
    this.initializeMap();

    this.listAvenue = this.getNumberArray(4)
    this.listStreet = this.getNumberArray(8)
    this.listNumberHouse = this.getNumberArray(450)
    
  }

  initForm() {
    this.formRegister = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      lastname: new FormControl('', [
        Validators.required,
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
      ]),
      photo: new FormControl(null, [
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^([a-zA-Z0-9-+_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')
      ]),
      birthday: new FormControl('', [
        Validators.required, this.adultValidator
      ]),
      avenue: new FormControl('', [
        Validators.required
      ]),
      street: new FormControl('', [
        Validators.required
      ]),
      numberHouse: new FormControl('', [
        Validators.required,
      ]),
      /*  rol: new FormControl(this.globalService.ROLES[0], []), */
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
    });

    this.loginValidationMessages = {
      name: [
        { type: 'required', message: 'Este campo es requerido' },
      ],
      lastname: [
        { type: 'required', message: 'Este campo es requerido' },
      ],
      phone: [
        { type: 'required', message: 'Este campo es requerido' },
        { type: 'minlength', message: 'Mínimo 11 caracteres' },
      ],
      addres: [
        { type: 'required', message: 'Este campo es requerido' },
      ],
      birthday: [
        { type: 'required', message: 'Este campo es requerido' },
        {
          type: 'underage',
          message: 'Debe ser mayor de 18 años.'
        }
      ],
      avenue: [
        { type: 'required', message: 'Este campo es requerido' },
      ],
      street: [
        { type: 'required', message: 'Este campo es requerido' },
      ],
      numberHouse: [
        { type: 'required', message: 'Este campo es requerido' },
      ],
      photo: [
        {
          type: 'maxSize', message: 'La imagen es demasiado grande, máximo 8mb'
        },
        {
          type: 'invalidFileType', message: 'El formato de la imagen no es valido'
        }
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
    };

    this.formRegister.valueChanges.subscribe((response: any) => {

      console.log(response);

      const { password, cpassword } = response;
      if (password != cpassword) {
        const errors = this.formRegister.controls['cpassword'].errors || {};
        errors['notEqual'] = true;
        this.formRegister.controls['cpassword'].setErrors(errors);
      }
    })
  }

  onFileChange(files) {
    const maxSize = 20971520;
    const allowedFileTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    const reader = new FileReader();

    if (files.length > 0) {
      const file = files[0];
      if (file.size > maxSize) {
        this.formRegister.controls['photo'].setErrors({ maxSize: true });
        this.imageUrl = null;
        return;
      }
      if (!allowedFileTypes.includes(file.type)) {
        this.formRegister.controls['photo'].setErrors({ invalidFileType: true });
        this.imageUrl = null;
        return;
      }
      reader.readAsDataURL(file);
      reader.onload = (event: any) => {
        const base64 = event.target.result;
        this.imageUrl = base64
        console.log(this.formRegister.value)
      };
    }
  }

  clearImage() {
    this.formRegister.controls['photo'].setValue(null);
    this.imageUrl = null;
  }


  onSubmit() {
    this.loading = true;
    this.formRegister.value.photo = this.imageUrl;
    this.formRegister.value.rol = 'CLIENT';

    this.globalService.postServiceFile('auth/register', this.formRegister.value).pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe({
      next: (result: any) => {
        const { status } = result;

        if (status == 'EmailExist') {
          this.toastService.showWarning("Este email ya existe", "Warning")
        }

        if (status == 'success') {
          this.toastService.showSuccess("La cuenta ha sido creado correctamente", "Success");
          this.router.navigate(['auth']);
          this.formRegister.reset();
          this.imageUrl = null;
        }

      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {

      }
    })

  }

  initializeMap() {
    const coordinateTmk = [-69.73812498486977, 9.023139538592488]
    this.map = this.mapService.initializeMap(coordinateTmk);
    const circleRadius = 150; // Radius of the circle in meters
    const circleGeometry = turf.circle(coordinateTmk, circleRadius, {
      steps: 64,
      units: 'meters'
    });

    // Create a marker
    this.marker = new mapboxgl.Marker({
      draggable: false
    });

    this.map.on('load', () => {
      // Create a circle around the marker
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
          'fill-opacity': 0.3
        }
      });
    })


    this.map.on('click', (event) => {
      const { lng, lat } = event.lngLat;
      // Check if clicked point is outside the circle range
      const point = turf.point([lng, lat]);
      const isInside = turf.booleanPointInPolygon(point, circleGeometry);

      if (!isInside) {
        this.toastService.showError("Lo siento, Disponible solo para la Urbanización Guanaguanare", 'Error')
      } else {
        if (this.marker) {
          this.marker.remove();
        }
        const selectedPoint = [lng, lat];
        this.formRegister.patchValue({ addressCoordinates: selectedPoint });
        this.marker.setLngLat([lng, lat]).addTo(this.map);
      }
    });
  }

  getNumberArray(count: number) {
    const numbers = [];

    for (let i = 1; i <= count; i++) {
      numbers.push(i);
    }

    return numbers;
  }

  adultValidator(control: AbstractControl): ValidationErrors | null {
    const birthdate = new Date(control.value);
    const ageInMs = Date.now() - birthdate.getTime();
    const ageDate = new Date(ageInMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return age < 18 ? { 'underage': true } : null;
  }

}
