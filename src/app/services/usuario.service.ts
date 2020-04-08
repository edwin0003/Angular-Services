import { Usuario } from '../models/usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario= new Usuario();

  constructor() {
    this.usuario.usuarioID=1;
    this.usuario.nombre='Carlos';
    this.usuario.apellido= 'Perez';
      
   }
}
