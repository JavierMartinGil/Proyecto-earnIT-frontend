import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-formcol',
  templateUrl: './formcol.component.html',
  styleUrls: ['./formcol.component.css']
})
export class FormcolComponent implements OnInit {

  formulario_colabora: FormGroup;

  constructor() {
    this.formulario_colabora = new FormGroup({});
  }

  ngOnInit() {
  }

}
