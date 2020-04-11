import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ArticulosService } from '../services/articulos.service';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.scss']
})
export class AgregarArticuloComponent implements OnInit {
  usuarios: Array<User>= new Array<User>()
  constructor(private articuloInyectado: ArticulosService) { }

  ngOnInit(): void {
    this.articuloInyectado.leerTodosLosUsuarios().subscribe((usuariosRecividos)=>{
        this.usuarios = usuariosRecividos;
    })
  }

}
