const spinner = (state = false, action) => {
    switch (action.type) {
        case 'GET_NEWS_PENDING':
        case 'LOG_IN_PENDING':
        case 'LOGGED_OUT_PENDING':
        case 'EDIT_USER_PENDING':
        case 'POST_ARTICLE_PENDING':
            return true;

        case 'GET_NEWS_FULFILLED':
        case 'LOG_IN_FULFILLED':
        case 'LOGGED_OUT_FULFILLED':
        case 'EDIT_USER_FULFILLED':
        case 'POST_ARTICLE_FULFILLED':
            return false;

        case 'GET_MALLS_REJECTED':
        case 'LOG_IN_REJECTED':
        case 'LOGGED_OUT_REJECTED':
        case 'EDIT_USER_REJECTED':
        case 'POST_ARTICLE_REJECTED':
            return false;

        default:
            return state;
    }
};
export default spinner;
