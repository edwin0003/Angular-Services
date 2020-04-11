import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ArticulosService } from '../services/articulos.service';
import { Articulo } from '../models/articulo';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.scss']
})
export class AgregarArticuloComponent implements OnInit {
  usuarios: Array<User>= new Array<User>()
  formularioArticulo: FormGroup;
  aritulo: Articulo= new Articulo();
  constructor(private articuloInyectado: ArticulosService, private fbGenerator: FormBuilder) { }

  ngOnInit(): void {

    this.formularioArticulo= this.fbGenerator.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required]
    })

    this.articuloInyectado.leerTodosLosUsuarios().subscribe((usuariosRecividos)=>{
        this.usuarios = usuariosRecividos;
    })
  }
  agregar(){
    this.aritulo= this.formularioArticulo.value as Articulo;
    this.articuloInyectado.guardarArticulo(this.aritulo).subscribe((articuloRecivido)=>{
      console.log(articuloRecivido)
      console.log('se registro su primer articulo');
      this.formularioArticulo.reset();
    })
  }


}
