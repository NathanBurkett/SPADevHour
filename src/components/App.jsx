import React from 'react';

import { TodoListContainer } from '../containers/TodoListContainer';
import { AddTodoContainer } from '../containers/AddTodoContainer';

export class App extends React.Component {
    render() {
        return <div className="app">
            <AddTodoContainer />
            <TodoListContainer />
        </div>;
    }
}
