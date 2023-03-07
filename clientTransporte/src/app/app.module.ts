import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
//importando el servicio necesario para proveer la informacion
import {TransporteService} from './servicios/transporte.service'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsuarioFormComponent,
    UsuariosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TransporteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
