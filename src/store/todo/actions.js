const modifyTodos = (action, todo) => {
    return { type: action, payload: todo };
};

export const TODO_CREATE          = 'TODO_CREATE';
export const TODO_TOGGLE_COMPLETE = 'TODO_TOGGLE_COMPLETE';
export const TODO_DELETE          = 'TODO_DELETE';

export const todoCreateAction         = (todo) => modifyTodos(TODO_CREATE,          todo);
export const todoToggleCompleteAction = (todo) => modifyTodos(TODO_TOGGLE_COMPLETE, todo);
export const todoDeleteAction         = (todo) => modifyTodos(TODO_DELETE,          todo);
