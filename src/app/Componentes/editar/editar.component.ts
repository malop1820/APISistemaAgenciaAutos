import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Model/Marcas';
import { Modelos } from 'src/app/Model/Modelos';
import { ServiceService } from 'src/app/Servicio/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  constructor(private router:Router, private servicio:ServiceService){}
  //declarar la variable tipo objeto
  marca:Marcas= new Marcas();
  modelo:Modelos=new Modelos();
  //se ejecuta al momento de cargar el componente 
  ngOnInit(){
    this.buscar();
  }

  buscar(){
    //recibir el id para buscar
    let id=localStorage.getItem("idJugador");
    this.marca.id=Number(id);
  //consumir el servicio buscar 

  this.servicio.buscarM(this.marca).subscribe(data=>{
    this.marca=data;
    console.log(data);
  })
  
  
  }

  editar(){
  //editar el registro
  this.servicio.editarMod(this.modelo).subscribe(data=>{
    this.router.navigate(["listar"]);
  })
  }
}
