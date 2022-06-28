import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { divide, multiply } from '../contador.actions';

@Component({
  selector: 'app-hijoo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijooComponent implements OnInit {

  contador: number = 0;

  constructor(private store: Store<AppState>) {
    this.contador = 0

    this.store.select('contador').subscribe(store => this.contador = store)
  }

  ngOnInit(): void {
  }

  btnMultiplicar() {
    this.store.dispatch(multiply({ numero: 10 }))
  }

  btnDividir() {
    this.store.dispatch(divide({ numero: 2 }))
  }


}
