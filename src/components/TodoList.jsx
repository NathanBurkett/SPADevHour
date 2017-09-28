import React from 'react';

import { Todo } from './Todo.jsx';

export class TodoList extends React.Component {
    render() {
        return <ul className="list-todo">
            {this.props.todos.map((todo) =>
                <Todo key={todo.id}
                      {...todo}
                      onClick={() => this.props.onTodoClick(todo)}
                      onDelete={() => this.props.onDelete(todo)} />
            )}
        </ul>;
    }
}
