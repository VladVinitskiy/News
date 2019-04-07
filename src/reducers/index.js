import todos from './todos/todos';
import visibilityFilter from './visibilityFilter/visibilityFilter';
import correctlyForm from './validate/validateForm';
import newsLength  from './newsLength/newsLength';
import users from './users/users';
import validateUser from './validateUser/validateUser';
import isAuthorize from './isAuthorize/isAuthorize'
import {combineReducers} from 'redux'

const todoApp = combineReducers({
    correctlyForm,
    visibilityFilter,
    todos,
    newsLength,
    users,
    validateUser,
    isAuthorize
});

export default todoApp;