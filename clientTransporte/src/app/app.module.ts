import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
//importando el servicio necesario para proveer la informacion
import {TransporteService} from './servicios/transporte.service'
import { FormsModule } from '@angular/forms';
import { VehiculosGetComponent } from './components/vehiculos-get/vehiculos-get.component';
import { VehiculosAddComponent } from './components/vehiculos-add/vehiculos-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsuarioFormComponent,
    UsuariosListComponent,
    VehiculosGetComponent,
    VehiculosAddComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TransporteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
