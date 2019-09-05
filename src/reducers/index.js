import news from './news';
import visibilityFilter from './visibilityFilter/visibilityFilter';
import correctlyForm from './validate/validateForm';
import users from './users';
import validateUser from './validateUser/validateUser';
import user from './user'
import filters from './filters'
import spinner from './spinner'

import {combineReducers} from 'redux'

const todoApp = combineReducers({
    correctlyForm,
    visibilityFilter,
    news,
    users,
    validateUser,
    user,
    filters,
    spinner
});

export default todoApp;