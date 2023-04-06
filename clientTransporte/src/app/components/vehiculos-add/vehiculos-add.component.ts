import { Component } from '@angular/core';
import { VehiculosService } from  'src/app/servicios/vehiculos.service'
import { vehiculo } from '../../models/vehiculo'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-vehiculos-add',
  templateUrl: './vehiculos-add.component.html',
  styleUrls: ['./vehiculos-add.component.css']
})
export class VehiculosAddComponent {

  vehiculoData: vehiculo = {
    id_vehiculo: '',
    marca: '',
    modelo: '',
    km_ingreso: '',
    num_serie: ''
  };

  constructor(private vehiculoService: VehiculosService, private rutas: Router, private activateRputing: ActivatedRoute){

  }

  ngOnInit(){

  }

  agregaUsuario(){
    this.vehiculoService.saveVehiculo(this.vehiculoData).subscribe(
      res => {
        console.log(res)
        this.rutas.navigate(['/vehiculos-get'])
      }
    )
  }

}
