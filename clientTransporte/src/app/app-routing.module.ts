import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Imports de los componenetes
import {UsuariosListComponent} from './components/usuarios-list/usuarios-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/usuarios-list',
    pathMatch: 'full'
  },
  {
    path:'usuarios-list',
    component:UsuariosListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
