import { createReducer, on, Action } from '@ngrx/store';
import { Tareas } from './models/tareas.model';
import { add, checkAll, completed, edit, remove, removeCompleted } from './tareas.actions'

export const initialState: Tareas[] = [
  new Tareas('Salvar al mundo')
];

const _tareasReducer = createReducer(
  initialState,
  on(add, (state, { tarea }) => [...state, new Tareas(tarea)]),
  on(completed, (state, { id }) => {

    return state.map(tarea => {
      if (tarea.id === id) {
        return {
          ...tarea,
          completado: !tarea.completado
        }
      }
      return tarea;
    })
  }),
  on(edit, (state, { id, tarea }) => {
    return state.map(items => {
      if (items.id === id) {
        return {
          ...items,
          text: tarea,
        }
      }
      return items;
    })
  }),
  on(remove, (state, { id }) => state.filter(tarea => tarea.id !== id)
  ),
  on(checkAll, (state) => {

    return state.map(tarea => {
      return {
        ...tarea,
        completado: !tarea.completado
      }
    })
  }),
  on(removeCompleted, (state) => state.filter(tarea => !tarea.completado))
);


export function tareasReducer(state: any, action: Action) {
  return _tareasReducer(state, action)
}

