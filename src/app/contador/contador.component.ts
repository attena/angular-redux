import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  contador: number;

  constructor() {
    this.contador = 10;
  }

  ngOnInit(): void {
  }

  btnIncrementar() {
    this.contador++;
  }

  btnDecrementar() {
    this.contador--;
  }

  resultadosObtenidos(result: number) {
    //console.log(result)
    this.contador = result;
  }

}
