import { Component, OnInit } from '@angular/core';
import { TransporteService } from '../../servicios/transporte.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit{
 
  usuarios: any = [];

  constructor(private usuarioService: TransporteService){

  }

  ngOnInit(){
      this.usuarioslist()
  }

  usuarioslist(){
    this.usuarioService.getUsuarios().subscribe(
      res => {
        this.usuarios = res
        console.log(this.usuarios)
      },
      err => console.log(err),
    )
  }

  editUsr(id: string){
    console.log(id)
    this.usuarioService.getUsuario(id).subscribe(
      res =>{
        console.log(res)
      },
      err => console.error(err)
    )
  }
}
