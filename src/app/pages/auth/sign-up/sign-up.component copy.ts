import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Observable, Subject, } from 'rxjs';
import { GlobalService } from "src/app/services/global.service";
import { finalize } from 'rxjs/operators'
import { ToastService } from "src/app/services/toast.service";


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

  loading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public globalService: GlobalService,
    private toastService: ToastService
  ) { }

  // On Signup link click
  onSignIn() {
    this.router.navigate(['sign-in'], { relativeTo: this.route.parent });
  }

  ngOnInit(): void {
    this.initForm()
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
      avenue : new FormControl('', [
        Validators.required
      ]),
      street: new FormControl('', [
        Validators.required
      ]),
      numberHouse: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(3),
        Validators.pattern(this.patternNumber)
      ]),
      addres: new FormControl('', [
      ]),/* 
      rol: new FormControl(this.globalService.ROLES[0], []), */
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
    });

    this.loginValidationMessages = {
      name: [
        { type: 'required', message: 'Este campo es requerido' },
      ],
      lastname: [
        { type: 'required', message: 'Este campo es requerido' },
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
        { type: 'minlength', message: 'Mínimo 1 caracteres' },
        { type: 'maxlength', message: 'Máximo 3 caracteres' },
        {
          type: 'pattern',
          message:
            'Debe agregar un numero',
        },
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
    };

    this.formRegister.valueChanges.subscribe((response: any) => {

      console.log(this.formRegister)

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

      console.log(file)

      reader.onload = (event: any) => {
        const base64 =  event.target.result;
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
    this.formRegister.value.photo =  this.imageUrl;

    this.formRegister.controls['rol'].setValue('CLIENT');
    
    this.globalService.postServiceFile('auth/register',  this.formRegister.value).pipe(
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


  adultValidator(control: AbstractControl): ValidationErrors | null {
    const birthdate = new Date(control.value);
    const ageInMs = Date.now() - birthdate.getTime();
    const ageDate = new Date(ageInMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return age < 18 ? { 'underage': true } : null;
  }

}
