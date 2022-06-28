import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {

  @Input() contador: number;
  @Output() enviarResultado = new EventEmitter<number>();

  constructor() { 
    this.contador = 0
  }

  ngOnInit(): void {
  }

  btnReset(){
    this.contador = 0
    this.enviarResultado.emit(this.contador)
  }

}
