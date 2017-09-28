import { initialState } from '../initialState';

import { TODO_CREATE,
         TODO_DELETE,
         TODO_TOGGLE_COMPLETE } from './actions';

export const todos = (state = initialState.todos, action) => {
    switch (action.type) {
        case TODO_CREATE:
            return [...state, action.payload];
        case TODO_TOGGLE_COMPLETE:
            return state.map(todo => todo.id === action.payload.id ? Object.assign(todo, { completed: !todo.completed }) : todo);
        case TODO_DELETE:
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    }
}
