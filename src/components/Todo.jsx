import React from 'react';

export class Todo extends React.Component {
    render() {
        return <li className="todo"
                   onClick={this.props.onClick.bind(this)}>
            <p style={{ textDecoration: this.props.completed ? 'line-through' : 'none' }}>
                {this.props.content}
            </p>
            <span onClick={this.props.onDelete.bind(this)}>X</span>
        </li>;
    }
}
