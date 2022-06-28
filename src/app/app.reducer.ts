import { ActionReducerMap } from "@ngrx/store"
import { contadorReducer } from "./contador-redux/contador.reduce"
import { filterReducer } from "./tareas/filter.reducer"
import { Tareas } from "./tareas/models/tareas.model"
import { filtersValid } from "./tareas/tareas.actions"
import { tareasReducer } from "./tareas/tareas.reducer"

export interface AppState {
  contador: number,
  tareas: Tareas[]
  filter: filtersValid
}


export const AppReducers: ActionReducerMap<AppState> = {
  tareas: tareasReducer,
  filter: filterReducer,
  contador: contadorReducer
}