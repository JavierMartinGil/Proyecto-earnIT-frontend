import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formcomp',
  templateUrl: './formcomp.component.html',
  styleUrls: ['./formcomp.component.css']
})
export class FormcompComponent implements OnInit {

  formulario_solicitud: FormGroup;


  constructor() {

    this.formulario_solicitud = new FormGroup({
      profesion: new FormControl('', [
        Validators.required
      ]),
      experiencia: new FormControl('', [
        Validators.required
      ]),
      tecnologias: new FormControl('', [
        Validators.required
      ]),
    });
  }


  ngOnInit() {
  }

}
