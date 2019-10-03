import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ComparaService } from '../compara.service'


@Component({
  selector: 'app-formcomp',
  templateUrl: './formcomp.component.html',
  styleUrls: ['./formcomp.component.css']
})
export class FormcompComponent implements OnInit {

  formulario_solicitud: FormGroup;
  salario_medio: number;
  datos_devs: any;
  datos_totales: any;
  no_results: string;


  constructor(private comparaService: ComparaService) {

    this.salario_medio = 0;
    this.datos_devs = [];

    this.formulario_solicitud = new FormGroup({
      cargo: new FormControl('', [
        Validators.required
      ]),
      experiencia: new FormControl('', [
        Validators.required
      ]),
      tecnologia: new FormControl('', [
        Validators.required
      ]),
    });
  }

  onSubmit() {
    this.comparaService.comparar(this.formulario_solicitud.value)
      .then(response => {
        this.salario_medio = response[0][0]['salario_medio'];
        this.datos_devs = response[1][0];
        this.datos_totales = response[1];
        if (this.salario_medio == null) {
          this.no_results = 'Lo sentimos, no hay resultados para tu búsqueda :\'(';
        } else {
          this.no_results = '';
        }
      })
      .catch(err => {
        this.no_results = 'Lo sentimos, ocurrió un error enviando el formulario, inténtalo de nuevo más tarde';
      })
  }


  scroll(element) {
    element.scrollIntoView();
  }

  ngOnInit() {
  }

}
