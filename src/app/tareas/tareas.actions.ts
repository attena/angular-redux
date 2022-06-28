import { createAction, props } from '@ngrx/store';

export type filtersValid = 'All' | 'Done' | 'Todo';

export const add = createAction('[Tareas] Add', props<{ tarea: string }>());
export const completed = createAction('[Tareas] Completed', props<{ id: number }>());
export const edit = createAction('[Tareas] Edit', props<{ id: number, tarea: string }>());
export const remove = createAction('[Tareas] Remove', props<{ id: number }>());
export const checkAll = createAction('[Tareas] CheckAll');

export const filters = createAction('[Filtro] Set filter', props<{filter: filtersValid}>());
export const removeCompleted = createAction('[Filtro] Remove Completed');





