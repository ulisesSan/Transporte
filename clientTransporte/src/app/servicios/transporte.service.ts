import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { usuario } from '../models/usuario'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TransporteService {

  API_URI ='http://127.0.0.1:8080'

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any>{
    return this.http.get<any>(`${this.API_URI}/usuario`)
  }

  getUsuario(id:string){
    return this.http.get<any>(`${this.API_URI}/usuarios?usuario`)
  }

  saveUsuario(usuario: usuario){
    return this.http.post(`${this.API_URI}/usuarios`,usuario)
 }

  updateUsuario(usuario: usuario, pass: string,){
    return this.http.post(`${this.API_URI}/usuarios/actualizaUsuario?passwd=${pass}`,usuario)
  }
}
  