import { Usuario } from './../models/usuario';
import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articulos: Array <Articulo>= new Array<Articulo>();

  constructor(public usuarioInyectado: UsuarioService) { }

  ngOnInit(): void {
    this.articulos.push({
      titulo: 'Curso JavaScript',
      descripcion:'hola este es un articulo de prueba de un articulo',
      fecha: new Date(),
      usuario: `${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido}`
    },
    {
      titulo: 'Curso React',
      descripcion:'hola este es un articulo de prueba de un articulo',
      fecha: new Date('01/10/2020'),
      usuario: `${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido}`
    },
    {
      titulo: 'Curso Vuejs',
      descripcion:'hola este es un articulo de prueba de un articulo',
      fecha: new Date('06/26/2020'),
      usuario: `${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido}`
    },
    )
  }

}
