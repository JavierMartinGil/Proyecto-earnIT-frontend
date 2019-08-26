import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colabora',
  templateUrl: './colabora.component.html',
  styleUrls: ['./colabora.component.css']
})
export class ColaboraComponent implements OnInit {

  titulo: string;

  constructor() {
    this.titulo = "";
  }

  ngOnInit() {
  }

}
