import { connect } from 'react-redux';
import { todoCreateAction } from '../store/todo/actions';
import { AddTodo } from '../components/AddTodo.jsx';

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (todo) => dispatch(todoCreateAction(todo))
    }
}

export const AddTodoContainer = connect(mapStateToProps, mapDispatchToProps)(AddTodo);
