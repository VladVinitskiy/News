import news from './news';
import users from './users';
import validateUser from './validateUser/validateUser';
import user from './user'
import filters from './filters'
import spinner from './spinner'
import {reducer as toastr} from "react-redux-toastr";

import {combineReducers} from 'redux'

const News = combineReducers({
    news,
    users,
    validateUser,
    user,
    filters,
    spinner,
    toastr
});

export default News;