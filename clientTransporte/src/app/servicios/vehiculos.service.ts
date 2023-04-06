import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { vehiculo } from '../models/vehiculo'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  API_URI = 'https://localhost:7041'
  constructor(private http: HttpClient) { }

  getVehiculo(): Observable<any>{
    return this.http.get<any>(`${this.API_URI}/vehiculos/listavehiculos`)
  }

  saveVehiculo(vehiculo: vehiculo): Observable<any>{
    return this.http.post<any>(`${this.API_URI}/vehiculos/ingesavehiculo`,vehiculo)
  } 
}
