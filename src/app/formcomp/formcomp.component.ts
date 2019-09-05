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
  salario_medio: number;
  datos_devs: any;


  constructor(private comparaService: ComparaService, private router: Router) {

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
        this.salario_medio = parseInt(response[0][0]['salario_medio']);
        this.datos_devs = response[1][0];
        console.log(this.salario_medio);
        console.log(this.datos_devs);
        this.router.navigate['#resultados']
      })
      .catch(err => {
        alert(err);
      })
  }

  ngOnInit() {
  }

}
