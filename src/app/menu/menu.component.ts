import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  estadobtn: boolean;

  constructor() {


    this.estadobtn = false;

  }
  cambiaestado() {

    this.estadobtn = !this.estadobtn;
  }
  ngOnInit() {
  }

}
