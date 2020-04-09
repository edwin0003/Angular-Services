import { Usuario } from './../models/usuario';
import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo';
import { UsuarioService } from '../services/usuario.service';
import { ArticulosService } from '../services/articulos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articulos: Array <Articulo>= new Array<Articulo>();

  constructor(public usuarioInyectado: UsuarioService,public articuloInyectado:ArticulosService,public Ruta:Router) { }

  ngOnInit(): void {  
    this.articuloInyectado.leerNoticias().subscribe((articulosDesdeApi)=>{
      this.articulos= articulosDesdeApi;
    })
  }
  irAlDetalle(articulo: Articulo){
    this.articuloInyectado.articulo=articulo;
    this.Ruta.navigateByUrl('/articulo-detalle') 
  }

}
