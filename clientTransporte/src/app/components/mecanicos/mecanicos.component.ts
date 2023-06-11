import { Component } from '@angular/core';
import { MecanicosService } from 'src/app/servicios/mecanicos.service';

@Component({
  selector: 'app-mecanicos',
  templateUrl: './mecanicos.component.html',
  styleUrls: ['./mecanicos.component.css']
})
export class MecanicosComponent {

  mecanicos: any = [];

  constructor (private mecanicoService:MecanicosService){}

  ngOnInit(){
    this.listMecanico()
  }

  listMecanico(){
    this.mecanicoService.getMecanicos().subscribe(
      res =>{
        
        for(let i = 0; i <= res.mecanicos.length-1; i ++){
          if(!res.mecanicos[i].status_m){
            res.mecanicos[i].status_m = "Activo"
            console.log(res.mecanicos[i].status_m)
          }
        }
        this.mecanicos = res
        console.log(this.mecanicos)
      },
      err=> console.error(err)
    )
  }
}
