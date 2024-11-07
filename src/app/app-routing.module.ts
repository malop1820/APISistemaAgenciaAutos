import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Componentes/listar/listar.component';
import { GuardarComponent } from './Componentes/guardar/guardar.component';
import { EditarComponent } from './Componentes/editar/editar.component';
import { EliminarComponent } from './Componentes/eliminar/eliminar.component';
import { ListarModelosComponent } from './Componentes/listar-modelos/listar-modelos.component';
import { GuardarModelosComponent } from './Componentes/guardar-modelos/guardar-modelos.component';
import { EditarModelosComponent } from './Componentes/editar-modelos/editar-modelos.component';

const routes: Routes = [

  {path: "listar",component:ListarComponent},
  {path: "guardar",component:GuardarComponent},
  {path: "editar",component:EditarComponent},
  {path: "elimina",component:EliminarComponent},
  {path: "listarModelos",component:ListarModelosComponent},
  {path: "guardarModelo",component:GuardarModelosComponent},
  {path: "editarModelo",component:EditarModelosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
