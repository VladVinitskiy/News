import todos from './todos/todos';
import visibilityFilter from './visibilityFilter/visibilityFilter';
import {combineReducers} from 'redux'

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;