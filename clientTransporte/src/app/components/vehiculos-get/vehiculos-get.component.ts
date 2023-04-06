import { Component } from '@angular/core';
import { vehiculo }  from '../../models/vehiculo'
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-vehiculos-get',
  templateUrl: './vehiculos-get.component.html',
  styleUrls: ['./vehiculos-get.component.css']
})
export class VehiculosGetComponent {

  vehiculosData: any = []

  constructor(private vehiculoService: VehiculosService){

  }

  ngOnInit(){
    this.vehiculoList();
  }

  vehiculoList(){
    this.vehiculoService.getVehiculo().subscribe(
      res => {
        this.vehiculosData = res
        console.log(this.vehiculosData)
      },
      err => console.error(err)
    ) 
  }

}
