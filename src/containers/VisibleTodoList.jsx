import {connect} from 'react-redux';
import {toggleTodo, VisibilityFilters} from '../action/action';
import TodoList from '../components/TodoList';

const {SHOW_ALL, SHOW_READEN, SHOW_UNREADEN} = VisibilityFilters;

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case SHOW_ALL:
            return todos;
        case SHOW_READEN:
            return todos.filter(t => t.status);
        case SHOW_UNREADEN:
            return todos.filter(t => !t.status);
        default:
            return todos;
    }
};

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
