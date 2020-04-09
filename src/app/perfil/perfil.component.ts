import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor(public usuarioInyectado:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioInyectado.usuario.nombre;
    
  }
  cambiarNombre(nombre: string= "Luis"){
    this.usuarioInyectado.usuario.nombre = nombre;
  }

}
