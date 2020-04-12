import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ArticulosService } from '../services/articulos.service';
import { Articulo } from '../models/articulo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.scss']
})
export class AgregarArticuloComponent implements OnInit {
  usuarios: Array<User>= new Array<User>()
  formularioArticulo: FormGroup;
  aritulo: Articulo= new Articulo();
  esNuevo: boolean= true
  titulo: string=''
  constructor(private articuloInyectado: ArticulosService, private fbGenerator: FormBuilder, private RutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.esNuevo=JSON.parse(this.RutaActiva.snapshot.params.esNuevo)
    this.titulo= this.esNuevo ? 'Agregar': 'Editar'

  

    this.formularioArticulo= this.fbGenerator.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required]
    })

    if (!this.esNuevo) {
      this.aritulo= this.articuloInyectado.articulo
      this.formularioArticulo.setValue({
          title: this.aritulo.title,
          body: this.aritulo.body,
          userId: this.aritulo.userId 
      })
    }

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
  editar(){
    this.aritulo= this.formularioArticulo.value as Articulo
    this.aritulo.id= this.articuloInyectado.articulo.id
    this.articuloInyectado.actualizarArticulo(this.aritulo).subscribe((articuloRecibido)=>{
        console.log(articuloRecibido)
        console.log('se edito correctamente')
    })
  }


}
