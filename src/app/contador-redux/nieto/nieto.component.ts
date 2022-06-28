import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { reset } from '../contador.actions';

@Component({
  selector: 'app-nietoo',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietooComponent implements OnInit {

  contador: number = 0

  constructor(private store: Store<AppState>) {

    this.store.select('contador').subscribe(store => this.contador = store)

  }

  ngOnInit(): void {
  }

  btnReset() {
    this.store.dispatch(reset())
  }

}
