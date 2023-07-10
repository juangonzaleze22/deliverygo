import { Component, OnInit, Input, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

import { Observable, of } from 'rxjs';
import { catchError, map, finalize } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { ToastService } from 'src/app/services/toast.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dialog-create-product',
  templateUrl: './dialog-create-product.component.html',
  styleUrls: ['./dialog-create-product.component.scss']
})
export class DialogCreateProductComponent implements OnInit {

  formProduct: FormGroup;
  productTextValidation;
  photoFile;
  loading: boolean = false;
  imageUrl: any;

  LIST_CATEGORIES: string[];

  passwordVisible: boolean = false;
  cpasswordVisible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    public globalService: GlobalService,
    private toastService: ToastService,
    public dialogRef: MatDialogRef<string>,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {

  }

  ngOnInit() {
    this.initForm();
    this.LIST_CATEGORIES = this.globalService.LIST_CATEGORIES;
  }

  initForm() {
    this.formProduct = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
      ]),
      price: new FormControl('', [
        Validators.required,
      ]),
      category: new FormControl(this.LIST_CATEGORIES[0], [
        Validators.required,
      ]),
      photo: new FormControl('', [
      ]),
    })

    this.formProduct.valueChanges.subscribe(data => {
      console.log(data)
    })


    this.formProduct.valueChanges.subscribe((response: any) => {

      const { password, cpassword } = response;
      if (password != cpassword) {
        const errors = this.formProduct.controls['cpassword'].errors || {};
        errors['notEqual'] = true;
        this.formProduct.controls['cpassword'].setErrors(errors);
      }
    })

    this.productTextValidation = {
      name: [
        { type: 'required', message: 'Este campo es requerido' },
      ],
      price: [
        { type: 'required', message: 'Este campo es requerido' },
      ],
      category: [
        { type: 'required', message: 'Este campo es requerido' },
      ],
      photo: [
        {
          type: 'invalidFileType', message: 'El formato de la imagen no es valido'
        },
        {
          type: 'maxSize', message: 'La imagen es demasiado grande, máximo 8mb'
        },

      ],
    }
  }


  clearImage() {
    this.formProduct.controls['photo'].setValue(null);
    this.imageUrl = null;
  }


  onFileChange(files) {
    const maxSize = 20971520;
    const allowedFileTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
    const reader = new FileReader();

    if (files.length > 0) {
      const file = files[0];
      if (file.size > maxSize) {
        this.formProduct.controls['photo'].setErrors({ maxSize: true });
        this.imageUrl = null;
        return;
      }
      if (!allowedFileTypes.includes(file.type)) {
        this.formProduct.controls['photo'].setErrors({ invalidFileType: true });
        this.imageUrl = null;
        return;
      }

      this.formProduct.controls['photo'].setErrors(null)
      reader.readAsDataURL(file);

      reader.onload = (event: any) => {
        const base64 = event.target.result;
        this.imageUrl = base64
        console.log(this.formProduct.value)
      };
    }
  }


  onSubmit() {
    this.loading = true;

    const { idBusiness } = this.data

    this.formProduct.value.photo = this.imageUrl;
    this.formProduct.value.idBusiness = idBusiness

    console.log(this.formProduct.value)

    this.globalService.postService('products/createProduct', this.formProduct.value).pipe(
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
          this.formProduct.reset();
        }
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {

      }
    })

  }



  closeModal() {
    this.dialogRef.close();
  }


}
