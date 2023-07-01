import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  EMPTY_IMAGE: string = 'https://placehold.it/100x100'

  public ROLES: string[] = [
    'CLIENT',
    'DELIVERY',
    'RESTAURANT',
  ]

  public STATUS_ORDER: any[] = [
    'PENDIENTE',
    'EN PROCESO',
    'ENTREGADO',
    'CANCELADO'
  ]
  
  public LIST_CATEGORIES: string[] = [
    "Electrónica",
    "Ropa",
    "Hogar",
    "Deportes",
    "Juguetes",
    "Libros",
    "Música",
    "Automotriz",
    "Comida",
    "Zapatos"
  ]

  constructor(
    private httpClient: HttpClient
  ) { 

  }


  /* SERVICIOS */
  postService(service: string, data: any, tipo: number = 0) {
    let headers = new HttpHeaders();

    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    if (tipo == 1) {
      if (localStorage.getItem('token') == null) {
        localStorage.setItem('token', '');
      }

      headers = headers.set(
        'Authorization',
        'Bearer ' + localStorage.getItem('token')
      );
    }

    return this.httpClient.post(environment.API_URL + service, JSON.stringify(data), {
      headers: headers,
    });
  }

  putService(service: string, data: any, tipo: number = 0) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    if (tipo == 1) {
      if (localStorage.getItem('token') == null) {
        localStorage.setItem('token', '');
      }
      headers = headers.set(
        'Authorization',
        'Bearer ' + localStorage.getItem('token')
      );
    }
    return this.httpClient.put(environment.API_URL + service, JSON.stringify(data), {
      headers: headers,
    });
  }

  getService(service: string, tipo: number = 0) {
    let headers = new HttpHeaders();
    if (tipo == 1) {
      if (localStorage.getItem('token') == null) {
        localStorage.setItem('token', '');
      }
      headers = headers.set(
        'Authorization',
        'Bearer ' + localStorage.getItem('token')
      );
    }

    return this.httpClient.get(environment.API_URL + service, { headers: headers });
  }

  deleteService(service: string, tipo: number = 0) {
    let headers = new HttpHeaders();
    if (tipo == 1) {
      if (localStorage.getItem('token') == null) {
        localStorage.setItem('token', '');
      }
      headers = headers.set(
        'Authorization',
        'Bearer ' + localStorage.getItem('token')
      );
    }
    return this.httpClient.delete(environment.API_URL + service, {
      headers: headers,
    });
  }

  postServiceFile(service: string, data: any, tipo: number = 0) {
    let headers = new HttpHeaders();
    if (tipo == 1) {
      if (localStorage.getItem("token") == null) {
        localStorage.setItem("token", "");
      }
      headers = headers.set('Authorization', localStorage.getItem("token"));
    }
    return this.httpClient.post(environment.API_URL + service, data, { headers: headers });
  }


  urlImage(photo: string){
    const url = photo? environment.API_URL_IMAGE + photo : this.EMPTY_IMAGE;
    return url
  }


}
