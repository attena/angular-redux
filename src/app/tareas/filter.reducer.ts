import { createReducer, on, Action } from '@ngrx/store';
import { filters, filtersValid, removeCompleted } from './tareas.actions'


export const initialState: filtersValid = 'All'

const _FilterReducer = createReducer<filtersValid, Action>(
    initialState,
    on(filters, (state, { filter }) => filter)
);


export function filterReducer(state: any, action: Action) {
    return _FilterReducer(state, action)
}

