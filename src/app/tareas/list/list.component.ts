import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Tareas } from '../models/tareas.model';
import { filtersValid } from '../tareas.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: Tareas[] = [];
  filters: filtersValid = "All";

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(({ tareas, filter }) => {
      this.list = tareas
      this.filters = filter
    })
  }

}
