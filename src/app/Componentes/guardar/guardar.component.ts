import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Model/Marcas';
import { ServiceService } from 'src/app/Servicio/service.service';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent {
  constructor(private rouuter:Router, private servicio:ServiceService){}

  //declarar objeto
  marca: Marcas=new Marcas();

  //declarar metodo para guardar
  guardar(){
  this.servicio.guardarM(this.marca).subscribe(data=>{
      this.rouuter.navigate(["listar"]);
    })
  }      
}
