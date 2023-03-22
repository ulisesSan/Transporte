import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Imports de los componenetes
import {UsuariosListComponent} from './components/usuarios-list/usuarios-list.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/usuarios-list',
    pathMatch: 'full'
  },
  {
    path:'usuarios-list',
    component:UsuariosListComponent
  },
  {
    path: 'usuario-form',
    component:UsuarioFormComponent
  },

  {
    path: 'usuario-form/edit/:id',
    component: UsuarioFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
