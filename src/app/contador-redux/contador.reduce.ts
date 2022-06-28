import { createReducer, on, Action, State } from "@ngrx/store";
import { decrement, divide, increment, multiply, reset } from "./contador.actions";

// export function contadorReducer(state: number = 10, action: Action) {

//     switch (action.type) {
//         case increment.type:

//             return state += 1;

//         case decrement.type:

//             return state -= 1;

//         default:
//             return state
//     }

// }

export const initialState = 10;

const _contadorReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(multiply, (state, { numero }) => state * numero),
    on(divide, (state, { numero }) => state / numero),
    on(reset, (state) => initialState),
);

export function contadorReducer(state: any, action: Action) {
    return _contadorReducer(state, action)
}