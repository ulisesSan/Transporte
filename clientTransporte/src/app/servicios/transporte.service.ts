import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { usuario } from '../models/usuario'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TransporteService {

  API_URI ='https://localhost:7041'

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any>{
    return this.http.get<any>(`${this.API_URI}/usuarios/listarusuarios`)
  }

  getUsuario(id:string){
    return this.http.get<any>(`${this.API_URI}usuarios/muestrausuario${id}`)
  }

  saveUsuario(usuario: usuario){
    return this.http.post(`${this.API_URI}usuarios/agregausuario`,usuario)
  }

  updateUsuario(id:string,usuario: usuario){
    return this.http.post(`${this.API_URI}usuarios/agregausuario${id}`,usuario)
  }
}
