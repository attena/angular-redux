import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from './contador.actions';


@Component({
  selector: 'app-contador-redux',
  templateUrl: './contador-redux.component.html',
  styleUrls: ['./contador-redux.component.scss']
})

export class ContadorReduxComponent implements OnInit {

  contador: number = 10;

  ngOnInit(): void {
  }

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe(state => {
      console.log(state)
      this.contador = state
    })
  }

  btnIncrementar() {
    this.store.dispatch(actions.increment())
  }

  btnDecrementar() {
    this.store.dispatch(actions.decrement())
  }


}
