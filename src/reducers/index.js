import news from './news/news';
import visibilityFilter from './visibilityFilter/visibilityFilter';
import correctlyForm from './validate/validateForm';
import users from './users/users';
import currentUser from './currentUser/currentUser';
import isAuthorize from './isAuthorize/isAuthorize'
import {combineReducers} from 'redux'

const NewsApp = combineReducers({
    correctlyForm,
    visibilityFilter,
    news,
    users,
    currentUser,
    isAuthorize
});

export default NewsApp;