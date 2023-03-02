import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
