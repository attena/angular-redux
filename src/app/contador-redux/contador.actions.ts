import { createAction, props } from '@ngrx/store';

export const increment = createAction('[contador] Incrementar');
export const decrement = createAction('[contador] Decrementar');
export const multiply = createAction('[contador] Multiply', props<{ numero: number }>());
export const divide = createAction('[contador] Divide', props<{ numero: number }>());
export const reset = createAction('[contador] Reset');