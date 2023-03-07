import { Component, OnInit } from '@angular/core';
import { TransporteService } from '../../servicios/transporte.service'

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit{
 
  constructor(private usuarioService: TransporteService){

  }

  ngOnInit(){
      this.usuarioService.getUsuarios().subscribe(
        res => console.log(res),
        err => console.log(err),
      )
  }
}
