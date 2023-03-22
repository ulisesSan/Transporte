import { Component } from '@angular/core';
import { TransporteService } from 'src/app/servicios/transporte.service';
import { usuario } from '../../models/usuario'
import { ActivatedRoute, Router } from '@angular/router'

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

  constructor(private usuarioService: TransporteService, private rutas: Router,private activeRouting: ActivatedRoute){
    
  }

  ngOnInit(){
    var params = this.activeRouting.snapshot.params;
    console.log("This is a message from usuario-form and the id user is: ",params['id'])

    if(params['id']){
      this.usuarioService.getUsuario(params['id']).subscribe(
        res => {console.log(res.result.usuario)
          this.usuarioData = res
          console.log(this.usuarioData)
        },
        err => console.error(err)
      )
    }
  }

  agregaUsuario(){
    console.log(this.usuarioData)
    console.log(this.pass)

    this.usuarioService.saveUsuario(this.usuarioData,this.pass)
    .subscribe(
      res => {
        console.log(res)
        this.rutas.navigate(['/'])
      },
      err => console.error(err)
    )
  }

}
