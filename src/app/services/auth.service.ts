import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    // aquí debes implementar la lógica para verificar si el usuario está autenticado o no
    // por ejemplo, puedes verificar si existe un token de autenticación en el almacenamiento local
    return true;
  }
}
