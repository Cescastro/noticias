import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() parametrosSeleccionados = new EventEmitter<any>()

  categoriaSeleccionada = 'general';
  paisSeleccionado= 'co';

  categorias: any[] = [
    { value: 'general', nombre: 'General'},
    { value: 'businnes', nombre: 'Negocios'},
    { value: 'travel', nombre: 'Viajero'},
  ]

  paises: any[] = [
    {value: 'co', nombre: 'Colombia'},
    {value: 'ar', nombre: 'Argentina'},    
    {value: 've', nombre: 'Venezuela'},        
    {value: 'br', nombre: 'Brazil'},    
    {value: 'ec', nombre: 'Ecuador'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia(){
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }

    this.parametrosSeleccionados.emit(PARAMETROS)
  }

}
