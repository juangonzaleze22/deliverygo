import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map: mapboxgl.Map;

  constructor(
    private http: HttpClient
  ) { }

  initializeMap(center: any = null) {
    (mapboxgl.accessToken as any) = environment.API_KEY_MAP;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center || [-69.74206, 9.04183],
      zoom: 14,
    });

    return this.map;
  }

  getMultipleRoutes(coordinates: number[][]): Observable<any> {
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${coordinates.join(';')}?geometries=geojson&access_token=${environment.API_KEY_MAP}`;
    return this.http.get<any>(url);
  }

  public reverseGeocode(coordinates: number[]): Observable<any> {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates[0]},${coordinates[1]}.json?access_token=${environment.API_KEY_MAP}`;
    return this.http.get(url);
  }

}
