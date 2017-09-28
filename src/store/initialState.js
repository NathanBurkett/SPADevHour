import { generateId } from '../helpers/generateId';

export const initialState = {
    todos: [
        {
            id       : generateId(),
            content  : "Brush teeth",
            completed: true,
        },
        {
            id       : generateId(),
            content  : "Fire the Missles",
            completed: false,
        },
        {
            id       : generateId(),
            content  : "Surf the Web",
            completed: false,
        },
    ]
};
