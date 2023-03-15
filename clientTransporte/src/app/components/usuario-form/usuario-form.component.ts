import { Component, HostBinding, Input } from '@angular/core';
import { TransporteService } from 'src/app/servicios/transporte.service';
import { usuario } from '../../models/usuario'

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent{
  [x: string]: any;

  usuarioData: usuario = {
    nombre: '',
    apellido_p: '',
    apellido_m: '',
    status_u: '',
    direccion: '',
    fecha_ingreso: '',
    puesto: ''
  };
pass: string = "";

  constructor(private usuarioService: TransporteService){

  }

  agregaUsuario(){
    console.log(this.usuarioData)
    console.log(this.pass)

    this.usuarioService.saveUsuario(this.usuarioData,this.pass)
    .subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

}
