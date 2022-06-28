import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Tareas } from '../models/tareas.model';
import { filters, filtersValid, removeCompleted } from '../tareas.actions';


@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  filter: filtersValid = 'All';
  filterList: filtersValid[] = ['All', 'Done', 'Todo'];
  countTareas: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(({ tareas, filter }) => {
      this.filter = filter
      this.countTareas = tareas.filter(tarea => !tarea.completado).length
    })
  }


  changeFilter(filter: filtersValid) {
    this.store.dispatch(filters({ filter }))
  }

  removeCompleted(){
    this.store.dispatch(removeCompleted())
  }

}
