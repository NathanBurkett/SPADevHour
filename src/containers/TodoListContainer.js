import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList.jsx';
import { todoDeleteAction,
         todoToggleCompleteAction } from '../store/todo/actions';

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: (todo) => dispatch(todoToggleCompleteAction(todo)),
        onDelete: (todo) => dispatch(todoDeleteAction(todo)),
    }
}

export const TodoListContainer = connect(mapStateToProps,mapDispatchToProps)(TodoList);
