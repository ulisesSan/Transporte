import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/models/usuario';
import { TransporteService } from '../../servicios/transporte.service'

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit{
 
  usuarios: usuario[] = [];

  constructor(private usuarioService: TransporteService){

  }

  ngOnInit(){
      this.usuarioService.getUsuarios().subscribe(
        res => {
          this.usuarios = res
          console.log(this.usuarios)
        },
        err => console.log(err),
      )
  }
}
