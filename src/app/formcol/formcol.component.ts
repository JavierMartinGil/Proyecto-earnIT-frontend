import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ColaboraService } from '../colabora.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-formcol',
  templateUrl: './formcol.component.html',
  styleUrls: ['./formcol.component.css']
})
export class FormcolComponent implements OnInit {

  formulario_colabora: FormGroup;

  constructor(private colaboraService: ColaboraService, private router: Router) {
    this.formulario_colabora = new FormGroup({
      cargo: new FormControl('', [
        Validators.required
      ]),
      experiencia: new FormControl('', [
        Validators.required
      ]),
      tecnologia: new FormControl('', [
        Validators.required
      ]),
      sector: new FormControl('', [
        Validators.required
      ]),
      bruto: new FormControl('', [
        Validators.required
      ]),
    });
  }

  onSubmit() {

    this.colaboraService.nuevo(this.formulario_colabora.value)
      .then(response => {
        if (response) {
          this.router.navigate(['/gracias'])
        }
      })
      .catch(err => {
        alert('Error en el registro. Inténtalo de nuevo más tarde.');
      })
  }

  ngOnInit() {
  }

}
