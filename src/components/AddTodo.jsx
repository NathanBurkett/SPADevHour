import React from 'react';

import { generateId } from '../helpers/generateId';

export class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: null
        };
    }

    handleFormSubmit(e) {
        e.preventDefault();

        if (!this.state.input.value.trim()) {
            return;
        }

        this.props.onSubmit({
            id       : generateId(),
            content  : this.state.input.value,
            completed: false,
        });

        this.state.input.value = '';
    }

    render() {
        return <form onSubmit={this.handleFormSubmit.bind(this)}>
            <input ref={node => {this.state.input = node}} />
            <button type="submit">Add Todo</button>
        </form>
    }
}
