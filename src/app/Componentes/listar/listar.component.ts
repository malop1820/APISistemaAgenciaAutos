import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Model/Marcas';
import { ServiceService } from 'src/app/Servicio/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
//declarar el constructor en el que vaamos a inyectar el router y servicio
constructor(private router:Router,private servicio:ServiceService){}

//declarar las variables de tipo coleccion
listarMarcas:Marcas[];

//todo lo que pongas aqui se ejecuta el cargar componente
ngOnInit():void{

  //recibir la respuesta del servidor -- al consumir servicio
  this.servicio.listarM().subscribe(data=>{
    console.log(data);
    this.listarMarcas=data;
    })
  }

  abrirComEditarEnviarId(marca:Marcas){
    //enviar el id paea poder realizaer la busqiedad
    localStorage.setItem("id",marca.id.toString());
    this.router.navigate(["editar"]);
  }

  abrirComEditarEliminarId(marca:Marcas){
  localStorage.setItem("id",marca.id.toString());

    this.router.navigate(["eliminar"]);
  }

  

}
