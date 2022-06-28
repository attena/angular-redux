import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  @Input() contador: number;
  @Output() enviarResultado = new EventEmitter<number>();

  constructor() {
    this.contador = 0
  }

  ngOnInit(): void {
  }

  btnMultiplicar() {
    this.contador *= 2;
    this.enviarResultado.emit(this.contador)

  }
  btnDividir() {
    this.contador /= 2;
    this.enviarResultado.emit(this.contador)
  }

  resetEvent(number:number){

    this.contador = number
    this.enviarResultado.emit(this.contador)
  }

}
