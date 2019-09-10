import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tablaresultados',
  templateUrl: './tablaresultados.component.html',
  styleUrls: ['./tablaresultados.component.css']
})
export class TablaresultadosComponent implements OnInit {


  @Input() datos_totales: any;
  @Input() no_results: string;

  constructor() { }

  ngOnInit() {
  }

}
