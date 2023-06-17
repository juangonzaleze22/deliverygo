import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

import { Observable, of } from 'rxjs';
import { catchError, map, finalize } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { ToastService } from 'src/app/services/toast.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dialog-create-business',
  templateUrl: './dialog-create-business.component.html',
  styleUrls: ['./dialog-create-business.component.scss']
})

export class DialogCreateBusinessComponent implements OnInit {

  formBusiness: FormGroup;
  deliveryTextValidation;
  photoFile;
  loading:boolean = false;
  imageUrl: any;
  pattern: string = '^(?=.*[A-Z])(?=.*[a-z]).{8,12}$';

  passwordVisible: boolean = false;
  cpasswordVisible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    public globalService: GlobalService,
    private toastService: ToastService,
    public dialogRef: MatDialogRef<string>,
    private authService: AuthService
    ) {
 
  }

  ngOnInit() {
    this.initForm();
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
        Validators.required,
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
        const base64 =  event.target.result;
        this.imageUrl = base64
        console.log(this.formBusiness.value)
      };
    }
  }


  onSubmit(type: string) {
    this.loading = true;
    this.formBusiness.value.photo =  this.imageUrl;

    this.formBusiness.value.rol = 'BUSINESS';

    console.log(this.formBusiness.value)

    this.globalService.postService('auth/register',  this.formBusiness.value).pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe({
      next: (result: any) => {
        const { status } = result;
        if (status == 'success') {
          this.toastService.showSuccess("El negocio se ha creado correctamente", "Success");
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

  closeModal(){ 
    this.dialogRef.close();
  }


}
