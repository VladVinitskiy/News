import news from './news';
import correctlyForm from './validate/validateForm';
import users from './users';
import validateUser from './validateUser/validateUser';
import user from './user'
import filters from './filters'
import spinner from './spinner'

import {combineReducers} from 'redux'

const News = combineReducers({
    correctlyForm,
    news,
    users,
    validateUser,
    user,
    filters,
    spinner
});

export default News;