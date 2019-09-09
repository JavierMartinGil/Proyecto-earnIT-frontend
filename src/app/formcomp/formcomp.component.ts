import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ComparaService } from '../compara.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-formcomp',
  templateUrl: './formcomp.component.html',
  styleUrls: ['./formcomp.component.css']
})
export class FormcompComponent implements OnInit {

  formulario_solicitud: FormGroup;
  salario_medio: string;
  datos_devs: any;
  datos_totales: any;


  constructor(private comparaService: ComparaService, private router: Router) {

    this.salario_medio = "";
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
        if (response[0][0]['salario_medio'] == null) {
          this.salario_medio = 'No hay resultados';

        } else {
          this.salario_medio = response[0][0]['salario_medio'].toString().substring(0, 5);
          this.datos_devs = response[1][0];
          this.datos_totales = response[1];
        }

      })
      .catch(err => {
        alert(err.message);
      })
  }


  scroll(element) {
    element.scrollIntoView();
  }

  ngOnInit() {
  }

}
