import { GuardarModelosComponent } from './Componentes/guardar-modelos/guardar-modelos.component';
import { ListarModelosComponent } from './Componentes/listar-modelos/listar-modelos.component';
import { Component } from '@angular/core';
import { Router ,ROUTES} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fronApiSistemaAgenciaAutos';

  //Declarar un procedimiento para la navegacion al componente de lista
  constructor(private router:Router){}

  //declarar un procedimineto para la navgacion al compnente de listar
  abrirCompListar(): void{
    this.router.navigate(["listar"])
  }

  abrirCompGuardar(){
    this.router.navigate(["guardar"])
  }

  abrirCompListarModelos(): void{
    this.router.navigate(["listarModelos"])
  }

  abrirCompGuardarModelos(){
    this.router.navigate(["guardarModelo"])
  }

  
}
