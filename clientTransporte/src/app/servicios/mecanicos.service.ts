import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { mecanicos } from '../models/mecanico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MecanicosService {

  API_URI = "https://localhost:7041"
  constructor(private http: HttpClient) { }

  getMecanicos(): Observable<any>{
    return this.http.get<any>(`${this.API_URI}/Mecanicos/ListarMecanicos`)

  }
}
