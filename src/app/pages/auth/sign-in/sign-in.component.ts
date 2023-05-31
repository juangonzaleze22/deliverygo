import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { GlobalService } from "src/app/services/global.service";
import { finalize } from 'rxjs/operators'
import { ToastService } from "src/app/services/toast.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  formLogin: FormGroup;
  loginValidationMessages;
  passwordVisible: boolean = false;
  password?: string;

  loading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private globalService: GlobalService,
    private toastService: ToastService,
    private authService: AuthService

  ) { }

  // On Forgotpassword link click
  onForgotpassword() {
    this.router.navigate(['forgot-password'], { relativeTo: this.route.parent });
  }

  // On Signup link click
  onSignup() {
    this.router.navigate(['sign-up'], { relativeTo: this.route.parent });
  }


  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^([a-zA-Z0-9-+_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(12)
      ])
    });
    this.loginValidationMessages = {
      email: [
        { type: 'required', message: 'Este campo es requerido' },
        { type: 'pattern', message: 'No es un formato válido' },
        { type: 'EmailNotFound', message: 'Este email no existe' }
      ],
      password: [
        { type: 'required', message: 'Este campo es requerido' },
        { type: 'minlength', message: 'Mínimo 5 carácteres' },
        { type: 'maxlength', message: 'Máximo 12 carácteres' },
        { type: 'PasswordNotMatch', message: 'La contraseña no es correcta' }

      ]
    };
  }

  onSubmit() {
    this.loading = true;

    this.globalService.postServiceFile('auth/login', this.formLogin.value).pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe({
      next: (result: any) => {

        const { status, data, token } = result;

        if (status == 'EmailNotFound') {
          this.formLogin.controls['email'].setErrors({ EmailNotFound: true });
        }
        if (status == 'PasswordNotMatch') {
          this.formLogin.controls['password'].setErrors({ PasswordNotMatch: true });
        }

        if (status == 'success') {
          const { name } = data;
          this.toastService.showSuccess('Success!', `Bienvenido ${name}`);
          this.authService.logIn(token, data);
        }

      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {

      }
    })

  }
}
