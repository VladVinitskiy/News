import news from './news';
import adminData from './adminData';
import user from './user'
import filters from './filters'
import spinner from './spinner'
import {reducer as toastr} from "react-redux-toastr";

import {combineReducers} from 'redux'

const News = combineReducers({
    news,
    adminData,
    user,
    filters,
    spinner,
    toastr
});

export default News;